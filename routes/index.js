var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello, Bae' });
});

router.get('/part-one', function(req, res, next) {
  res.render('one', { title: 'Pt. I' });
});

router.get('/part-two', function(req, res, next) {
  res.render('two', { title: 'Pt. II' });
});

module.exports = router;
