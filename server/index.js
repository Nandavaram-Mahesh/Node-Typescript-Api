"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// initalize the server
var app = (0, express_1.default)();
// Routes
app.get('/', function (req, res) {
    res.send("Node Api Server");
});
// Server Listening on port 8000 
app.listen(8000, function () {
    console.log("Server listening....");
});
