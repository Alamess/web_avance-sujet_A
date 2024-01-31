const express=require("express");
const router=express.Router();
const { createReclamation}=require("../controllers/reclamationsController")
router.post("/",createReclamation);
module.exports=router;