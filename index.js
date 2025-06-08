const express=require("express");
const app=express();
const port=2000;


const {connectmongo}=require("./connect")

connectmongo(" mongodb://127.0.0.1:27017/short_url")
.then(()=>{
    console.log("mongodb connect")
})
.catch((err) => console.log("error caught",err));

const urlrouter=require("./routes/url1");


app.listen(port,()=>console.log("server startedddddddddd"));