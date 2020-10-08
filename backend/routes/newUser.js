const { Router } = require("express");
const router = new Router();
const { v4: uuidv4 } = require("uuid");
//data base
const { db } = require("../db");

function checkUser(user) {
  return db.get("users").find({ name: user.name, email: user.email }).value();
}

router.post("/", (req, res) => {
  console.log("newUser", req.body.newUser);
  user = req.body.newUser;

  let checked = checkUser(user);

  if (!checked) {
     db
      .get("users")
      .push({ id: uuidv4(), name: user.name, email: user.email, history: [] })
      .write();
      let newUser = db.get('users').find({name: user.name}).value()
    res.send(newUser);
  } else {
    res.send({
      msg:
        "The  name or email already existing! Plese try with something different...",
    });
  }
});

module.exports = router;
