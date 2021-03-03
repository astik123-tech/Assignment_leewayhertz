const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   firstName:{
       type:String
   },
   lastName:{
       type:String
   },
   email:{
       type:String
   },
   phoneNumber:{
       type:Number
   },
   Image1:{
       type:String
   },
   created_at:{
       type:Date,
       default:new Date()
   }
})

const user = mongoose.model('user',userSchema)
module.exports = user;