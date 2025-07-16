const sessionmap= new Map();

function setuser(id,user){
   sessionmap.set(id,user);
}

function getuser(id){
   return sessionmap.get(id);
}
module.exports={
    setuser,
    getuser,
};