const {getuser}=require("../service/auth")


async function restrictuser(req,res,next){
  const userid=req.cookies?.uid;
  if(!userid){
    res.redirect("/login");
  }
  const user=getuser(userid);
  if(!user){
    return res.redirect("/login");
  }
  req.user=user;
  next();
}
module.exports={
    restrictuser,
}