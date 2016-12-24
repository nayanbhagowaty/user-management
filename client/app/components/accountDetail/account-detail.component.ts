/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../../models/account";
import { ActivatedRoute, Params } from '@angular/router';
import {AccountService} from "../../services/account.service";

@Component({
    selector: 'my-account-detail',
    templateUrl: './app/components/accountDetail/account-detail.component.html'
})

export class AccountDetailComponent implements OnInit {
    @Input() account: Account;
    newAccount = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private accountService: AccountService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newAccount = true;
                this.account = new Account();
            } else {
                this.newAccount = false;
                this.accountService.getAccount(id)
                    .then(account => this.account = account);
            }
        });
    }

    save() {
        this.accountService
            .save(this.account)
            .then(account => {
                this.account = account; // saved Account, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}