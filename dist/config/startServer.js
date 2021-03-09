"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

 function startServer(port, routes) {
  if (!port) throw Error(`Port is required to start server`)
  if (!routes) throw Error(`Routes are required to start server`)

  const app = _express2.default.call(void 0, )

  app.use(_express2.default.json())
  app.use(_cors2.default.call(void 0, ))
  app.use(routes)

  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`⚡ Server is running on port ${port} 🎉`))
} exports.default = startServer;
