const fs = require('fs')
let path = require('path');
const { resourceUsage } = require('process');
let filePath = path.resolve(__dirname,'../../static/css/index.css')
module.exports = {
    path: "/static/css/index.css",
    method: 'get',
    async handle(ctx, next) {
      // 拿到请求输入
      let params = ctx.request.body;
      
      // 业务逻辑处理
      console.log('haha',ctx);
      
      // 返回前端数据
     // console.log('内容',content)
      // ctx.body = { res: "SUCCESS", data: '了空石蜡等法律减肥的垃圾熟练度附近', code: 2000 };
     
    
        let content = fs.readFileSync(filePath,{encoding:'utf-8'})
        await new Promise((res,rej)=>{
            setTimeout(()=>{
                ctx.set('Content-Type','text/css;charset=utf-8')
                ctx.body = content
                res()
            },3000)
        })
        
   
    
    //   fs.readFile(filePath,(err,data )=>{
    //       if(err)
    //       ctx.body = 'error'
    //       else
    //       ctx.body = data;
    //   })
    }
  };


  




  