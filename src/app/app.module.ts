import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HelpComponent } from './pages/help/help.component';
import {HomeComponent} from "./pages/home/home.component";
import { SummaryComponent } from './pages/home/summary/summary.component';
import { UsersComponent } from './pages/home/users/users.component';
import { VendorsComponent } from './pages/home/vendors/vendors.component'

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
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
