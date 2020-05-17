const redis = require('redis');
const redisClient = redis.createClient();

function getLastId() {
  return new Promise(resolve => {
    //consulta a redis que no anda
    redisClient.get('planId', (err, result) => {
      if (result) {
        resolve(parseInt(result));
      } else {
        resolve(0);
      }
    });
  });
};

async function nextId() {
  id = await getLastId();
  return ++id;
}

function setId(id) {
  return new Promise(resolve => {
    redisClient.set('planId', id, (err, result) => {
      if (result) {
        console.log(result);
        resolve(null);
      } else {
        console.log(err);
        resolve(err);
      }
    });
  });
}

function find (key) {
  return new Promise(resolve => {
    redisClient.hgetall(`plans#${key}`, (err, result) => {
      if (result) {
        resolve(result);
      } else {
        resolve(null);
      }
    });
  });
}

function save(key, value) {
  return new Promise(resolve => {
    redisClient.hmset(key, value, (err, result) => {
      if (result) {
        resolve(true);
    } else {
      resolve(err);
    }
    });
  });
};

module.exports = { getLastId, nextId, setId, save, find };
