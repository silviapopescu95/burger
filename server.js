// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create a port
var PORT = process.env.PORT || 3000;

// Create an instance of an express app
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set up express to parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
