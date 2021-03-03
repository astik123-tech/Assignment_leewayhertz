const userModel = require("../model/userModel");
const createError = require("http-errors");
const userValidation = require("../config/validation/user");





module.exports = {
  addUser: async (req, res, next) => {
    try {
      if (req.files && req.files.Image1 && req.files.Image1[0].path) {
        Image1 = req.files.Image1[0].path;
      } else {
        Image1 = " ";
      }
      const { firstName, lastName, email, phoneNumber } = req.body;
      await userValidation.validateAsync({
        firstName,
        lastName,
        email,
        phoneNumber,
      });

      const newUser = new userModel({
        firstName,
        lastName,
        email,
        phoneNumber,
        Image1,
      });
      const result = await newUser.save();
      if (result) {
        res.send({
          success: true,
          message: "Successfully added..",
        });
      }
    } catch (error) {
      if (error.isJoi == true) {
        error.status = 422;
      }
      next(error);
    }
  },
  getUser:async(req, res, next)=>{
      try {
        const result= await userModel.find({},{created_at:0});
        if(result){
          res.send({
            success:true,
            message:'Successful..',
            data:result
          })
        }
      } catch (error) {
        next(error)
      }
  }
};
