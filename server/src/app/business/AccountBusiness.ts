import AccountRepository from "./../repository/AccountRepository";
import IAccountBusiness from "./interfaces/IAccountBusiness";
import IAccountModel from "./../model/interfaces/IAccountModel";

export default class AccountBusiness implements IAccountBusiness {
    private accountRepository: AccountRepository;

    constructor() {
        this.accountRepository = new AccountRepository();
    }

    create(item: IAccountModel, callback: (error: any, result: any) => void) {
        this.accountRepository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this.accountRepository.retrieve(callback);
    }

    update(id: string, item: IAccountModel, callback: (error: any, result: any) => void) {

        this.accountRepository.findByid(id, (err, res) => {
            if (err) callback(err, res);

            else
                this.accountRepository.update(res._id, item, callback);
        });
    }

    delete(id: string, callback: (error: any, result: any) => void) {
        this.accountRepository.delete(id, callback);
    }

    findByid(_id: string, callback: (error: any, result: IAccountModel) => void) {
        this.accountRepository.findByid(_id, callback);
    }

}

Object.seal(AccountBusiness);