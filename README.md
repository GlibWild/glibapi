[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/GlibWild/glibapi/blob/master/LICENSE)

### 项目说明
本项目以nodejs构建后端api服务通用框架，开箱即用

### 引入步骤
```
step 1. git clone https://github.com/GlibWild/glibapi.git

step 2. cd glibapi

step 3. npm install

step 4. npm run dev
```

### 项目目录结构

```
├── .babelrc         <---babel配置
├── .env             <---环境变量
├── .gitignore
├── app.js           <---项目入口
├── controllers      <---控制器
|   |   ├── authController.js
|   |   └── systemController.js
├── dist             <---生成目录
|   |   └── bundle.js
├── middleware       <---中间层
|   |   └── authMiddleware.js
├── package.json
├── router           <---路由目录
|   |   ├── auth.js  <----权限路由，如不需受jwt保护
|   |   ├── index.js <----自动导出路由入口
|   |   └── routes   <---业务路由文件，配置到此处自动导出，且受jwt保护
|       |       ├── system.js
|       |       └── test.js
└── webpack.config.js <----webpack配置
```
