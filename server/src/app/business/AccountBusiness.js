"use strict";
const AccountRepository_1 = require("./../repository/AccountRepository");
class AccountBusiness {
    constructor() {
        this.accountRepository = new AccountRepository_1.default();
    }
    create(item, callback) {
        this.accountRepository.create(item, callback);
    }
    retrieve(callback) {
        this.accountRepository.retrieve(callback);
    }
    update(id, item, callback) {
        this.accountRepository.findByid(id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this.accountRepository.update(res._id, item, callback);
        });
    }
    delete(id, callback) {
        this.accountRepository.delete(id, callback);
    }
    findByid(_id, callback) {
        this.accountRepository.findByid(_id, callback);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccountBusiness;
Object.seal(AccountBusiness);
//# sourceMappingURL=AccountBusiness.js.map