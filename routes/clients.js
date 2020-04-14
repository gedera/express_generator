var express = require('express');
var router = express.Router();

const clients = [
  {id: '1',
   name: 'name1',
   lastName: 'last_name2'},
  {id: '2',
   name: 'name2',
   lastNamt: 'last_name2'}
];


/* GET clients listing. */
router.get('/', function(req, res, next) {
  // res.send('GET clients listing');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  res.status(200).json(clients);
});

/* GET client by ID listing. */
router.get('/:id', function(req, res, next) {
  // res.send(`GET client by ID: ${req.params["id"]} listing.`);
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');

  var client = clients.find(element => element['id'] === req.params["id"]);

  res.status(200).json(client);
});

/* POST client listing. */
router.post('/', function(req, res, next) {
  // res.send('POST client listing.');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');

  res.status(200).json(req.body);
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
