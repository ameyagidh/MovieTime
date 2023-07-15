const Router = require("express").Router();
const User = require("../../api/models/UserM")

// Registering a user
Router.get("/register",(req,res)=>{
    const newUser = User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    });
    const User_obj = newUser.save();
    res.json(User_obj);
});
module.exports = Router;

