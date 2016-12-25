import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {Account} from "../../models/account";
import { Router } from '@angular/router';

@Component({
    selector: 'my-accounts',
    templateUrl: './app/components/accounts/accounts.component.html'
})

export class AccountsComponent implements OnInit {

    accounts: Account[];
    selectedAccount: Account;
    error: any;

    constructor(
        private router: Router,
        private accountService: AccountService) { }
    getAccounts() {
        this.accountService.getAccounts().then(accounts => this.accounts = accounts);
    }
    ngOnInit() {
        this.getAccounts();
    }
    onSelect(account: Account) { this.selectedAccount = account; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedAccount._id]);
        console.log("hello")
    }

    addAccount() {
        this.selectedAccount = null;
        this.router.navigate(['/detail', 'new']);
    }

    deleteAccount(account: Account, event: any) {
        event.stopPropagation();
        this.accountService
            .delete(account)
            .then(res => {
                this.accounts = this.accounts.filter(h => h !== account);
                if (this.selectedAccount === account) { this.selectedAccount = null; }
            })
            .catch(error => this.error = error);
    }
}
