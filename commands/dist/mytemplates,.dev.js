"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _discord = _interopRequireDefault(require("discord.js"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: 'mytemplates',
  run: function run(message, args) {
    var user, servers, embed, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, server, serv;

    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _nodeFetch["default"])("http://localhost:3000/users?id=".concat(message.author.id), {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X'
              }
            }));

          case 2:
            user = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(user.json());

          case 5:
            user = _context.sent;
            servers = user.servers;
            embed = new _discord["default"].MessageEmbed();
            embed.setTitle('Your Templates.');
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 12;
            _iterator = servers[Symbol.iterator]();

          case 14:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 28;
              break;
            }

            server = _step.value;
            _context.next = 18;
            return regeneratorRuntime.awrap((0, _nodeFetch["default"])("http://localhost:3000/templates?stamp=".concat(server), {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X'
              }
            }));

          case 18:
            serv = _context.sent;
            _context.next = 21;
            return regeneratorRuntime.awrap(serv.json());

          case 21:
            serv = _context.sent;
            // console.log(serv);
            serv = serv.head.name;
            if (!serv) serv = "Unnamed Template";
            embed.addField(serv, server);

          case 25:
            _iteratorNormalCompletion = true;
            _context.next = 14;
            break;

          case 28:
            _context.next = 34;
            break;

          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](12);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 34:
            _context.prev = 34;
            _context.prev = 35;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 37:
            _context.prev = 37;

            if (!_didIteratorError) {
              _context.next = 40;
              break;
            }

            throw _iteratorError;

          case 40:
            return _context.finish(37);

          case 41:
            return _context.finish(34);

          case 42:
            message.channel.send(embed);

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[12, 30, 34, 42], [35,, 37, 41]]);
  }
};
exports["default"] = _default;