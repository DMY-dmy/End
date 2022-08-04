const express = require('express')
// 安装第三方npm install body-parser 并引入
const bodyParser = require('body-parser')
//创建app对象
const app = express();
// 引入数据库
const mongoose = require('mongoose')
// 引入数据库地址
const db = require('./config/db').db
// // 引入userinfo.js路由
const userinfo = require('./router/api/userinfo')

// 导入cors中间件
// const cors = require('cors')
// // 将cors注册为全局中间件
// app.use(cors())

//CORS设置跨域访问
app.all('*', (req, res, next) => {
    // 响应头的设置，我的后台支持跨域请求
    res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials',true);
    res.header('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    if(req.method == 'OPTIONS'){
        res.sendStatus(200);
    }else{
        next();  
    }
    
});

// // 使用body-Parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

// // 使用router中间件
app.use('/',userinfo) 

// 使用mongoose连接数据库
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('mongodb连接成功')
}).catch(err => console.log(err))

app.get('/',(req,res)=>{
    res.send('运行成功')
})

app.listen(27017,()=>console.log('端口运行成功'))