const express=require('express');
const router=express.Router();


//importing controller
const{handleshorturl}=require("../controllers/url");








// router.route("/:id")
// .get(redirectingoriginal);

router.route("/").post(handleshorturl);

// router.route("/URL/analytics/:id")
//  .get(handlehistory);
module.exports=router;