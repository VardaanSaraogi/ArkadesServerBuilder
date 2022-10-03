"use strict";

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _cors = _interopRequireDefault(require("cors"));

var _expressApiKeyAuth = require("@vpriem/express-api-key-auth");

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var app = new _express["default"]();
var key = '9jN#BcavMWY*kZk5D20!8SGnS$X';
// const firebase = require("firebase/app");
// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// require('firebase/database')
var templates = [];
var users = [];

function loadData() {
  return regeneratorRuntime.async(function loadData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _fs["default"].readFile("./db.json", "utf8", function (err, jsonString) {
            if (err) {
              console.log("File read failed:", err);
              return;
            } // console.log("File data:", jsonString);


            var valid = JSON.parse(jsonString);
            users = valid.users;
            templates = [].concat(_toConsumableArray(templates), _toConsumableArray(valid.servers)); // console.log(valid
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function writeServer() {
  var jsonString;
  return regeneratorRuntime.async(function writeServer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          jsonString = JSON.stringify({
            users: users,
            servers: templates
          });

          _fs["default"].writeFile('./db.json', jsonString, function (err) {
            if (err) {
              console.log('Error writing file', err);
            } else {
              console.log('Successfully wrote file');
            }
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function writeUsers() {
  var jsonString;
  return regeneratorRuntime.async(function writeUsers$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          jsonString = JSON.stringify(users);

          _fs["default"].writeFile('./db.json', jsonString, function (err) {
            if (err) {
              console.log('Error writing file', err);
            } else {
              console.log('Successfully wrote file');
            }
          });

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function wrapper() {
  return regeneratorRuntime.async(function wrapper$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(loadData());

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}

wrapper();
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
app.use((0, _expressApiKeyAuth.apiKeyAuth)([key]));
app.get('/templates', function _callee(req, res) {
  var stamp, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, template;

  return regeneratorRuntime.async(function _callee$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          stamp = req.query.stamp;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context5.prev = 4;
          _iterator = templates[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context5.next = 13;
            break;
          }

          template = _step.value;

          if (!(template.head.stamp == stamp)) {
            _context5.next = 10;
            break;
          }

          return _context5.abrupt("return", res.send(template));

        case 10:
          _iteratorNormalCompletion = true;
          _context5.next = 6;
          break;

        case 13:
          _context5.next = 19;
          break;

        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context5.t0;

        case 19:
          _context5.prev = 19;
          _context5.prev = 20;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 22:
          _context5.prev = 22;

          if (!_didIteratorError) {
            _context5.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context5.finish(22);

        case 26:
          return _context5.finish(19);

        case 27:
          return _context5.abrupt("return", res.sendStatus(404));

        case 28:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[4, 15, 19, 27], [20,, 22, 26]]);
});
app.post('/templates', function _callee2(req, res) {
  var bod;
  return regeneratorRuntime.async(function _callee2$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          bod = req.body;
          console.log(bod, 'ddd');
          _context6.next = 4;
          return regeneratorRuntime.awrap(templates.push(bod));

        case 4:
          _context6.next = 6;
          return regeneratorRuntime.awrap(writeServer());

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  });
});
app.get('/tottemplates', function (req, res) {
  console.log(_typeof(templates[0]));
  res.send(templates);
});
app.get('/users', function (req, res) {
  var flag = false;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = users[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var user = _step2.value;

      if (req.query.id == user.id) {
        flag = true;
        return res.send(user);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (flag === false) {
    return res.sendStatus(404);
  }
});
app.get('/tot', function (req, res) {
  res.send(users);
});
app.post('/users', function _callee3(req, res) {
  var id, index;
  return regeneratorRuntime.async(function _callee3$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          console.log(req.body);
          id = req.body.id;
          index = users.map(function (x) {
            return x.id;
          }).indexOf(id);

          if (index != -1) {
            users[index].servers = req.body.servers;
          } else {
            users.push(req.body);
          }

          _context7.next = 6;
          return regeneratorRuntime.awrap(writeServer());

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  });
});
app.listen(3000, function () {
  return console.log('Arkade backend servers up and running');
});