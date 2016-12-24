"use strict";
class Constants {
}
Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === "production" ? process.env.dbURI : "mongodb://localhost:27017/quickStart";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Constants;
Object.seal(Constants);
//# sourceMappingURL=constants.js.map