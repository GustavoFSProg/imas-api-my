"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _md5 = require('md5'); var _md52 = _interopRequireDefault(_md5);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

 function encryptPassword(password) {
  return _md52.default.call(void 0, password, process.env.SECRET )
} exports.encryptPassword = encryptPassword;

 function isValidEmail(email) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
} exports.isValidEmail = isValidEmail;

 function isValidPassword(password) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
} exports.isValidPassword = isValidPassword;

 async function generateToken(data) {
  if (!data) throw Error(`Generate token error`)
  const { email, password } = data
  const { SECRET } = process.env
  return _jsonwebtoken2.default.sign({ email, password }, SECRET || '', { expiresIn: '1d' })
} exports.generateToken = generateToken;

 async function decodeToken(token) {
  const secret = (process.env.SECRET || '') 
  return _jsonwebtoken2.default.decode(token, secret)
} exports.decodeToken = decodeToken;

 function verifyToken(token) {
  return _jsonwebtoken2.default.verify(token, process.env.SECRET || '', (error, decode) => {
    if (error) return { error }
    return { decode }
  })
} exports.verifyToken = verifyToken;

const USER_FIELDS = 'firstname lastname email'

 async function getUserByEmailAndPassword(email, password) {
  const user = await _User2.default.findOne({ email, password: encryptPassword(password) }, USER_FIELDS)
  return user
} exports.getUserByEmailAndPassword = getUserByEmailAndPassword;

 async function getUserByEmail(email) {
  const user = await _User2.default.findOne({ email }, USER_FIELDS)
  return user
} exports.getUserByEmail = getUserByEmail;

 async function createUser(data) {
  const { firstname, lastname, email, password } = data
  const currentUser = await _User2.default.create({
    firstname,
    lastname,
    email,
    password: encryptPassword(password),
  })
  const user = (currentUser ) 
  return user
} exports.createUser = createUser;
