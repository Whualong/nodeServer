const fs = require('fs')
let path = require('path')
let filePath = path.resolve(__dirname,'../../static/js/index.js')
module.exports = {
    path: "/static/js/index.js",
    method: 'get',
    async handle(ctx, next) {
      // 拿到请求输入
      let params = ctx.request.body;
      
      // 业务逻辑处理
      console.log('haha',ctx);
      let content = fs.readFileSync(filePath,{encoding:'utf-8'})
      // 返回前端数据
     // console.log('内容',content)
      // ctx.body = { res: "SUCCESS", data: '了空石蜡等法律减肥的垃圾熟练度附近', code: 2000 };
      ctx.set('Content-Type','application/javascript; charset=utf-8')
      ctx.body = content
    //   fs.readFile(filePath,(err,data )=>{
    //       if(err)
    //       ctx.body = 'error'
    //       else
    //       ctx.body = data;
    //   })
    }
  };