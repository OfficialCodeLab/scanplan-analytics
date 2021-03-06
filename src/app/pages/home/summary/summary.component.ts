import {Component, OnInit} from '@angular/core';
import {User} from "../../../classes/user";
import {Vendor} from "../../../classes/vendor";
import {DataService} from "../../../services/data.service";


@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
    local_users: User[];
    local_vendors: Vendor[];

    total_user_count: number;
    total_user_scans: number;

    constructor(public data: DataService) {
        data.getUsers().then(users => {
            this.local_users = users;
            return data.getVendors();
        }).then(vendors => {
            this.local_vendors = vendors;
            this.total_user_count = this.calculateTotalUsers();
            this.total_user_scans = this.calculateTotalScans();
        }).catch(ex => {
            console.log(ex);
        });

        data.users_event.subscribe(users => {
            this.local_users = users;
            this.total_user_count = this.calculateTotalUsers();
            this.total_user_scans = this.calculateTotalScans();
        });



        data.vendors_event.subscribe(vendors => {
            this.local_vendors = vendors;
        });
    }

    ngOnInit() {

    }

    calculateTotalUsers(): number {
        let count = 0;

        for (let user of this.local_users) {
            count++;
        }

        return count;
    }
    calculateTotalScans(): number {
        let count = 0;

        for (let user of this.local_users) {
          let scans = user.scannedItems;

          count += scans.length;
        }

        return count;
    }

}
