// 引入mongodb
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');
// 定义数据库连接地址
const url = 'mongodb://localhost:27017/';
// 定义要操作的数据库
const dbName = 'flower';
// 实例化mongoClient 传入数据库连接地址
const client = new MongoClient(url,{useUnifiedTopology:true});

// 连接数据库
client.connect(function(err){
    if(err){
        console.log('数据库连接失败');
        return;
    }
    console.log('数据库连接成功');
    // 获取数据
    const db = client.db(dbName);

    // 查找数据
  
        db.collection('view').find({}).toArray((err,data)=>{
            if(err){
                console.log(err)
                return
            }else{
                // console.log(data)
            }
            // 操作完毕关闭数据库连接
            // client.close()
        })




    // 更新数据
    // db.collection('view').insertOne({'id':'7','name':'小叶紫檀'},(err,result)=>{
    //     if(err){
    //         console.log(err)
    //         return
    //     }
    //     console.log('增加成功')
    //     console.log(result)
    //     // 操作完毕关闭数据库连接
    //     client.close()
    // })

    // 修改数据
    // db.collection('view').updateOne({'id':'3'},{$set:{'name':'黄花梨'}},(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log("修改成功");
    //     console.log(result);
    //     // 操作完毕关闭数据库连接
    //     client.close();
    // })

    // 删除数据
    // db.collection('view').deleteOne({'name':'芍药'},(err,)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log("删除一条数据成功");
    //     // 操作完毕关闭数据库连接
    //     client.close()
    // })

    // 删除多条数据
    // db.collection('view').deleteMany({'name':'芍药'},(err)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log("删除多条数据成功");
    //     // 操作完毕关闭数据库连接
    //     client.close()
    // })


});


