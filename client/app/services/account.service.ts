import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Account} from "../models/account";

@Injectable()
export class AccountService {

    private accountsUrl = 'api/accounts';  // URL to web api

    constructor(private http: Http) { }

    getAccounts(): Promise<Account[]> {
        return this.http.get(this.accountsUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getAccount(id: string) {
        return this.http.get(this.accountsUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(account: Account): Promise<Account>  {
        if (account._id) {
            return this.put(account);
        }
        return this.post(account);
    }

    private post(account: Account): Promise<Account> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.accountsUrl, JSON.stringify(account), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(account: Account) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.accountsUrl}/${account._id}`;

        return this.http
            .put(url, JSON.stringify(account), {headers: headers})
            .toPromise()
            .then(() => account)
            .catch(this.handleError);
    }

    delete(account: Account) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.accountsUrl}/${account._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}