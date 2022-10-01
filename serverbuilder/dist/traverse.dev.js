"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _struct = require("./struct.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ServerMethods =
/*#__PURE__*/
function () {
  function ServerMethods() {
    _classCallCheck(this, ServerMethods);
  }

  _createClass(ServerMethods, null, [{
    key: "unpackServer",
    value: function unpackServer(message, server) {
      var breadth, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, category, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, channel;

      return regeneratorRuntime.async(function unpackServer$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              breadth = function _ref(s) {
                var count = 1;
                var init = s.head.children[0];

                if (init.children) {
                  while (init.children.length > 0) {
                    console.log(count);
                    count += 1;
                    init = init.children[0];
                  }

                  return count;
                } else {
                  return count;
                }
              };

              // console.log(server.head)c
              console.log(server);
              message.guild.channels.cache.forEach(function (channel) {
                return channel["delete"]();
              });
              message.guild.setName(server.head.name);

              if (!(breadth(server) == 2)) {
                _context2.next = 37;
                break;
              }

              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context2.prev = 8;
              _iterator = server.head.children[Symbol.iterator]();

            case 10:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context2.next = 21;
                break;
              }

              category = _step.value;

              if (!(category.type === 'category')) {
                _context2.next = 17;
                break;
              }

              _context2.next = 15;
              return regeneratorRuntime.awrap(function _callee() {
                var temp, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, channel;

                return regeneratorRuntime.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log('yes');
                        _context.next = 3;
                        return regeneratorRuntime.awrap(message.guild.channels.create(category.name, {
                          type: 'category'
                        }));

                      case 3:
                        temp = _context.sent;
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context.prev = 7;

                        for (_iterator2 = category.children[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                          channel = _step2.value;
                          message.guild.channels.create(channel.name, {
                            type: channel.type
                          }).then(function (res) {
                            res.setParent(temp.id);
                          });
                        }

                        _context.next = 15;
                        break;

                      case 11:
                        _context.prev = 11;
                        _context.t0 = _context["catch"](7);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context.t0;

                      case 15:
                        _context.prev = 15;
                        _context.prev = 16;

                        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                          _iterator2["return"]();
                        }

                      case 18:
                        _context.prev = 18;

                        if (!_didIteratorError2) {
                          _context.next = 21;
                          break;
                        }

                        throw _iteratorError2;

                      case 21:
                        return _context.finish(18);

                      case 22:
                        return _context.finish(15);

                      case 23:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, null, null, [[7, 11, 15, 23], [16,, 18, 22]]);
              }());

            case 15:
              _context2.next = 18;
              break;

            case 17:
              if (category.name) {
                message.guild.channels.create(category.name, {
                  type: category.type
                });
              }

            case 18:
              _iteratorNormalCompletion = true;
              _context2.next = 10;
              break;

            case 21:
              _context2.next = 27;
              break;

            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](8);
              _didIteratorError = true;
              _iteratorError = _context2.t0;

            case 27:
              _context2.prev = 27;
              _context2.prev = 28;

              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }

            case 30:
              _context2.prev = 30;

              if (!_didIteratorError) {
                _context2.next = 33;
                break;
              }

              throw _iteratorError;

            case 33:
              return _context2.finish(30);

            case 34:
              return _context2.finish(27);

            case 35:
              _context2.next = 56;
              break;

            case 37:
              _iteratorNormalCompletion3 = true;
              _didIteratorError3 = false;
              _iteratorError3 = undefined;
              _context2.prev = 40;

              for (_iterator3 = server.head.children[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                channel = _step3.value;
                message.guild.channels.create(channel.name, {
                  type: channel.type
                });
              }

              _context2.next = 48;
              break;

            case 44:
              _context2.prev = 44;
              _context2.t1 = _context2["catch"](40);
              _didIteratorError3 = true;
              _iteratorError3 = _context2.t1;

            case 48:
              _context2.prev = 48;
              _context2.prev = 49;

              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }

            case 51:
              _context2.prev = 51;

              if (!_didIteratorError3) {
                _context2.next = 54;
                break;
              }

              throw _iteratorError3;

            case 54:
              return _context2.finish(51);

            case 55:
              return _context2.finish(48);

            case 56:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[8, 23, 27, 35], [28,, 30, 34], [40, 44, 48, 56], [49,, 51, 55]]);
    }
  }, {
    key: "copyServer",
    value: function copyServer(message, name, stamp) {
      var serv;
      return regeneratorRuntime.async(function copyServer$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              serv = new _struct.ServerConstructor();
              _context3.next = 3;
              return regeneratorRuntime.awrap(serv.buildMain(name, stamp));

            case 3:
              _context3.next = 5;
              return regeneratorRuntime.awrap(serv.extractFromServer(message));

            case 5:
              console.log(serv.breadth());
              return _context3.abrupt("return", serv);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return ServerMethods;
}();

exports["default"] = ServerMethods;