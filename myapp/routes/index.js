var express = require('express');
var router = express.Router();
var request = require('request');
const APIURL = 'http://localhost:3001/form';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Crop Management System',name : 'My First App' });
});

router.get('/form', function(req, res, next) {
  res.render('form');
 
});
router.get('/service2form', function(req, res, next){
 request(APIURL  ,

    function (error, response, body) {

        if (!error && response.statusCode == 200) {

            //sresponse = JSON.parse(body);

            res.send(body);

        } else {

            console.log(response.statusCode + response.body);

            res.send({info: NULL});

        }

    });
});

module.exports = router;
