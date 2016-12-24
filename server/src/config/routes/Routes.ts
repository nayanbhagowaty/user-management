import * as express from 'express';
import * as path from 'path';

import AccountRoutes from '../routes/AccountRoutes';

var app = express();

export default class Routes {

    get routes() {

        app.use("/", new AccountRoutes().routes);

        return app;
    }
}