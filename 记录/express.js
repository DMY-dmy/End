var express = require('express')
var app = express()
app.listen(27017)
app.use(express.static('www'))
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017'
app.use('/dd',(req,res)=>[
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db('shujukuming')
        dbo.collection('biaoming').find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
            db.close()
        })
    })
])