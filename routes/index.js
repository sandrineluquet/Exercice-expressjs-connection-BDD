var express = require('express');
var router = express.Router();

 GET home page. 
router.get('/inscription', function(req, res, next) {
  res.render('inscription', { title: 'exo' });
});


module.exports = router;
