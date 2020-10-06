// Router
const { Router } = require("express");
const router = new Router();
const { v4: uuidv4 } = require("uuid");
const shortid = require("shortid");

//db
const { db } = require("../db");

function getUser(user) {
  console.log("user in getUser", user);
  let userDb = db.get("users").find({ name: user.name }).value();
  console.log("userdb ", userDb);
  return userDb;
}
function createData() {
  return new Date().toISOString().slice(0, 10);
}

// Routers
router.post("/", (req, res) => {
  console.log("what you receive from the front in backend", req.body);

  // user not logged in
  if (!req.body.user) {
    let order = {
      orderNr: shortid(), // Generate uuid,
      timeStamp: createData(),
      
      items: req.body.order,

      totalOrderValue: req.body.order.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ),
    };
    console.log("Yoooo", order);
    let orders = db.get("orders").push(order).write();
    console.log("order pushed", orders);

    res.send({
      orderNr: order.orderNr,
      msg: "Your order is on the way",
    });
  } else {
    // user logged in
    let user = getUser(req.body.user);

    let order = {
      orderNr: shortid(), // Generate uuid,
      timeStamp: createData(),
      items: req.body.order,
      totalOrderValue: req.body.order.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ),
    };

    console.log("user Order", order);

    let usr = db.get("users").find({ name: user.name }).value();

    usr.history.push(order);

    db.get("users").find({ name: user.name }).assign(usr).write();

    res.send({
      orderNr: order.orderNr,
      msg: "Your order is on the way",
    });
  }
});
module.exports = router;
