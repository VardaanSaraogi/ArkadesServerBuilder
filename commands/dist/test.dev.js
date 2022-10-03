"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _traverse = _interopRequireDefault(require("../serverbuilder/traverse.js"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import server from '../serverbuilder/templates/test1.js'
var _default = {
  name: "hello",
  run: function run(message, args) {
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log((0, _nodeFetch["default"])('${server}/templates?stamp=abc123'));
            console.log(server.head.children);

            _traverse["default"].unpackServer(message, server);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports["default"] = _default;