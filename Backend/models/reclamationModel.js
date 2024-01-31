const mongoose = require("mongoose");
const reclamationSchema=mongoose.Schema({
    nom: {
        type: String,
        required: [true, "Veuillez ajouter votre nom"],
    },
    prenom: {
        type: String,
        required: [true, "Veuillez ajouter votre prenom"],
    },
    dateNaissance: {
        type: String,
        required: [true, "Veuillez ajouter votre date de naissance"], 
    },
    civilite:{
        type:String,
        enum:['Single','maried']

    },
    cin:{
        type: Number,
        required:[true, "veuillez ajouter votre CIN"]

    },
    rib:{
        type:Number,
        required:[true,"veuillez ajouter votre RIB"],
    },
    sujet:{
        type:String,
        enum:['Account','Card','Reception in the agency']
    },
    texte:{
        type:String

    }


    },
    {
        timestamps:true,
    }


);
module.exports=mongoose.model("Reclamation", reclamationSchema);