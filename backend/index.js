const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
const menuRoute = require("./routes/menu");
const ordersRoute = require("./routes/orders");

// products
app.use("/menu", menuRoute);

// orders
app.use("/orders", ordersRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is up running at port :${PORT} !`);
});
