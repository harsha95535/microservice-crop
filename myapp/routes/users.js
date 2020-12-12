var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');  
const { response } = require('../app');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



/* Process POST Form */
var urlencodedParser = bodyParser.urlencoded({ extended: false });  

router.post('/process1', urlencodedParser, function (req, res) {  
   /*rewrite this code with your logic */
   /* to access name use 'req.body.name' */
   var name = req.body.name;
   var cname = req.body.cname; 
   var result;
   if(cname=='Wheat' || cname=='Rice' || cname=='Barkley')
    result = 'For this crop Potasic Fertilizer is best fertilizer currently in market. (If u want to buy this product proceed to this link localhost:3001)';

  else  
    result = 'Please enter the crop name correctly';

   res.render('response',  {name : name, message: result});
  
});
router.post('/process', urlencodedParser, function (req, res) {  
  /*rewrite this code with your logic */
  /* to access name use 'req.body.name' */
  var name = req.body.name;
  var address = req.body.address; 
  var result;
  if(address!= null && address != '')
   result = 'Your Product will be delivered to your address';
 else  
   result = 'Please enter the correct addrress to deliver your product';

  res.render('response', {name : name, message: result});
 
});  

module.exports = router;
