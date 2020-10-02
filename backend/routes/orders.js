// Router
const { Router } = require("express");
const router = new Router();
// uuid
// const { v4: uuidv4 } = require("uuid");
// const short = require('short-uuid');

const shortid = require("shortid");

//db
const { db } = require("../db");

// Routers
router.post("/", (req, res) => {
  console.log("what you receive from the front in backend", req.body);
  let order = {
    orderNr: shortid(), // Generate uuid,
    timeStamp: Date.now(),
    items: req.body.order,

    totalOrderValue: req.body.order.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    ),
  };
  console.log("Yoooo", order);
  let orderss = db.get("orders").push(order).write();
  console.log("order pushed", orderss);
  res.send({
    orderNr: order.orderNr,
    msg: "Your order is on the way",
  });
});
module.exports = router;
