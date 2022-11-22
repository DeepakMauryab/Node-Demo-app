const mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/Project").then(()=>{
    console.log("connected database");
}).catch((e)=>{
    console.log(e);
});
