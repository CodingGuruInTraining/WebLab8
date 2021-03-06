var express = require('express');
var router = express.Router();
var apod = require('../helpers/apod');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AstroPix' });
});

// Displays today's picture.
router.get('/fetch_picture', function(req, res, next){
  if (req.query.today) {
      apod(function (data, error) {
          if (error) {
              return res.render('apod_error', {error: error.message});
          }
          return res.render('picture', {apod: data});
      }, true);
  }
// Displays random picture.
  else if (req.query.random) {
    apod(function(data, error) {
      if (error) {
        return res.render('apod_error', { error: error.message });
      }
      return res.render('picture', { apod : data });
    });
  } else {
    next();
  }
});

module.exports = router;
