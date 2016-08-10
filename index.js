const _ = require('koa-route');
const serve = require('koa-static');
const koa = require('koa');
const fs = require('fs');

const app = new koa();

var store = {
  listFile: (ctx) => {
    var dir = fs.readdirSync('uploads');
    var fileArray = [];
    for(var i = 0;i<dir.length;i++) {
      if(dir[i][0] != '.'){
        fileArray.push(fs.lstatSync('uploads/' + dir[i]));
        fileArray[fileArray.length - 1].name = dir[i];
      }
    }
    console.log(fileArray);
    ctx.body = fileArray;
  }
};

app.use(serve('.'));
app.use(_.get('/file', store.listFile));

app.listen(3000);

console.log('listening on port 3000');
