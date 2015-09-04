var express = require('express');
var bodyParser = require('body-parser');
var app =express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));


app.post('/inscription', function(req, res){
  new Inscription({
    nom         : req.body.nom_enfant,
    prenom      : req.body.prenom_enfant,
    email       : req.body.age,
  });
  res.send('inscrit')
});


app.get('/inscription', function(req, res){
  res.render('inscription')
});

module.exports = app;

var mysql= require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'sandrine140271',
  database : 'mydb'
});

connection.connect();

connection.query('SELECT Id, nom, prenom, email from inscrit', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();

app.listen(3000);


// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });

