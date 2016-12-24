"use strict";
const BaseRepository_1 = require("./BaseRepository");
const AccountSchema_1 = require("../dataaccess/schemas/AccountSchema");
class AccountRepository extends BaseRepository_1.default {
    constructor() {
        super(AccountSchema_1.default);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccountRepository;
Object.seal(AccountRepository);
//# sourceMappingURL=AccountRepository.js.map