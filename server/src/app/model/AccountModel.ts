import IAccountModel from "./interfaces/IAccountModel";

export default class AccountModel {

    private accountModel: IAccountModel;

    constructor(accountModel: IAccountModel) {
        this.accountModel = accountModel;
    }
    get name(): string {
        return this.accountModel.name;
    }

    get password(): string {
        return this.accountModel.password;
    }

    get email(): string {
        return this.accountModel.email;
    }

}
Object.seal(AccountModel);