console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV == "development") {
  const fs = require("fs");
  const path = require("path");

  const loadModules = (directory) => {
    const modules = {};

    fs.readdirSync(directory).forEach((file) => {
      const fullPath = path.join(directory, file);
      const stat = fs.lstatSync(fullPath);

      if (stat.isDirectory()) {
        modules[file] = loadModules(fullPath);
      } else if (file.endsWith(".js")) {
        const moduleName = path.basename(file, ".js");
        modules[moduleName] = require(fullPath);
      }
    });
    return Object.values(modules);
  };
  const modulesPath = path.join(__dirname, "routes");
  const modules = loadModules(modulesPath);

  module.exports = modules;
} else {
  // 导出模块函数
  function importAll(r) {
    return r.keys().map(r);
  }

  // 使用 require.context 动态导入指定文件夹下的所有 js 文件
  const modules = importAll(require.context("./routes", false, /\.js$/));

  module.exports = modules;
}
