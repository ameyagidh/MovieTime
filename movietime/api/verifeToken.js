const jwt = require("jsonwebtoken");

function verifyMe(req,res,next){

    const authheader = req.headers.token;
    
    if(authheader){
        const token = authheader.split(" ")[1];
        
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err){
                res.status(403).json("Token is invalid");
            }
            req.user = user;
            next();
        });
    }else{
     res.status(401).json("Not authenticated");           
    }

}

module.exports = verifyMe;