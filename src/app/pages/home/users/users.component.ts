import {Component, OnInit} from '@angular/core';
import {User} from "../../../classes/user";
import {Vendor} from "../../../classes/vendor";
import {DataService} from "../../../services/data.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    local_users: User[];
    local_vendors: Vendor[];
    loading: boolean;

    constructor(public data: DataService) {

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

    refresh_all(): void {
        // Run calculated methods here
    }

}
