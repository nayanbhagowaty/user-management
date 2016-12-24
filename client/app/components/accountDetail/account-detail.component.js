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
const account_1 = require("../../models/account");
const router_1 = require('@angular/router');
const account_service_1 = require("../../services/account.service");
let AccountDetailComponent = class AccountDetailComponent {
    constructor(accountService, route) {
        this.accountService = accountService;
        this.route = route;
        this.newAccount = false;
        this.navigated = false;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newAccount = true;
                this.account = new account_1.Account();
            }
            else {
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
            this.account = account;
            this.goBack();
        })
            .catch(error => this.error = error);
    }
    goBack() {
        window.history.back();
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', account_1.Account)
], AccountDetailComponent.prototype, "account", void 0);
AccountDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-account-detail',
        templateUrl: './app/components/accountDetail/account-detail.component.html'
    }), 
    __metadata('design:paramtypes', [account_service_1.AccountService, router_1.ActivatedRoute])
], AccountDetailComponent);
exports.AccountDetailComponent = AccountDetailComponent;
//# sourceMappingURL=account-detail.component.js.map