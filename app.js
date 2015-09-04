var express    = require('express');
var bodyParser = require('body-parser');
var path       = require('path');
var mysql      = require('mysql');

var app        = express();


// Config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');

app.use('/public', express.static('public'));


// Database

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3000',
  user     : 'root',
  password : 'sandrine140271',
  database : 'mydb'
});

connection.connect();

connection.query('SELECT Id, nom, prenom, email from inscrit', function(err, rows, fields) {
  console.log("blocage");
  if (err) throw err;
});

connection.end();


// // Models



// Routes
app.get('/', function(req,res){
  res.render('inscription');
});
app.post('/', function(req,res){
  new Inscription({
    nom         : req.body.nom,
    prenom      : req.body.prenom,
    email       : req.body.email,
  });
  res.render('inscription');
});


// Serveur
app.listen(3000);
console.log("App démarrée à l'adresse http://localhost:3000");
