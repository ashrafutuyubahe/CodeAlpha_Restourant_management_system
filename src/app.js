const express=  require("express");
const dbConnection= require("./Config/dbConfig");
const app= express();





app.listen(300,()=>{
    console.log("the backend server is running...")
})