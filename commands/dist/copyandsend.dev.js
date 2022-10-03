"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'copyandsend',
  run: function run(message, args) {
    var recieverUser;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch("".concat(server, "/users?id=").concat(mention), {
              headers: {
                'X-API-KEY': '9jN#BcavMWY*kZk5D20!8SGnS$X'
              }
            }));

          case 2:
            recieverUser = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports["default"] = _default;