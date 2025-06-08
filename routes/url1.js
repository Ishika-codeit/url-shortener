const express=require('express');
const router=express.Router();


//importing controller
const{handleshorturl}=require("../controllers/url2");








// router.route("/:id")
// .get(redirectingoriginal);

router.route("/",handleshorturl);

// router.route("/URL/analytics/:id")
// .get(handlehistory);