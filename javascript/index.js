var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost:1883')

var data = {
    nome: "Douglas Men",
    cargo: "Instrutor"
};

client.on('connect', function () {
  client.subscribe('teste', function (err) {
    if (!err) {
      client.publish('teste', JSON.stringify(data))
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(JSON.parse(message.toString()))
  client.end()
})