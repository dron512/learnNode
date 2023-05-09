const express = require('express');
const router = express.Router();
const {User} = require('../model/db');

router.get('/',async(req,res,next)=>{
    const users = await User.findAll();
    res.render('index',{users});
})

module.exports = router;