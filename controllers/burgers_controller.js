// import express, and burger.js
var express = require("express");

var burger = require("../models/burger.js");


// create a "router" for the app
var router = express.Router();

//export the router at the end of the file for server.js to use
module.exports = router;