// const systemRoutes = require("./routes/system");
// const testRoutes = require("./routes/test");
// const routes = [systemRoutes, testRoutes];
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
console.log(__dirname);
const modulesPath = path.join(__dirname, "routes");
const modules = loadModules(modulesPath);

module.exports = modules;
