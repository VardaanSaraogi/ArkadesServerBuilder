"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _struct = require("../struct.js");

var server = (0, _struct.compileServer)('VardaansServer', 'category-full', 'abc123', [[(0, _struct.channel)('Channel 1'), (0, _struct.channel)('Channel 2')], [(0, _struct.channel)('Channel 3'), (0, _struct.channel)('Channel 4')], (0, _struct.channel)('Voice 1', 'voice')], [(0, _struct.category)('Category 1'), (0, _struct.category)('Category 2')]); // module.exports = server

var _default = server;
exports["default"] = _default;