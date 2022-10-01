"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _traverse = _interopRequireDefault(require("../serverbuilder/traverse.js"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: "build",
  run: function run(message, args) {
    var stamp, user, dee, serv, d;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            stamp = args[0];
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _nodeFetch["default"])("http://localhost:3000/users?id=".concat(message.author.id), {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X'
              }
            }));

          case 3:
            user = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(user.json());

          case 6:
            dee = _context.sent;
            console.log(dee);

            if (!dee.servers.includes(stamp)) {
              _context.next = 18;
              break;
            }

            _context.next = 11;
            return regeneratorRuntime.awrap((0, _nodeFetch["default"])("http://localhost:3000/templates?stamp=".concat(stamp), {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X'
              }
            }));

          case 11:
            serv = _context.sent;
            _context.next = 14;
            return regeneratorRuntime.awrap(serv.json());

          case 14:
            d = _context.sent;

            // console.log(d.head.breadth())
            _traverse["default"].unpackServer(message, d);

            _context.next = 19;
            break;

          case 18:
            message.channel.send('Server not found');

          case 19:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports["default"] = _default;