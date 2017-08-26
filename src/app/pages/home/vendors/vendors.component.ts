import {Component, OnInit} from '@angular/core';
import {User} from "../../../classes/user";
import {Vendor} from "../../../classes/vendor";
import {DataService} from "../../../services/data.service";
import {NgModel} from "@angular/forms"

@Component({
    selector: 'app-vendors',
    templateUrl: './vendors.component.html',
    styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
    local_users: User[];
    local_vendors: Vendor[];
    loading: boolean;
    search_terms: string;

    constructor(public data: DataService) {

        this.search_terms = "";
        Promise.all([data.getUsers(), data.getVendors()]).then(responses => {
            this.local_users = responses[0];
            this.local_vendors = responses[1];

            this.refresh_all();

        }).catch(ex => console.log(ex));

        data.users_event.subscribe(users => {
            this.local_users = users;
            this.refresh_all();
        });

        data.vendors_event.subscribe(vendors => {
            this.local_vendors = vendors;
            this.refresh_all();
        });
    }

    ngOnInit() {

    }

    calculateScans(): void {
        for (let vendor of this.local_vendors) {
            let count = 0;
            for (let user of this.local_users) {
                if (user.scannedItems.indexOf(vendor.id) !== -1) {
                    count++;
                }
            }
            vendor.total_scans = count;
        }
    }

    calculateFavourites(): void {
        for (let vendor of this.local_vendors) {
            let count2 = 0;
            for (let user of this.local_users) {
                if (user.Favourites.indexOf(vendor.name_english) !== -1) {
                    count2++;
                }
            }
            vendor.total_favourites = count2;
        }
    }

    refresh_all(): void {
        this.calculateFavourites();
        this.calculateScans();
    }

}
