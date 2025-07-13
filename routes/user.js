const express=require("express");
const router=express.Router();
const { handleuser} = require("../controllers/user")


router.post("/", handleuser);



module.exports = router;
