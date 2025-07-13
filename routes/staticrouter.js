const express=require("express");
const router=express.Router();
const URL=require("../models/url");


router.get("/",async(req,res)=>{
    return res.render("home");
})


router.get("/list", async (req, res) => {
    const allurls = await URL.find({});
    return res.render("list", { urls: allurls });
});


router.get("/result/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    const url = await URL.findOne({ shortId: shortID });

    if (!url) {
        return res.status(404).send("Short URL not found");
    }

    return res.render("result", { id: shortID });
});
router.get("/signup",async(req,res)=>{
    return res.render("signup");
});

module.exports = router;