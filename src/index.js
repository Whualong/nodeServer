const Koa = require("koa");
const koaBody = require("koa-body");
const logger = require('koa-logger')
const static = require('koa-static')
const cors = require('koa-cors')
const path = require('path')
// 引入router创建好的
let router = require("./router.js");

const app = new Koa();
const kb = new koaBody({
  multipart:true
})
app.use(logger())
// 解析post请求体
app.use(kb);

// 设置跨域 用不用插件都可
// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", "*");
//   return next();
// });
app.use(cors())

// 路由挂载
app.use(router.routes());

// 静态文件处理
app.use(static(path.join(__dirname)))


// 监听3001端口
app.listen(3001, () => {
  console.log("server run on 127.0.0.1:3001");
});