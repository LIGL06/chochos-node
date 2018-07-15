var express = require('express');
var Answer = require('../models/answer');
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

router.get('/part-four', function (req, res, next) {
  Answer.find({}, function(error, answers){
    if(error) throw error;
    else  answersPtOne = answers;
  }).limit(10);
  Answer.find({}, function(error, answers){
    if(error) throw error;
    else  answersPtTwo = answers;
  }).limit(17).sort('-created');
  res.render('four', {
    title: 'Pt. III',
    answersPtOne: answersPtOne,
    answersPtTwo: answersPtTwo
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

router.post('/part-three', function (req, res, next) {
  var data = req.body;1
  for (var key in data) {
    answer = new Answer({
      question: key,
      answer: data[key]
    });
    answer.save(function(error){
      if (error) throw error;
    });
  }
  res.redirect('/part-four');
  
});

module.exports = router;