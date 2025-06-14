const express=require('express');
const router=express.Router();


//importing controller
const{handleshorturl,redirectoriginal}=require("../controllers/url");








router.route("/").post(handleshorturl);
router.route("/:shortID")
.get(redirectoriginal);


// router.route("/URL/analytics/:id")
//  .get(handlehistory);
module.exports=router;