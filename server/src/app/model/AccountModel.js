"use strict";
class AccountModel {
    constructor(accountModel) {
        this.accountModel = accountModel;
    }
    get name() {
        return this.accountModel.name;
    }
    get password() {
        return this.accountModel.password;
    }
    get email() {
        return this.accountModel.email;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccountModel;
Object.seal(AccountModel);
//# sourceMappingURL=AccountModel.js.map