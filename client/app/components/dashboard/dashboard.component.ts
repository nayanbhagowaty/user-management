import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Account} from "../../models/account";
import {AccountService} from "../../services/account.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    accounts: Account[] = [];

    constructor(
        private router: Router,
        private accountService: AccountService) {
    }

    ngOnInit() {
        this.accountService.getAccounts()
            .then(accounts => this.accounts = accounts);
    }

    gotoDetail(account: Account) {
        let link = ['/detail', account._id];
        this.router.navigate(link);
    }
}