var express = require('express');
var router = express.Router();


var speakers = require('../data/speakers.json')

router.get('/', function (req, res, next) {
  res.render('speakers', { title: 'training_lab_v1', speakers });
});



module.exports = router;
