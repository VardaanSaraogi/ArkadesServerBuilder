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

            if (!user.ok) {
              _context.next = 46;
              break;
            }

            _context.next = 6;
            return regeneratorRuntime.awrap(user.json());

          case 6:
            user = _context.sent;
            servers = user.servers;
            embed = new _discord["default"].MessageEmbed();
            embed.setTitle('Your Templates.');
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 13;
            _iterator = servers[Symbol.iterator]();

          case 15:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 29;
              break;
            }

            server = _step.value;
            _context.next = 19;
            return regeneratorRuntime.awrap((0, _nodeFetch["default"])("http://localhost:3000/templates?stamp=".concat(server), {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X'
              }
            }));

          case 19:
            serv = _context.sent;
            _context.next = 22;
            return regeneratorRuntime.awrap(serv.json());

          case 22:
            serv = _context.sent;
            // console.log(serv);
            serv = serv.head.name;
            if (!serv) serv = "Unnamed Template";
            embed.addField(serv, server);

          case 26:
            _iteratorNormalCompletion = true;
            _context.next = 15;
            break;

          case 29:
            _context.next = 35;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](13);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 35:
            _context.prev = 35;
            _context.prev = 36;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 38:
            _context.prev = 38;

            if (!_didIteratorError) {
              _context.next = 41;
              break;
            }

            throw _iteratorError;

          case 41:
            return _context.finish(38);

          case 42:
            return _context.finish(35);

          case 43:
            message.channel.send(embed);
            _context.next = 47;
            break;

          case 46:
            message.channel.send('You dont have any templates');

          case 47:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[13, 31, 35, 43], [36,, 38, 42]]);
  }
};
exports["default"] = _default;