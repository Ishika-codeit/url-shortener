const express=require('express');
const router=express.Router();


//importing controller
const{handleshorturl,redirectoriginal,handlehistory}=require("../controllers/url");


router.post("/",handleshorturl);
router.get("/:shortID",redirectoriginal);


router.get("/analytics/:shortID",handlehistory);
module.exports=router;