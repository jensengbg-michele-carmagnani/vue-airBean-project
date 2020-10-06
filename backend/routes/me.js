// Router
const { Router } = require("express");
const router = new Router();

// Database
const { db } = require("../db");

// Routes
router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let user = db.get("users").find({ id: id }).value();
  console.log("user", user);
  res.send(user);
});

module.exports = router;
