const express = require('express');
const router = express.Router();

// API routes
router.get('/', (req, res) => {
  res.send('Hello World from API');
});

router.get('/visitingcard', (req, res) => {
  var obj = '{'
       +'"name" : "Sunny",'
       +'"email"  : "sunnyvinay7@gmail.com",'
       +'"phone" : "408-656-7734"'
       +'}';
  console.log(obj);
  res.send(obj);
});

router.post('/visitingcard', (req, res) => {
	var jsonString = '';

    req.on('data', function (data) {
       jsonString += data;
    });

    req.on('end', function () {
       console.log(JSON.parse(jsonString));
    });
  res.send('SUCCESS');
});


module.exports = router;
