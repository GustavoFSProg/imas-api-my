"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

 function connectDataBase(dataBase) {
  if (!dataBase) throw Error(`Connection string is required to start database`)

  _mongoose2.default.connect(dataBase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
} exports.default = connectDataBase;
