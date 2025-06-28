const express=require('express');
const router=express.Router();


//importing controller
const{handleshorturl,redirectoriginal,handlehistory}=require("../controllers/url");


router.route("/").post(handleshorturl);
router.route("/:shortID")
.get(redirectoriginal);


router.route("/analytics/:shortID")
 .get(handlehistory);
module.exports=router;