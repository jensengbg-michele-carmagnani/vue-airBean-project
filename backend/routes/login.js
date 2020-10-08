// Route
const { Router } = require("express");
const router = new Router();
var jwt = require("jsonwebtoken");

const shortid = require("shortid");

//db
const { db } = require("../db");

// match login data
async function getUser(user) {
  console.log("user in getUser", user);
  let userDb = await db.get("users").find({ name: user.name }).value();
  console.log("userdb ", userDb);
  return userDb;
}
// Routers
router.post("/", async (req, res) => {
  console.log("------login data------", req.body.user);
  let resObj = {
    success: false,
  };

  let user = await getUser(req.body.user);
  console.log("-----user from db-----");
  console.log(user);

  if (!user) {
    resObj.success = false;
  } else {
    if (user) {
      const token = jwt.sign({ id: user.id }, "Pokemon", {
        expiresIn: 600,
      });
      resObj.name = user.name;
      resObj.email = user.email;
      resObj.history = user.history;
      resObj.totalSommarize = user.history.reduce(
        (acc, item) => acc + item.totalOrderValue,
        0
      );
      resObj.success = true;
      resObj.token = token;
      resObj.id = user.id;
    }
  }
  console.log("resObj", resObj);
  res.send(JSON.stringify(resObj));
});
module.exports = router;
