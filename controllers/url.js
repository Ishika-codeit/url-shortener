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
   //insertin in database
  const result= await URL.create(
    {
       shortId:shortID,
       redirectURL:body.url,
       history:[],
    }
   );
   return res.json({id:shortID});
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
)
if (!entry) {
        return res.status(404).send("Short URL not found");
    }
res.redirect(entry.redirectURL);
}






module.exports={
    handleshorturl,
    redirectoriginal,
}