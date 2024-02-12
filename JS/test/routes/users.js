const { response } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource 2023');
});

router.get('/toka', function(req,res) {
  console.log("Olen toka :D !!");
  res.send('Tokapa hyvinkin...')
});

router.get('/kolmas/:name', function(req, res) {
  console.log(req.params.name);
  res.send('Terve '+req.params.name);
});


module.exports = router;
