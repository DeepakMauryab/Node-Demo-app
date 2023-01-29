// its a require or importion part for my packages
const { urlencoded } = require("express");
const express= require("express");
const app= new express();
const path= require("path");
const port = process.env.PORT ||3000;

// to use my app access json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// improtes database access in app
require("./database/connect");
// to use static files of html
const statPath=path.join(__dirname, "../public");
app.use(express.static(statPath));

// to use hbs engine to show .hbs files live
app.set("view engine", "hbs");

// to add router?
const Router= require("./route/routes");
app.use(Router);



app.listen(port, ()=>{
    console.log("connected at 3000");
})