// import express
var express = require("express");

// create a "router" for the app
var router = express.Router();

// Import model to use its db functions
var burger = require("../models/burger.js");

//Create routes
router.get("/", (req, res) => {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", (req, res) => {
  burger.create([
    "burger_name", "devoured"
  ], 
  [
    req.body.burger_name, req.body.devoured    
  ],
    function(result) {
      // sends back the id of the new burger
      res.json({ id: result.insertId });
    });
});

router.put("/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
      // error if no rows were changed, as id must not exist
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();  
      }
  });
});

//export the router at the end of the file for server.js to use
module.exports = router;