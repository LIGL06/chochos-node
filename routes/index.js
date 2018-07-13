var express = require('express');
var Answer = require('../models/answer').Answer;
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Hello, Bae'
  });
});

router.get('/part-one', function (req, res, next) {
  res.render('one', {
    title: 'Pt. I'
  });
});

router.get('/part-two', function (req, res, next) {
  res.render('two', {
    title: 'Pt. II'
  });
});

router.get('/part-three', function (req, res, next) {
  res.render('three', {
    title: 'Pt. III'
  });
});

router.post('/part-two', function (req, res, next) {
  var data = req.body;
  for (var key in data) {
    answer = new Answer({
      question: key,
      answer: data[key]
    });
    answer.save(function(error){
      if (error) throw error;
    });
  }
  res.redirect('/part-three');
  
});

module.exports = router;