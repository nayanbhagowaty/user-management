"use strict";
const express = require("express");
const AccountController_1 = require("./../../controllers/AccountController");
var router = express.Router();
class AccountRoutes {
    constructor() {
        this._accountController = new AccountController_1.default();
    }
    get routes() {
        var controller = this._accountController;
        router.get("/accounts", controller.retrieve);
        router.post("/accounts", controller.create);
        router.put("/accounts/:_id", controller.update);
        router.get("/accounts/:_id", controller.findById);
        router.delete("/accounts/:_id", controller.delete);
        return router;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccountRoutes;
Object.seal(AccountRoutes);
//# sourceMappingURL=AccountRoutes.js.map