const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

// Routes
const menuRoute = require("./routes/menu");
const ordersRoute = require("./routes/orders");
const loginRoute = require("./routes/login");

// products
app.use("/menu", menuRoute);

// orders
app.use("/orders", ordersRoute);

// login
app.use("/login", loginRoute);

// server port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is up running at port :${PORT} !`);
});
