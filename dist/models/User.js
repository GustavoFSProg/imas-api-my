"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const schema = new (0, _mongoose.Schema)({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    index: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

exports. default = _mongoose.model.call(void 0, 'User', schema)
