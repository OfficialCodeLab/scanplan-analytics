import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    loading: boolean;

    constructor() {
        this.loading = false;
    }

    ngOnInit() {

    }

    refresh_all_data(): void {
        this.loading = true;
    }

}
