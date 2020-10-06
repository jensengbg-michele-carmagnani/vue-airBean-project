// Router
const { Router } = require("express");
const router = new Router();

const shortid = require("shortid");

//db
const { db } = require("../db");

// async function getUser(user) {
//   console.log("user in getUser", user);
//   let userDb = await db.get("users").find({ name: user.name }).value();
//   console.log("userdb ", userDb);
//   return userDb;
// }

// Routers
router.post("/", (req, res) => {
  console.log("what you receive from the front in backend", req.body);
  // user not logged in
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
  let orders = db.get("orders").push(order).write();
  console.log("order pushed", orders);
  res.send({
       orderNr: order.orderNr,
      msg: "Your order is on the way",
     });
  // if ( typeof req.body.user=== undefined) {

  // } else {
  //   // user logged in
  //   let user =   getUser(req.body.user);
  //   let order = {
  //     orderNr: shortid(), // Generate uuid,
  //     timeStamp: Date.now(),
  //     items: req.body.order,
  //     totalOrderValue: req.body.order.reduce(
  //       (acc, item) => acc + item.quantity * item.price,
  //       0
  //     ),
  //   };
  //   console.log("user Order", order);
  //   let orderss = db
  //     .get("users")
  //     .find({ name: user.name })
  //     .assign({ history: order })
  //     .write();
  //   console.log("order pushed", orderss);
  // }
  // res.send({
  //   orderNr: order.orderNr,
  //   msg: "Your order is on the way",
  // });
});
module.exports = router;
