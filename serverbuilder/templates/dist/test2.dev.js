"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _struct = require("../struct.js");

var server = (0, _struct.compileServer)('VardaansServer', 'no-category', 'abc1234', [(0, _struct.channel)('EEEE'), (0, _struct.channel)('EEEE')]); // export {server}

var _default = server;
exports["default"] = _default;