"use strict";
const express = require('express');
const AccountRoutes_1 = require('../routes/AccountRoutes');
var app = express();
class Routes {
    get routes() {
        app.use("/", new AccountRoutes_1.default().routes);
        return app;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
//# sourceMappingURL=Routes.js.map