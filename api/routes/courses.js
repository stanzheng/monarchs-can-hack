var express = require('express');
var router = express.Router();

var lazyDatabase = [];
var ID = 1;

/* GET courses listing. */
router.get('/course', function(req, res, next) {
  res.send(lazyDatabase);
});

/* POST courses listing. */
router.post('/course', function(req, res, next) {
  res.send(lazyDatabase);
});

/* PUT courses listing. */
router.put('/course/:id', function(req, res, next) {
  res.send(lazyDatabase);
});

/* DELETE courses listing. */
router.delete('/course', function(req, res, next) {
  res.send(lazyDatabase);
});

/* GET courses listing. */
router.get('/course/:id', function(req, res, next) {
  res.send(lazyDatabase);
});

module.exports = router;
