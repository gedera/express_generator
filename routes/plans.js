var express = require('express');
var router = express.Router();
var redis = require('redis');
var redisClient = redis.createClient();
var Plan = require('../models/plan');

router.get('/:id', async function(req, res, next) {
  result = await Plan.find(req.params['id']);

  if (result) {
    res.json({status: true, response: result});
  } else {
    res.json({status: false, response: 'cant_find'});
  }
});

// /* Post plan listing. */
router.post('/', async function(req, res, next) {
  var id = await Plan.nextId();

  key = `plans#${id}`;
  value = req.body;

  console.log(`${key} => ${JSON.stringify(value)}`);

  result = await Plan.save(key, value);

  console.log(`result => ${result}`);

  if (result) {
    response = await Plan.setId(id);

    if (response == null) {
      res.json({status: true, response: req.body});
    } else {
      res.json({status: false, response: response});
    }
  } else {
    res.json({status: false, response: 'cant create'});
  }
});

module.exports = router;
