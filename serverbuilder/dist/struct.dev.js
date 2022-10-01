"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileServer = compileServer;
exports.channel = channel;
exports.category = category;
exports.ServerConstructor = void 0;

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function category(name) {
  return new node(false, name, 'category');
}

function channel(name, type) {
  return new node(false, name, type);
}

function compileServer(serverName, type, stamp, arrayOfChannels, arrayOfCategories) {
  if (type == 'category-full') {
    var serverObj = new ServerConstructor();
    serverObj.buildMain(serverName, stamp);
    serverObj.buildChannels(arrayOfCategories, arrayOfChannels);
    return serverObj;
  }

  if (type == 'no-category') {
    var _serverObj = new ServerConstructor();

    _serverObj.buildMain(serverName, stamp);

    _serverObj.buildNonChannel(arrayOfChannels);

    return _serverObj;
  }

  if (type == 'dynamic') {
    var _serverObj2 = new ServerConstructor();

    _serverObj2.buildMain(serverName, stamp);

    _serverObj2.buildNonChannel(arrayOfChannels);

    return _serverObj2;
  }
}

var node =
/*#__PURE__*/
function () {
  function node(isHead, name, type) {
    _classCallCheck(this, node);

    this.isHead = isHead;
    this.children = [];
    this.name = name;
    this.type = type;

    if (isHead) {
      this.stamp = '';
    }
  }

  _createClass(node, [{
    key: "breadth",
    value: function breadth() {
      var count = 1;
      var init = this.children[0];

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
    }
  }]);

  return node;
}();

var ServerConstructor =
/*#__PURE__*/
function () {
  function ServerConstructor() {
    _classCallCheck(this, ServerConstructor);
  }

  _createClass(ServerConstructor, [{
    key: "buildMain",
    value: function buildMain(serverName, stamp) {
      this.head = new node(true, serverName, 'Header');
      this.head.stamp = stamp;
    }
  }, {
    key: "buildChannels",
    value: function buildChannels(categories, channels) {
      console.log(categories.length, channels.length);

      for (var i = 0; i < categories.length; i++) {
        var catch2 = categories[i];
        catch2.children = channels[i];
        this.head.children.push(catch2);
      }

      if (channels.length > categories.length) {
        for (var j = i; j < channels.length; j++) {
          this.head.children.push(channels[j]);
        }
      }
    }
  }, {
    key: "buildNonChannel",
    value: function buildNonChannel(categories) {
      this.head.children = _toConsumableArray(categories);
    }
  }, {
    key: "extractFromServer",
    value: function extractFromServer(message) {
      var _this = this;

      message.guild.channels.cache.forEach(function (c) {
        if (c.type == 'category') {
          var big = category(c.name);

          _this.head.children.push(big); // console.log(c.children[0].name)


          c.children.forEach(function (smol) {
            console.log(smol.name);
            big.children.push(channel(smol.name, smol.type));
          }); // for(let smol of c.children){
          //     console.log(smol.name , smol.type)
          //     big.children.push(channel(smol.name , smol.type))
          // }
        } else if (!c.parent) {
          _this.head.children.push(channel(c.name, c.type));
        }
      });
    }
  }, {
    key: _util["default"].inspect.custom,
    value: function value() {
      console.log(this.breadth());

      if (this.breadth() == 2) {
        var str = "";
        var tree = this;
        console.log(tree.head.name);
        console.log(this.head.stamp);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = tree.head.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;
            str += "".concat(i.name, ":");
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = i.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var j = _step2.value;
                str += "".concat(j.name, "\t");
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

            str += "\n";
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return str;
      } else {
        var _str = "";

        var _tree = this;

        console.log(_tree.head.name);
        console.log(_tree.head.stamp);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _tree.head.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _i = _step3.value;
            // console.log(i);
            _str += "".concat(_i.name, ":");
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return _str;
      }
    }
  }, {
    key: "breadth",
    value: function breadth() {
      return this.head.breadth();
    }
  }]);

  return ServerConstructor;
}();

exports.ServerConstructor = ServerConstructor;