const _ = require('koa-route');
const serve = require('koa-static');
const koa = require('koa');
const fs = require('fs');

const app = new koa();

var store = {
  listFile: (ctx) => {
    var dir = fs.readdirSync('uploads');
    ctx.body = dir;
  }
};

app.use(serve('.'));
app.use(_.get('/file', store.listFile));

app.listen(3000);

console.log('listening on port 3000');
