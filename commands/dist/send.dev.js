"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: "send",
  run: function run(message, args) {
    var mention, stamp, SenderUser, recieverUser, arr, arr2, arree, arre;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mention = message.mentions.users.first().id;
            console.log(mention);
            stamp = args[0];
            _context.next = 5;
            return regeneratorRuntime.awrap((0, _nodeFetch["default"])("http://localhost:3000/users?id=".concat(message.author.id), {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X'
              }
            }));

          case 5:
            SenderUser = _context.sent;
            _context.next = 8;
            return regeneratorRuntime.awrap((0, _nodeFetch["default"])("http://localhost:3000/users?id=".concat(mention), {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X'
              }
            }));

          case 8:
            recieverUser = _context.sent;

            if (!(SenderUser.ok && recieverUser.ok)) {
              _context.next = 19;
              break;
            }

            _context.next = 12;
            return regeneratorRuntime.awrap(SenderUser.json());

          case 12:
            SenderUser = _context.sent;
            _context.next = 15;
            return regeneratorRuntime.awrap(recieverUser.json());

          case 15:
            recieverUser = _context.sent;

            if (SenderUser.servers.includes(stamp)) {
              arr = SenderUser.servers.filter(function (serv) {
                return serv !== stamp;
              });
              console.log(arr);
              arr2 = recieverUser.servers;
              arr2.push(stamp);
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
              (0, _nodeFetch["default"])('http://localhost:3000/users', {
                headers: {
                  'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X',
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  id: mention,
                  servers: arr2
                })
              });
            } else {
              message.channel.send('Not foujnd');
            }

            _context.next = 25;
            break;

          case 19:
            if (!(SenderUser.ok && !recieverUser.ok)) {
              _context.next = 25;
              break;
            }

            _context.next = 22;
            return regeneratorRuntime.awrap(SenderUser.json());

          case 22:
            SenderUser = _context.sent;
            arree = SenderUser.servers.filter(function (serv) {
              return serv !== stamp;
            });

            if (SenderUser.servers.includes(stamp)) {
              arre = [stamp];
              (0, _nodeFetch["default"])('http://localhost:3000/users', {
                headers: {
                  'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X',
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  id: mention,
                  servers: arre
                })
              });
              (0, _nodeFetch["default"])('http://localhost:3000/users', {
                headers: {
                  'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X',
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  id: message.author.id,
                  servers: arree
                })
              });
            } else {
              message.channel.send('Not foujnd');
            }

          case 25:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports["default"] = _default;