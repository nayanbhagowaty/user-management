"use strict";
const Mongoose = require("mongoose");
const constants_1 = require("../../config/constants/constants");
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(constants_1.default.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataAccess;
DataAccess.connect();
//# sourceMappingURL=DataAccess.js.map