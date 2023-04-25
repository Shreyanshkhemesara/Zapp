"use strict";

var User = require("./userModel");

var readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports.AddBorrower = function _callee(req, res) {
  var _bId, _address, _amount, newBorrow;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _bId = req.body.B_Id;
          _address = req.body.address;
          _amount = req.body.amount;
          _context.next = 5;
          return regeneratorRuntime.awrap(createBorrow(_bId, _address, _amount));

        case 5:
          newBorrow = _context.sent;
          res.send(newBorrow);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var createBorrow = function createBorrow(_bId, _address, _amount) {
  var newUser;
  return regeneratorRuntime.async(function createBorrow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.create({
            BID: _bId,
            Address: _address,
            creditScore: 700,
            amount: _amount
          }));

        case 2:
          newUser = _context2.sent;

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};