// Router
const { Router } = require("express");
const router = new Router();

// Database
const { db } = require("../db");

// Routes
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let total = 0;

  console.log("id params in /me:", id);
  let user = db.get("users").find({ id: id }).value();
  total = user.history.reduce((acc, item) => acc + item.totalOrderValue, 0);
  user.totalSommarize = total;

  res.send(user);
});

module.exports = router;
