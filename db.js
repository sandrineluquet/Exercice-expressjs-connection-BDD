var mysql = require('mysql');
var Schema = mysql.Schema;

var inscriptionSchema = new Schema({
    nom: { type: String, required: true },
    prenom : { type: String, required: true },
    email : { type: String, required: true },
    
});

var Inscription = mysql.model('Inscription', inscriptionSchema);