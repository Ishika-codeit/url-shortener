const User= require("../models/user");
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
     return res.render("home",{sucess:"signup succesfull"});
    }
     catch (err) {
        console.error("Signup error:", err);
        return res.render("signup", { error: "Something went wrong. Try again." });
    }


 }



module.exports={
    handleuser,
}