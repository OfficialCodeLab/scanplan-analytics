import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HelpComponent} from './pages/help/help.component';
import {HomeComponent} from "./pages/home/home.component";
import {SummaryComponent} from './pages/home/summary/summary.component';
import {UsersComponent} from './pages/home/users/users.component';
import {VendorsComponent} from './pages/home/vendors/vendors.component';
import {DataTableModule} from "angular2-datatable";
import {DataService} from "./services/data.service";
import {Http, Headers, HttpModule} from '@angular/http';
import { VendorSearchPipe } from './pipes/vendor-search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HelpComponent,
        HomeComponent,
        SummaryComponent,
        UsersComponent,
        VendorsComponent,
        VendorSearchPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        DataTableModule,
        FormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
