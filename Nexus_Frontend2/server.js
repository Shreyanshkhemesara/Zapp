const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/landingpage.html"));
})

app.get("/minted", (req, res) => {
    res.sendFile(path.join(__dirname + "/nft_minted.html"));
})

app.get("/LB", (req, res) => {
    res.sendFile(path.join(__dirname + "/lend_or_borrow.html"));
})

app.get("/lend", (req, res) => {
    res.sendFile(path.join(__dirname + "/lendlist.html"));
})

app.get("/borrow", (req, res) => {
    res.sendFile(path.join(__dirname + "/borrow.html"));
})

app.get("/lendPage", (req, res) => {
    res.sendFile(path.join(__dirname + "/lendpage.html"));
})

app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname + "/profile.html"));
})

app.get("/who", (req, res) => {
    res.sendFile(path.join(__dirname + "/who.html"));
})

app.get("/how", (req, res) => {
    res.sendFile(path.join(__dirname + "/how.html"));
})

app.get("/why", (req, res) => {
    res.sendFile(path.join(__dirname + "/why.html"));
})


// app.get("/verified", (req, res) => {
//     res.sendFile(path.join(__dirname + "/verified.html"));
// })

app.use(express.static(path.join(__dirname, 'assets')));

const server = app.listen(8000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);
