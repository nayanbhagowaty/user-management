import IAccountModel from "./../model/interfaces/IAccountModel";
import RepositoryBase from "./BaseRepository";
import Schema from "../dataaccess/schemas/AccountSchema";

export default class AccountRepository extends RepositoryBase<IAccountModel> {
    constructor() {
        super(Schema);
    }
}

Object.seal(AccountRepository);