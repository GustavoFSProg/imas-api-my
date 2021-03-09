"use strict";Object.defineProperty(exports, "__esModule", {value: true});/* eslint-disable no-var */
/* eslint-disable import/no-mutable-exports */



 var user = null; exports.user = user
 var res = null; exports.res = res

 function setCurrentUser(_currentUser, _response) {
  exports.user = _currentUser
  exports.res = _response
} exports.setCurrentUser = setCurrentUser;
