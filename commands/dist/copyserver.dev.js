"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _traverse = _interopRequireDefault(require("../serverbuilder/traverse.js"));

var _uid = require("uid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import server = from '../serverbuilder/templates/test1')
// import {ServerConstructor} from '../serverbuilder/struct'
var _default = {
  name: "copyserver",
  run: function run(message, args) {
    var serv, user, d, arr, _arr;

    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_traverse["default"].copyServer(message, args[0], (0, _uid.uid)()));

          case 2:
            serv = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap((0, _nodeFetch["default"])("http://localhost:3000/users?id=".concat(message.author.id), {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X'
              }
            }));

          case 5:
            user = _context.sent;
            console.log(user.ok);

            if (!user.ok) {
              _context.next = 18;
              break;
            }

            _context.next = 10;
            return regeneratorRuntime.awrap(user.json());

          case 10:
            d = _context.sent;
            console.log(d);
            arr = d.servers;
            arr.push(serv.head.stamp);
            console.log(arr);
            (0, _nodeFetch["default"])('http://localhost:3000/users', {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
                id: message.author.id,
                servers: arr
              })
            });
            _context.next = 20;
            break;

          case 18:
            _arr = [serv.head.stamp];
            (0, _nodeFetch["default"])('http://localhost:3000/users', {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
                id: message.author.id,
                servers: _arr
              })
            });

          case 20:
            (0, _nodeFetch["default"])("http://localhost:3000/templates", {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify(serv)
            });
            message.channel.send(serv.head.stamp);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports["default"] = _default;