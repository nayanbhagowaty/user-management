import * as express from "express";
import AccountController from "./../../controllers/AccountController";

var router = express.Router();
export default class AccountRoutes {
    private _accountController: AccountController;

    constructor() {
        this._accountController = new AccountController();
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

Object.seal(AccountRoutes);