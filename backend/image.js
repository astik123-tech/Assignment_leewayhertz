const express = require("express");
const router = new express.Router();
var multer = require('multer');
var path = require('path');
const fs = require('fs');

router.get('/images/:filename',async(req,res)=>{

    const filename = req.params.filename;
    filepath= path.join(__dirname)+'/images/'+ filename;
    res.sendFile(filepath)
})
module.exports= router
