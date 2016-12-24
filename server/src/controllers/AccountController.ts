import * as express from "express";
import AccountBusiness from "./../app/business/AccountBusiness";
import IBaseController from "./IBaseController";
import IAccountModel from "../app/model/interfaces/IAccountModel";

export default class AccountController implements IBaseController<AccountBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var account: IAccountModel = <IAccountModel>req.body;
            var accountBusiness = new AccountBusiness();
            accountBusiness.create(account, (error, result) => {
                if (error) res.send({ "error": error.message });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var account: IAccountModel = <IAccountModel>req.body;
            var _id: string = req.params._id;
            var accountBusiness = new AccountBusiness();
            accountBusiness.update(_id, account, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var accountBusiness = new AccountBusiness();
            accountBusiness.delete(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var accountBusiness = new AccountBusiness();
            accountBusiness.retrieve((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var accountBusiness = new AccountBusiness();
            accountBusiness.findByid(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }
}