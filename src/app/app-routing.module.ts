import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

// import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
import {HelpComponent} from "./pages/help/help.component";
import {HomeComponent} from "./pages/home/home.component";
import {SummaryComponent} from "./pages/home/summary/summary.component";
import {UsersComponent} from "./pages/home/users/users.component";
import {VendorsComponent} from "./pages/home/vendors/vendors.component";


const routes: Routes = [
    {
        // Default path
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: '', redirectTo: 'summary', pathMatch: 'full'},
            {path: 'summary', component: SummaryComponent},
            {path: 'users', component: UsersComponent},
            {path: 'vendors', component: VendorsComponent}
        ]
    }
];

// Use hash in location routes, for hosting on heroku
const routeSettings = {
    useHash: true
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, routeSettings)
    ],
    declarations: [],
    exports: [RouterModule]
})


export class AppRoutingModule {
}
