"use strict";

var express = require("express");

var path = require("path");

var app = express();
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/landingpage.html"));
});
app.get("/minted", function (req, res) {
  res.sendFile(path.join(__dirname + "/nft_minted.html"));
});
app.get("/LB", function (req, res) {
  res.sendFile(path.join(__dirname + "/lend_or_borrow.html"));
}); // app.get("/verified", (req, res) => {
//     res.sendFile(path.join(__dirname + "/verified.html"));
// })

app.use(express["static"](path.join(__dirname, 'assets')));
var server = app.listen(8000);
var portNumber = server.address().port;
console.log("port is open on ".concat(portNumber));