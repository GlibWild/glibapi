require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./router/auth");
const routes = require("./router");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
