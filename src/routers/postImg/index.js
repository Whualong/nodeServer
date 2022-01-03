const fs = require('fs')
module.exports = {
  path: "/uploadImg",
  method:'post',
  async handle(ctx, next) {
    // 拿到请求输入
    let params = ctx.request.body;
    
    // 业务逻辑处理
    console.log(params);

    // 返回前端数据
    ctx.body = { res: "SUCCESS", data: 'ok', code: 2000 };
  }
};