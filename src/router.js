let Router = require("koa-router");
let routers = require("./routers/routers.js");

let router = new Router( {
    // prefix:'/api'
  }
);

routers.forEach(r => {
  router[r.method](r.path,r.handle)
});

module.exports = router;