"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _utils = require('../utils');
var _globalVariables = require('../globalVariables');

 function isAuthorized(req, res, next) {
  const token = req.headers.token 

  if (!token) return res.status(401).send({ error: 'User not authorized' })

  const { error, decode } = _utils.verifyToken.call(void 0, token) 

  if (error) return res.status(401).send({ error: 'Invalid token' })

  const currentUser = _utils.getUserByEmail.call(void 0, decode.email)

  if (!currentUser) return res.status(400).json({ message: 'User not found' })

  _globalVariables.setCurrentUser.call(void 0, currentUser, res)

  return next()
} exports.isAuthorized = isAuthorized;
