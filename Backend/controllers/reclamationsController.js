const asyncHandler =require("express-async-handler");
const Reclamation=require("../models/reclamationModel");


const createReclamation=asyncHandler(async (req,res)=>{
    console.log(req.body);
    const{nom,prenom,dateNaissance,civilite,cin,rib,sujet,texte}=req.body;
    if(!nom || !prenom ||!dateNaissance || !civilite || !cin || !rib || !sujet){
        res.status(400);
        throw new Error("champs obligatoires !");
    }
    const reclamation = await Reclamation.create({
        nom,
        prenom,
        dateNaissance,
        civilite,
        cin,
        rib,
        sujet,
        texte,


    });
    res.status(201).json(reclamation);
    

});
module.exports={createReclamation};