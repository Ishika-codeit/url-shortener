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
module.exports={
    handleshorturl,
}