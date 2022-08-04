
// 引入框架
const express = require ('express');
const app = express();
var parser  = require('body-parser')
// 引入mongodb
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');
// 定义数据库连接地址
const url = 'mongodb://localhost:27017/'
// 定义要操作的数据库
const dbName = 'flower';
// 实例化mongoClient 传入数据库连接地址
const client = new MongoClient(url,{useUnifiedTopology:true});



//增加头部信息解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
    });
//使用bodyParse解释前端提交数据
// app.use(bodyParser.urlencoded({extended:false})) ;
app.use(parser.json());
app.use(parser.urlencoded({extended:false})) ;

client.connect().then(()=>{
    console.log('数据库连接成功')
    const db = client.db(dbName);
}).catch(err => console.log(err))

app.get('/get',(req,res)=>{
    res.send('运行成功')
})
// 连接数据库
// client.connect(function(err){
//     if(err){
//         console.log('fail');
//         return;
//     }else{
//         const db = client.db(dbName); 
//         // 数据传给node框架进行显示
//         app.get('/get',(req,res)=>{
//             db.collection('view').find().toArray((err,data)=>{
//                 res.send({
//                     status:0,
//                     msg:' get请求成功',
//                     data:data
//                 })
//             })
//         })
//     }
// })

// 连接数据库
// client.connect(function(err){
//     if(err){
//         console.log('fail');
//         return;
//     }else{
//         const db = client.db(dbName); 
//         // 处理post请求
//         // 'id':id,'name':name,'price':price,'describe':describe,
//         app.post('/post',(req,res)=>{
//             const body = req.body
//             db.collection('view').insertOne(body,(err,data)=>{
//                 res.send({
//                     status: 0,
//                     msg: 'post请求成功',
//                     data: data
//                 })
//             })
//         });
//     }
// })

// 连接数据库
// client.connect(function(err){
//     if(err){
//         console.log('fail');
//         return;
//     }else{
//         const db = client.db(dbName); 
//         // 处理delete请求
//         app.delete('/delete/:id',(req,res)=>{
//             const id = req.body
//             db.collection('view').deleteOne(id,(err,result)=>{
//                 res.send(result)
//             })
//         });
//     }
// })

app.listen(27017,()=>{
    console.log('服务器开启27017端口..')
})
