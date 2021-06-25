const mongoose=require("mongoose");


const Db="mongodb://localhost:27017"
mongoose.connect(Db,{useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
useFindAndModify:false}).then(()=>{ console.log("Connection successfull")}).catch((e)=>{console.log(e)});