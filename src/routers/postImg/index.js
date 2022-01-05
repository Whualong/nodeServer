const fs = require('fs')
const path = require('path')
module.exports = {
  path: "/uploadImg",
  method:'post',
  async handle(ctx, next) {
    // 拿到请求输入
    console.log('files',ctx.request.files.img)
    const file = ctx.request.files.img;
    const extname = path.extname(file.name);
    //　本地文件服务器获取POST上传文件过程
    // １. fs.createReadStream 创建可读流
    // ２. fs.createWriteStream　创建可写流
    // 3. reader.pipe(writer)
    const reader = fs.createReadStream(file.path);
    let fileName = path.resolve(__dirname,`images/${Math.random()
      .toString(36)
      .substr(2)}${extname}`);
      console.log(fileName)
    // if (!fs.existsSync(fileName)) {
    //   fs.writeFile(fileName);
    // }
    const writer = fs.createWriteStream(
      fileName,{flags: 'w'}
    );
    reader.pipe(writer);
    // 返回前端数据
    ctx.body = { res: "SUCCESS", data: 'ok', code: 200 };
  }
};