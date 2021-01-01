// import orm.js here
var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays
    // create: function(burger_name, cb) {
    //     var cols = ["burger_name", "devoured"];
    //     var vals = [burger_name, false];
    //     orm.create("burgers", cols, vals, cb);
    //     // console.log("meh" + name);
    // },
    create: function(objColVals, condition, cb) {
        // var condition = {devoured: true};
        orm.create("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        // var condition = {devoured: true};
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

//export at the end of this file
module.exports = burger;