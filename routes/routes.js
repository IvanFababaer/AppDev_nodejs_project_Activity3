const express = require('express');
const routes = express.Router();
const IvanController = require('../controller/IvanController');
routes.get('/' , IvanController.index);

module.exports = routes;