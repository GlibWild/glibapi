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
├── .babelrc <---babel配置
├── .env <---环境变量
├── dist <---生成目录
|   |   ├── .env
|   |   └── bundle.js
├── jsconfig.json
├── LICENSE
├── nodemon.json <---nodemon配置
├── package.json
├── README.md
├── showfile.js <---生成结构树工具
├── src
|   |   ├── app.js <---项目入口
|   |   ├── controllers <---控制器
|   |   |   |   ├── authController.js
|   |   |   |   └── systemController.js
|   |   ├── middleware <---中间层
|   |   |   |   └── authMiddleware.js
|   |   └── router <---路由目录
|       |       ├── auth.js <----权限路由，如不需受jwt保护
|       |       ├── index.js <----自动导出路由入口
|       |       └── routes <---业务路由文件，配置到此处自动导出，且受jwt保护
|           |           ├── system.js
|           |           └── test.js
└── webpack.config.js <----webpack配置
```
