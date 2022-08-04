const express = require('express')
const router = express.Router()

const Userinfo = require('../../models/Userinfo')

// router.get('/test',(req,res)=>{
//     res.json({msg:'测试成功'})
// })
// $route  GET api/userinfo
// @desc   获取所有的数据
// @access publicf
router.get('/get',(req,res)=>{
    Userinfo.find().then(user =>{ 
        if(!user){
            return res.status(400).json("no number")
        }
        return res.json(user)
    }).catch (err => {
        return res.status(404).json(err)
    })
})

// $route  GET api/userinfo/:id
// @desc   获取单个的数据
// @access public
router.get('/:id',(req,res) => {
    Userinfo.findOne({id:req.params.id}).then(user => {
        if(!user) {
            return res.status(400).json("没有任何数据存在")
        }
        return res.json(user)
    }).catch(err => {
        return res.status(404).json(err)
    })
})
// $route  GET api/userinfo/exit/:id
// @desc   编辑用户信息
// @access public
router.post('/exit/:id',(req,res) => {
    const UserName = {};
    if(req.query.id) UserName.id = req.query.id;
    if(req.query.name) UserName.name = req.query.name;
    if(req.query.price) UserName.price = req.query.price;
    if(req.query.desc) UserName.desc = req.query.desc;
    //更新数据
    Userinfo.findByIdAndUpdate({ id: req.params.id }, 
        { $set: UserName }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(400).json("数据不存在");
      }
     res.json(user);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
})
// $route  GET api/userinfo/add
// @desc   添加用户数据
// @access public
router.post('/add',(req,res)=>{
    // console.log(req.body,req.query)
    const UserName = {};
    if(req.query.id) UserName.id = req.query.id;
    if(req.query.name) UserName.name = req.query.name;
    if(req.query.price) UserName.price = req.query.price;
    if(req.query.desc) UserName.desc = req.query.desc;

    new Userinfo(UserName).save().then(user => {
        res.json(user);
    })

})
// $route  GET api/userinfo/delete/:id
// @desc   删除用户信息
// @access public
router.delete('/delete/:id',(req,res) => {
    Userinfo.findByIdAndRemove({id:req.params.id}).then(user => {
        user.save().then(user => {
            res.json(user)
        })
    }).catch(err => {
        return res.status(404).json(err)
    })
})

module.exports = router;