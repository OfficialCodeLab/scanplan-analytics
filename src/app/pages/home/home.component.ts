import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Data} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    loading: boolean;

    constructor(public data: DataService) {
        this.loading = false;
    }

    ngOnInit() {

    }

    refresh_all_data(): void {
        this.loading = true;
        this.data.refreshDatabase().then(success => {
            this.loading = false;
        }).catch(ex => {
            this.loading = false;
            alert("Failed to update users from database.");
        });
    }

}
