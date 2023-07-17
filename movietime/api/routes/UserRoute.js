const Router = require("express").Router();
const User = require("../models/UserM");
const CryptoJS = require("crypto-js");
const verify = require("../verifeToken");
const jwt  = require("jsonwebtoken");
const mongoose = require("mongoose");

// UPDATE
Router.put("/:id",verify,async(req,res)=>{

    if(req.user.id == req.params.id || req.user.isAdmin){

        if(req.body.password){
            req.body.password = jwt.CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
        }
        try{
            const updated_user = await User.findByIdAndUpdate(req.params.id,
                {$set:req.body},
                {new:true});

            res.status(201).json(updated_user);
        }catch(err){
            res.status(500).json(err);
        }
        res.status(200).json("Done");


    }else{
        res.status(403).json("You dont have permission to update the user");
    }

});

// DELETE

Router.delete("/:id",verify,async(req,res)=>{

    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(201).json("User successfully Deleted");
    
        }catch(err){
                res.status(403).json(err);
        }
    }else{
        res.status(500).json("You are not authorized to delete this user");
    }


});


// GET
Router.get("/find/:id",async(req,res)=>{
    const requiredUser = await User.findById(req.user.id);
    const [password,...info] = requiredUser._doc;
    if(requiredUser){
        res.status(200).json({info});
    }else{
        res.status(401).json("User not found");
    }

})
// GET ALL
Router.get("/",verify,async(req,res)=>{
    const query_ = req.query.new;
    if(req.user.isAdmin){
        try{
           
            const users_all =  query_ ? await User.find().sort({_id:-1}).limit(10): await User.find();
            res.status(201).json(users_all);
    
        }catch(err){
                res.status(403).json(err);
        }
    }else{
        res.status(500).json("You are not authorized to view all the user");
    }


});


//GET USER STATS
Router.get("/stats", async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);
  
    try {
      const data = await User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = Router;