const authService = require("../Services/authService");
const express = require("express");
const router = express.Router();



router.post("/register",authService.register);
router.post("/login",authService.login);

router.get("/protectedResource",()=>{
   console.log("protectd resource");
});





module.exports=router;