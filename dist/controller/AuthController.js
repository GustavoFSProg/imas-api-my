"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _utils = require('../utils');
var _AuthValidator = require('../validators/AuthValidator');

 async function register(req, res) {
  try {
    const { errors } = await _AuthValidator.registerValidation.call(void 0, req.body)

    if (errors.length) return res.status(404).send({ errors })

    const user = await _utils.createUser.call(void 0, req.body)

    const token = await _utils.generateToken.call(void 0, user)

    return res.status(200).json({ user, token })
  } catch (error) {
    return res.status(400).send(error)
  }
} exports.register = register;

 async function login(req, res) {
  try {
    const { errors, user } = await _AuthValidator.loginValidation.call(void 0, req.body)

    if (errors.length) return res.status(404).send({ errors })

    const token = await _utils.generateToken.call(void 0, user)

    return res.status(200).json({ user, token })
  } catch (error) {
    return res.status(400).send(error)
  }
} exports.login = login;
