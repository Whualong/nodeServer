module.exports = {
  path: "/demo",
  method: 'get',
  async handle(ctx, next) {
    // 拿到请求输入
    let params = ctx.request.body;
    console.log('hahha')
    // 业务逻辑处理
    console.log(params);

    // 返回前端数据
    ctx.body = { res: "SUCCESS", data: '冻死了卡机疯狂拉升', code: 2000 };
  }
};