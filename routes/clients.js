var express = require('express');
var router = express.Router();
var Client = require('../models/client');
// var Contract = require('../models/contract');
var ClientSchema = require('../models/client_schema');

// /* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log(req.get('Authorization'));
  try {
    result = await Client.all();
    res.json({status: true, response: result});
  }catch (err) {
    res.json({status: true, response: err});
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    result = await Client.find(req.params['id']);
    res.json(result);
  }catch (err) {
    res.json({status: true, response: err});
  }
});

// curl --data "fname=foo&lname=bar&gender=true&birthday=01/01/2000" 127.0.0.1:3000/clients -X POST
router.post('/', function(req, res, next) {
  try {
    const client = Client.init(req.body);
    console.log(client);
    client.save(function (err) {
      if (!err) {
        console.log('Success!');
        res.status(200).json({status: true, response: client});
      } else {
        res.status(200).json({status: false, response: err});
      }
    });
  }catch (err) {
    res.json({status: true, response: err});
  }
});

module.exports = router;
