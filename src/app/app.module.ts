import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HelpComponent } from './pages/help/help.component';
import {HomeComponent} from "./pages/home/home.component";
import { SummaryComponent } from './pages/home/summary/summary.component';
import { UsersComponent } from './pages/home/users/users.component';
import { VendorsComponent } from './pages/home/vendors/vendors.component';
import {DataService} from "./services/data.service";
import {Http, Headers, HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        HelpComponent,
        HomeComponent,
        SummaryComponent,
        UsersComponent,
        VendorsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
