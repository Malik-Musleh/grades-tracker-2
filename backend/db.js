const mongoos =require("mongodb")


const db =mongoos.connect("mongodb://localhost:27017/gradtracker",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
.then(()=>console.log("the database is working well "))
.catch(()=>console.log("the connection crashed"))

module.exports=db;