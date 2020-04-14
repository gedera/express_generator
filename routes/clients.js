var express = require('express');
const redis = require('redis');
var router = express.Router();
const redisClient = redis.createClient();

/* GET clients listing. */
router.get('/', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  res.send('GET clients listing');
});

/* GET client by ID listing. */
router.get('/:id', function(req, res, next) {
  // res.send(`GET client by ID: ${req.params["id"]} listing.`);
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');

  // var client = clients.find(element => element['id'] === req.params["id"]);

  console.log(`Llego el id ${req.params['id']}`);
  redisClient.hgetall(`client:${req.params['id']}`, (err, result) => {
    if (result) {
      console.log(result);
      res.status(200).json(result);
    } else {
      console.log('Nada vieja');
      res.status(200).json({'error': 'cant_find'});
    }
  });
});

/* POST client listing. */
router.post('/', function(req, res, next) {
  // res.send('POST client listing.');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');

  console.log(`llego el id ${req.body['id']}`);
  redisClient.hmset(`client:${req.body['id']}`, req.body, (err, result) => {
    if (result) {
      res.status(200).json(req.body);
    } else {
      res.status(200).json({'error': 'cant_create'});
    }
  });
});

/* PATCH client listing. */
router.patch('/:id', function(req, res, next) {
  // res.send(`PATCH client by ID: ${req.params["id"]} listing.`);
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');

  var oldClient = clients.find(element => element['id'] === req.params["clientId"]);

  var obj = Object.assign(oldClient, req.body);

  res.status(200).json(obj);
});

/* PUT client listing. */
router.put('/:id', function(req, res, next) {
  // res.send(`PUT client by ID: ${req.params["id"]} listing.`);
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');

  var oldClient = clients.find(element => element['id'] === req.params["clientId"]);

  var obj = Object.assign(oldClient, req.body);

  res.status(200).json(obj);
});

/* DELETE client listing. */
router.delete('/:id', function(req, res, next) {
  // res.send(`DELETE client by ID: ${req.params["id"]} listing.`);
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');

  for( var i = 0; i < clients.length; i++) {
    if ( clients[i]['id'] === req.params["clientId"]) { clients.splice(i, 1); }
  };

  res.status(200).json(clients);
});

module.exports = router;
