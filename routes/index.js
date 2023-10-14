var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route for the About Me page
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Route for the Projects page
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Route for the Contact Me page
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});


module.exports = router;
