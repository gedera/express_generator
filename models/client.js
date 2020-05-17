var ClientSchema = require('./client_schema');

function init(args){
  return new ClientSchema(args);
}

function find(id) {
  return new Promise(resolve => {
    resolve(ClientSchema.findById(id).exec());
  });
}

function all() {
  return new Promise(resolve => {
    resolve(ClientSchema.find().exec());
  });
}



module.exports = {init, find, all };
