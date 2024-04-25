var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/what', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  const filePath = path.join(__dirname, "../public/index.html");
  res.sendFile(filePath);
});
module.exports = router;
