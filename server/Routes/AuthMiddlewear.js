const jwt=require('jsonwebtoken');

const Authmiddlewear=(req,res,next)=>{
   try{
    const header=req.headers["authorization"];
    const token=header.split(" ")[1];
    const verify=jwt.verify(token,process.env.SECRET_KEY);
    console.log(verify)
    req.user=verify
    // res.json(req.user)
    next();
   }
   catch(err){
    res.json(err);
   }
}

module.exports=Authmiddlewear