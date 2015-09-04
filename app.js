var express    = require('express');
var bodyParser = require('body-parser');
var path       = require('path');
var mysql      = require('mysql');

var app        = express();


// Config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');

app.use('/public', express.static('public'));


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


// Database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'sandrine140271',
  database : 'mydb'
});

connection.connect();

connection.query('SELECT Id, nom, prenom, email from inscrit', function(err, rows, fields) {
  if (err) throw err;
});

connection.end();

app.listen(3000);
console.log("App démarrée à l'adresse http://localhost:3000");
