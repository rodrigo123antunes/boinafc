const express = require('express');
const MatcheController = require('./controllers/MatcheController');
const routes = express.Router();

routes.get('/matches', MatcheController.index);

module.exports = routes;