"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _test = _interopRequireDefault(require("../serverbuilder/templates/test1.js"));

var _traverse = _interopRequireDefault(require("../serverbuilder/traverse.js"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: "hello",
  run: function run(message, args) {
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log((0, _nodeFetch["default"])('http://localhost:3000/templates?stamp=abc123'));
            console.log(_test["default"].head.children);

            _traverse["default"].unpackServer(message, _test["default"]);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports["default"] = _default;