const fs = require("fs");
const path = require("path");

const excludedDirs = ["node_modules",'.git']; // 要排除的文件夹列表

const generateDirectoryStructure = (dir, prefix = "") => {
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    const isExcluded = excludedDirs.includes(file);
    if (isExcluded) return;

    const fullPath = path.join(dir, file);
    const isLast = index === files.length - 1;
    const newPrefix = prefix + (isLast ? "└── " : "├── ");

    console.log(prefix + newPrefix + file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      generateDirectoryStructure(fullPath, prefix + (isLast ? "    " : "|   "));
    }
  });
};

const rootDir = path.join(__dirname, ""); // 你的根目录
console.log(rootDir);
generateDirectoryStructure(rootDir);
