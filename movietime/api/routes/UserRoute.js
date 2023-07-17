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



// GeET

// GET ALL

// USER STATS

module.exports = Router;