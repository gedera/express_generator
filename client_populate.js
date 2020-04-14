const client = require('redis').createClient();

client.hmset("client:1", {'name': 'name1', 'lastName': 'lastName1'});
client.hmset("client:2", {'name': 'name2', 'lastName': 'lastName2'});
client.hmset("client:3", {'name': 'name3', 'lastName': 'lastName3'});
client.hmset("client:4", {'name': 'name4', 'lastName': 'lastName4'});
client.hmset("client:5", {'name': 'name5', 'lastName'. 'lastName5'});
