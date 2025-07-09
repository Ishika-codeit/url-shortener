const URL=require("../models/url");

const shortid=  require("shortid");


async  function handleshorturl(req,res){
    //extracting nano id
    const shortID= shortid.generate();
    const body=req.body;
    if(
        (!body||!body.url)
        
    ){
        return res.status(400).json({msg:"url is required"});
    }
   //insert  in database
  const result= await URL.create(
    {
       shortId:shortID,
       redirectURL:body.url,
       history:[],
    }
   );
   return res.render('home',{id:shortID});
}

async function redirectoriginal(req,res){
    //fetching from db
    const shortID=req.params.shortID;
    const entry=await URL.findOneAndUpdate(
        {shortId:shortID},
    
    {$push:{
        history:{
            timestamp :Date.now()
        },
    },
    }
);
if (!entry) {
        return res.status(404).send("Short URL not found");
    }
res.redirect(entry.redirectURL);
}


async function handlehistory(req,res){
    try{
    const shortID=req.params.shortID;
    const result= await URL.findOne({shortId:shortID});
     if (!result) {
            return res.status(404).json({ msg: "Short URL not found" });
        }
    return res.json({
        totalclicks:result.history.length,
        analytics: result.history
    });
}
    catch (err) {
        console.error("Error in handlehistory:", err);
        return res.status(500).json({ msg: "Server error" });
    }
}
    




module.exports={
    handleshorturl,
    redirectoriginal,
    handlehistory,
}