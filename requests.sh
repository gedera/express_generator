curl 127.0.0.1:3000/clients/1
curl 127.0.0.1:3000/clients/2
curl 127.0.0.1:3000/clients/3
curl 127.0.0.1:3000/clients/4
curl 127.0.0.1:3000/clients/5
curl --data "id=1&name=name_1&lastName=last_name_2" 127.0.0.1:3000/clients -X POST
curl --data "id=2&name=name_2&lastName=last_name_2" 127.0.0.1:3000/clients -X POST
curl --data "id=3&name=name_3&lastName=last_name_3" 127.0.0.1:3000/clients -X POST
curl --data "id=4&name=name_4&lastName=last_name_4" 127.0.0.1:3000/clients -X POST
curl --data "id=5&name=name_5&lastName=last_name_5" 127.0.0.1:3000/clients -X POST
