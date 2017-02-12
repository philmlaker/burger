var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// router.delete("/", function(req, res) {
//   burger.delete([
//    "id"
//   ], [
//     req.body.id
//   ], function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;









































// var express = require("express");

// var app = express.Router();

// var connection = require("../models/burger.js");

// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM burgers;", function(err, data) {
//     if (err) {
//       throw err;
//     }
    
//     res.render("index", { burgers: data });

//   });
// });


// app.post("/", function(req, res) {
//   connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   });
// });

// app.put("/", function(req, res) {
//   console.log(req.body);
//   connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [
//     req.body.id
//   ], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   });
// });

// module.exports = app;
