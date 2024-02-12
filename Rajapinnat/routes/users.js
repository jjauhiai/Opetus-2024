var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/example',
    function(request,response){
        response.send('I am example in /routes/users.js');
        console.log('I am example');
    }
);
module.exports = router;
