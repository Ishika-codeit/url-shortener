const express=require("express");
const app=express();
const port=2000;
const path=require("path");
const URL = require("./models/url");
const cookieparser=require("cookie-parser");
const {restrictuser,checkauth}=require("./middleware/auth");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieparser());
const {connectmongo}=require("./connect")

connectmongo("mongodb://127.0.0.1:27017/short_url")
.then(()=>{
    console.log("mongodb connect")
})
.catch((err) => console.log("error caught",err));



// adding ui using ejs
app.set("view engine","ejs");
//fetching files from views
app.set("views",path.resolve("./views"));


// app.get("/test",async (req,res) =>{
//     const allurls=await URL.find({});
//    return res.render("home",{
//     urls:allurls,
//    });
// })








const urlrouter=require("./routes/url");
const staticrouter=require("./routes/staticrouter");
const userRoute = require("./routes/user");
app.use("/url",restrictuser,urlrouter);
app.use("/user",userRoute);
app.use("/",checkauth,staticrouter);

app.listen(port,()=>console.log("server startedddddddddd"));