"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const account_service_1 = require("../../services/account.service");
const router_1 = require('@angular/router');
let AccountsComponent = class AccountsComponent {
    constructor(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    getAccounts() {
        this.accountService.getAccounts().then(accounts => this.accounts = accounts);
    }
    ngOnInit() {
        this.getAccounts();
    }
    onSelect(account) { this.selectedAccount = account; }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedAccount._id]);
    }
    addAccount() {
        this.selectedAccount = null;
        this.router.navigate(['/detail', 'new']);
    }
    deleteAccount(account, event) {
        event.stopPropagation();
        this.accountService
            .delete(account)
            .then(res => {
            this.accounts = this.accounts.filter(h => h !== account);
            if (this.selectedAccount === account) {
                this.selectedAccount = null;
            }
        })
            .catch(error => this.error = error);
    }
};
AccountsComponent = __decorate([
    core_1.Component({
        selector: 'my-accounts',
        templateUrl: './app/components/accounts/accounts.component.html'
    }), 
    __metadata('design:paramtypes', [router_1.Router, account_service_1.AccountService])
], AccountsComponent);
exports.AccountsComponent = AccountsComponent;
//# sourceMappingURL=accounts.component.js.map