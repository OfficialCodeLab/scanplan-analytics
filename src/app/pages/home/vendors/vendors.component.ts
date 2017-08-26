import {Component, OnInit} from '@angular/core';
import {User} from "../../../classes/user";
import {Vendor} from "../../../classes/vendor";
import {DataService} from "../../../services/data.service";

@Component({
    selector: 'app-vendors',
    templateUrl: './vendors.component.html',
    styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
    local_users: User[];
    local_vendors: Vendor[];
    loading: boolean;

    constructor(public data: DataService) {

        Promise.all([data.getUsers(), data.getVendors()]).then(responses => {
            this.local_users = responses[0];
            this.local_vendors = responses[1];
        }).catch(ex => console.log(ex));

        data.users_event.subscribe(users => {
            this.local_users = users;
        });

        data.vendors_event.subscribe(vendors => {
            this.local_vendors = vendors;
        });
    }

    ngOnInit() {

    }

    calculateScans(vendor: Vendor): number {
        let count = 0;
        for (let user of this.local_users) {
            if (user.scannedItems.indexOf(vendor.id) !== -1) {
                count++;
            }
        }
        return count;
    }

    calculateFavourites(vendor: Vendor): number {
        let count = 0;
        for (let user of this.local_users) {
            if (user.Favourites.indexOf(vendor.name_english) !== -1) {
                count++;
            }
        }
        return count;
    }

}
