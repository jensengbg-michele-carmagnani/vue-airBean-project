// Router
const { Router } = require("express");
const router = new Router();

// Database
const { db } = require("../db");

// Routes
router.get("/", (req, res) => {
    
  let menu = db.get("menu").value();
  console.log("menu", menu);
  res.send({ menu: menu });
});

module.exports = router;
