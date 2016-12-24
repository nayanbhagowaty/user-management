"use strict";
const express = require('express');
const Routes_1 = require("./config/routes/Routes");
const bodyParser = require("body-parser");
const path = require('path');
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'developement';
var app = express();
exports.app = app;
app.set('port', port);
app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));
app.use(express.static(path.resolve(__dirname, '../../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));
app.use(bodyParser.json());
app.use('/api', new Routes_1.default().routes);
var renderIndex = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/index.html'));
};
app.get('/*', renderIndex);
if (env === 'developement') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}
app.use(function (req, res, next) {
    let err = new Error("Not Found");
    next(err);
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});
//# sourceMappingURL=server.js.map