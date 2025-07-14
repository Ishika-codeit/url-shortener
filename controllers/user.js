const User= require("../models/user");
const {v4:uuidv4}=require("uuid");
const {setuser,getuser}=require("../service/auth");

 async function handleuser(req,res) {
     const { name, email,password } = req.body;
     try{
      const existuser=await User.findOne({email});
     if(existuser){
        return res.render("signup",{error:"email is already registered"});
     }
     await User.create({
        name,
        email,
        password,
     });
     return res.redirect("/");
    }
     catch (err) {
        console.error("Signup error:", err);
        return res.render("signup", { error: "Something went wrong. Try again." });
     }
 }
 async function handlelogin(req,res){
   const{email,password}=req.body;
   try{
    const signuser=await User.findOne({email,password});
   if(!signuser){
      return res.render("login",{error:"invalid mail or password"});
   }
   const sessionid = uuidv4();
   setuser(sessionid,signuser);
   res.cookie("uid");
   return res.redirect("/");
 }
  catch (err) {
        console.error("login error:", err);
        return res.render("login", { error: "Something went wrong. Try again." });
     }
   }


module.exports={
    handleuser,
    handlelogin,
}