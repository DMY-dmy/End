const  mongoose = require('mongoose');
// 引入数据库地址
const db = require('../config/db').db
mongoose.connect(db)
const  Schema = mongoose.Schema;

const UserinfoSchema = new Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    desc:{
        type:String,
    },
    // date:{
    //     type:Date,
    //     default:Date.now,
    // },
})


module.exports = Userinfo = mongoose.model('userinfo',UserinfoSchema);
