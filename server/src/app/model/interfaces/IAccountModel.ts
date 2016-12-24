import * as mongoose from "mongoose";

interface IAccountModel extends mongoose.Document {
    name: string;
    password: string;
    email: string;
    
}

export default IAccountModel;