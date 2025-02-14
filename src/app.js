require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// /**设置环境变量 */
const yargs = require("yargs");

// // 解析命令行参数
const argv = yargs.option("mode").argv;

const env = argv.mode || "production";
if (env === "development") {
  process.env = {
    ...process.env,
    NODE_ENV: env,
  };
}

console.log("__dirname:", __dirname, require.resolve("@/router/auth"));

const authRoutes = require("@/router/auth");
const routes = require("@/router");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
