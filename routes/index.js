const express = require('express');
const routes = require('require-dir')();
const indexCtrl = require('../controllers/index');
const changeCase = require('change-case');

module.exports = (app) => {
    Object.keys(routes).forEach((routeName) => {
        const router = express.Router();

        debugger
        require(`./${routeName}`)(router);
        app.use(`/api/${changeCase.paramCase(routeName)}`, router);
    });
    const router = express.Router();
    router.get('/', indexCtrl.ping)
};