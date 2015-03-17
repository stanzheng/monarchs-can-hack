var express = require('express');
var router = express.Router();

var lazyDatabase = [];
var id = 0;

/* GET courses listing. */
router.get('/course', function(req, res, next) {
  res.send(lazyDatabase);
});

/* POST courses listing. */
router.post('/course', function(req, res, next) {

  var courseName = req.body.courseName;
  var date = new Date();
  id = id + 1;
  var course = {
    id: id,
    name: courseName,
    date: date
  };
  lazyDatabase.push(course);
  res.send(lazyDatabase);
});

/* GET one courses listing. */
router.get('/course/:id', function(req, res, next) {
  var index = req.params.id;
  res.send(lazyDatabase[index-1]);
});


/* PUT courses listing. */
router.put('/course/:id', function(req, res, next) {
  var index = req.params.id;
  var courseName = req.body.courseName;

  lazyDatabase[index-1].name = courseName;
  console.log(index);
  res.send(lazyDatabase);
});

/* DELETE courses listing. */
router.delete('/course/:id', function(req, res, next) {
  var index = req.params.id;
  lazyDatabase.splice(index-1,1);

  res.send(lazyDatabase);
});

module.exports = router;
