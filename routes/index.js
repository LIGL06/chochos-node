var express = require('express');
var Lili = require('../models/Lili');
var Ivan = require('../models/Ivan');
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
  Ivan.find({}, function (error, ivans) {
    if (error) throw error;
    else answersPtOne = ivans;
  }).limit(10).sort('question');
  Lili.find({}, function (error, lilis) {
    if (error) throw error;
    else answersPtTwo = lilis;
  }).limit(17).sort('question');
  res.render('four', {
    title: 'Pt. IV',
    answersPtOne: answersPtOne,
    answersPtTwo: answersPtTwo
  });
});

router.post('/part-two', function (req, res, next) {
  var data = req.body;
  for (var key in data) {
    ivan = new Ivan({
      question: key,
      answer: data[key]
    });
    ivan.save(function (error) {
      if (error) throw error;
    });
  }
  res.redirect('/part-three');

});

router.post('/part-three', function (req, res, next) {
  var data = req.body;
  1
  for (var key in data) {
    lili = new Lili({
      question: key,
      answer: data[key]
    });
    lili.save(function (error) {
      if (error) throw error;
    });
  }
  res.redirect('/part-four');

});

module.exports = router;