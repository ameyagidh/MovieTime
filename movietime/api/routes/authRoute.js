const Router = require("express").Router();
const User = require("../../api/models/UserM")

// Registering a user
Router.get("/register",async (req,res)=>{
    const newUser = User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    });
    try{
        const User_obj = await newUser.save();
        res.status(201).json(User_obj);
    }
    catch(err){res.status(500)}
});
module.exports = Router;

