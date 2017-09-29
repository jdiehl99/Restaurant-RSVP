// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Array to pull in API's

var tables = [
   

  ];


var waitlist = [
  

  ];

  // Endpoints

  // route to send user to AJAX page

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });



  // Search API's

  app.get("/all", function(req, res) {
    res.json(tables);
  });
  
  // Search for Specific Character (or all characters) - provides JSON

  app.get("/api/tables", function(req, res) {
    var chosen = req.params.tables;
  
    return res.json(tables);
  });

app.get("/api/waitlist", function(req, res) {
    var chosen = req.params.waitlist;
  
    return res.json(waitlist);
  });

  app.post("/api/new", function(req, res) {
  
    var newtable = req.body;
    newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newtable);
  
    table.push(newtable);
  
    res.json(newtable);
  });


  app.get("/show/tables", function(req, res) {
      console.log("showing reservations");

      for (var i = 0; i < tables.length; i++) {
          return res.json(tables[i]);
      }
    return res.json(tables);
  });

  app.get("/show/waitlist", function(req, res) {
    console.log("showing waitlist");

    for (var i = 0; i < waitlist.length; i++) {
        return res.json(waitlist[i]);
    }
  return res.json(waitlist);
});


  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
