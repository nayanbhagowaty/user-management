"use strict";
const AccountBusiness_1 = require("./../app/business/AccountBusiness");
class AccountController {
    create(req, res) {
        try {
            var account = req.body;
            var accountBusiness = new AccountBusiness_1.default();
            accountBusiness.create(account, (error, result) => {
                if (error)
                    res.send({ "error": error.message });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req, res) {
        try {
            var account = req.body;
            var _id = req.params._id;
            var accountBusiness = new AccountBusiness_1.default();
            accountBusiness.update(_id, account, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req, res) {
        try {
            var _id = req.params._id;
            var accountBusiness = new AccountBusiness_1.default();
            accountBusiness.delete(_id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req, res) {
        try {
            var accountBusiness = new AccountBusiness_1.default();
            accountBusiness.retrieve((error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    findById(req, res) {
        try {
            var _id = req.params._id;
            var accountBusiness = new AccountBusiness_1.default();
            accountBusiness.findByid(_id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AccountController;
//# sourceMappingURL=AccountController.js.map