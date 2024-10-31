var express = require('express');
var router = express.Router();

const safinaController = require(".../controller/safina");
/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});

router.post('/'.safinaController.signup);

router.post('/login', safinaController.login);

module.exports = router;
