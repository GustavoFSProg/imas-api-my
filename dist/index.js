"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _config = require('./config');
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

_dotenv2.default.config()
const { DATA_BASE, PORT } = process.env

_config.connectDataBase.call(void 0, String(DATA_BASE))

_config.startServer.call(void 0, PORT || '8000', _routes2.default)
