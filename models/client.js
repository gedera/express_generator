var ClientSchema = require('./client_schema');

function init(args){
  new ClientSchema(args);
}

function find(id) {
  const result = ClientSchema.findById(id).exec();
  return result;
};

// async function find(id) {
//   try {
//     const result = await ClientSchema.findById(id).exec();
//     return Promise.resolve(result);
//   }catch (err) {
//     return Promise.reject(err);
//   }
// }

module.exports = {init, find };
