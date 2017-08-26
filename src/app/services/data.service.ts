import {Injectable} from '@angular/core';
import {Vendor} from "../classes/vendor";
import {User} from "../classes/user";
import {Http, Headers, HttpModule} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
    all_users: User[];
    all_vendors: Vendor[];
    BASE_URL: string;

    constructor(public http: Http) {
        this.BASE_URL = "http://138.68.133.255:1337";
        this.all_users = [];
        this.all_vendors = [];

        this.setupDatabase().then(success => {
            console.log("Refreshed database!");
        }).catch(ex => {
            console.log("Unable to get database!", ex);
        });
    }

    getUsers(): Promise<User[]> {
        if (this.all_users.length !== 0) {
            return Promise.resolve(this.all_users);
        } else {
            return Promise.resolve(this.all_users);
        }
    }

    getVendors(): Promise<Vendor[]> {
        if (this.all_vendors.length !== 0) {
            return Promise.resolve(this.all_vendors);
        } else {
            return Promise.resolve(this.all_vendors);
        }
    }

    setupDatabase(): Promise<any> {
        return new Promise((resolve, reject) => {

            let userPromise = this.http.get(this.BASE_URL + "/api/users/get_all").toPromise();
            let vendorPromise = this.http.get(this.BASE_URL + "/api/vendors/get_all").toPromise();

            Promise.all([userPromise, vendorPromise]).then(resultsArr => {
                console.log(typeof resultsArr);
                // console.log(resultsArr[0].json());
                // All promises are done;
                for (let user of resultsArr[0].json()) {
                    this.all_users.push(new User(user));
                }

                for (let vendor of resultsArr[1].json()) {
                    this.all_vendors.push(new Vendor(vendor));
                }

                console.log("Setup all assets!");
                resolve();
                // console.log(this.all_users);

            }).catch(ex => {
                reject(ex);
            });



            //     const ABALOBI_USERS = this.BASE_URL + '/api/users';
            //     const OPTIONS = this.getRequestWithAuthOptions();
            //
            //     if (this.localFishers === null || this.localFishers === undefined) {
            //         this.http.get(ABALOBI_USERS, OPTIONS).toPromise().then(function (response) {
            //             this.localFishers = response.json()['abalobi-users'] as Fisher;
            //
            //             resolve(this.localFishers);
            //         }.bind(this)).catch(() => reject());
            //
            //     } else {
            //         console.log('Service has fisher values already');
            //         resolve(this.localFishers);
            //     }
            // }.bind(this)); // NOTE: The bind `should` keep this as the parent object


        });
    }

    refreshDatabase(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.setupDatabase().then(success => {
                console.log("Refreshed database!");
                resolve();
            }).catch(ex => {
                console.log("Unable to get database!", ex);
                reject(ex);
            });
        });
    }

}
