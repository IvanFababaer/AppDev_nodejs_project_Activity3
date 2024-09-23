const express = require('express');
const routes = express.Router();
const IvanController = require('../controller/IvanController');
routes.get('/' , IvanController.index);

routes.get('/', IvanController.index);
routes.get('/about', IvanController.about);
routes.get('/contact', IvanController.contact);
routes.get('/services', IvanController.services);
routes.get('/help', IvanController.help);
module.exports = routes;