  const mongoose=require("mongoose");
  const userschema = new mongoose.Schema({
    name:{
      type:String,
      required :true,
    },
    email:{
       type:String,
       required:true,
       unique:true,
    },
    password:{
        type:String,
        unique:true,
        required:true,
    }
},
    {
        timestamp:true,
    }
);
const User=mongoose.model('user',userschema);
module.exports= User;

