import DataAccess from "../DataAccess";
import IAccountModel from "./../../model/interfaces/IAccountModel";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AccountSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IAccountModel>("Accounts", AccountSchema.schema);
export default schema; 