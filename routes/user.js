const express=require("express");
const router=express.Router();
const { handleuser,handlelogin} = require("../controllers/user")


router.post("/", handleuser);

router.post("/login",handlelogin);

module.exports = router;
