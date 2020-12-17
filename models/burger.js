// import orm.js here
var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM
var burger = {
    all: function(cb) {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    }
};

//export at the end of this file
module.exports = burger;