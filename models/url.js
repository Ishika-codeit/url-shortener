const mongoose=require("mongoose");

const urlschema=new mongo.schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
   history:[{
    timestamp:{
          type:Number
    }
   }],
 },
   {timestamps:true}
 );
 const URL=mongoose.model("url",urlschema);
 module.exports=URL;