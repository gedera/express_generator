var express = require('express');
var router = express.Router();
var Client = require('../models/client');
// var Contract = require('../models/contract');
var ClientSchema = require('../models/client_schema');

// /* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.get('Authorization'));
  try {
    const result = ClientSchema.find().exec();
    result.then((doc) => {
      console.log(doc);
      res.json(doc);
    })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  }catch (err) {
    res.json(err);
  }
});


// async function findById(req, res, next) {
//   const result = await Client.find(req.params['id']);
//   res.json(result);
// }

// router.get('/:id', findById);

// router.get('/:id', function(req, res, next) {
//   var id = req.params['id'];
//   const result = ClientSchema.findById(id).exec();
//   result.then((doc) => {
//     console.log(doc);
//     return res.json(doc);
//   })
//     .catch((err) => {
//       console.log(err);
//       return res.send(err);
//     });
// });

router.get('/:id', function(req, res, next) {
  const result = Client.find(req.params['id']);
  result.then((client) => {
    res.json(client);
  });
});

// curl --data "fname=foo&lname=bar&gender=true&birthday=01/01/2000" 127.0.0.1:3000/clients -X POST
router.post('/', function(req, res, next) {
  const client = new Client(req.body);
  console.log(client);
  client.save(function (err) {
    if (!err) {
      console.log('Success!');
      res.status(200).json(client);
    } else {
      console.log("HOLA");
    }
  });
});

// curl --data "fname=Santos" 127.0.0.1:3000/clients/5ea5f3238dd22fb41a220c5e -X PUT
router.put('/:id', function(req, res, next) {
  const client = new Client(req.body);
  console.log(client);
  client.save(function (err) {
    if (!err) {
      console.log('Success!');
      res.status(200).json(client);
    } else {
      console.log("HOLA");
    }
  });
});


module.exports = router;
