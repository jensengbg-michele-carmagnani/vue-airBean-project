// Router
const { Router } = require("express");
const router = new Router();

// Database
const { db } = require("../db");

// Routes
router.get("/:id", (req, res) => {
  let id = req.params.id;
  console.log('id params in /me:' , id)
  let user = db.get("users").find({ id: id }).value();
  console.log("user in /me:", user);
  res.send(user);
});

module.exports = router;
