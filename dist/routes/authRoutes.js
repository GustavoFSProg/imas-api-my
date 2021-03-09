"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _AuthController = require('../controller/AuthController');

const route = _express.Router.call(void 0, )

const routes = [route.post('/register', _AuthController.register), route.post('/login', _AuthController.login)]

exports. default = routes
