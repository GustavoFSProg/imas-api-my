"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _utils = require('../utils');




 async function registerValidation(data) {
  const errors = []
  const { email, password } = data

  if (!_utils.isValidEmail.call(void 0, email)) errors.push('Invalid email')

  if (!_utils.isValidPassword.call(void 0, password))
    errors.push('Password must contain 8 characters, uppercase and lowercase')

  if (errors.length) return { errors }

  const userExists = await _utils.getUserByEmail.call(void 0, email)
  if (userExists) errors.push('This email already registered')

  return { errors }
} exports.registerValidation = registerValidation;






 async function loginValidation(data) {
  const errors = []
  const { email, password } = data

  if (!_utils.isValidEmail.call(void 0, email)) errors.push('Invalid email')

  if (!_utils.isValidPassword.call(void 0, password))
    errors.push('Password must contain 8 characters, uppercase and lowercase')

  if (errors.length) return { errors }

  const userExists = await _utils.getUserByEmailAndPassword.call(void 0, email, password)

  if (!userExists) errors.push('User not found')

  const user = (userExists ) 

  return { errors, user }
} exports.loginValidation = loginValidation;
