const Router = require("express").Router();
const User = require("../../api/models/UserM");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Registering a user
Router.get("/register",async (req,res)=>{
    const newUser = User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
    });
    try{
        const User_obj = await newUser.save();
        res.status(201).json(User_obj);
    }
    catch(err){res.status(500)}
});

// Login
Router.post("/login",async(req,res)=>{
try{
    const User_ = await User.findOne({email:req.body.email});
    !User_ && res.status(404).json("User not found");

    const bytes = CryptoJS.AES.decrypt(User_.password,process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
        res.status(401).json("Password does not match");
    
    const accessToken = jwt.sign(
        {id:User_._id,isAdmin:User_.isAdmin},
        process.env.SECRET_KEY,
        {expiresIn:"5d"}
    );

    const {password, ...info} = User_._doc;
    // res.status(201).json(...info);
    res.status(200).json({...info,accessToken});

}catch(err){
    res.status(500).json(err)
}
    
})



module.exports = Router;

