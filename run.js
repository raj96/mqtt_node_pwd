const mqtt = require('mqtt');

const mqtt_url = 'mqtt://url.here';

var opt = {
	host:'url.here',
	username:'username',
	password:'password'
};

var mqclient = mqtt.connect(mqtt_url,opt);

mqclient.on('connect',function(){
	console.log('Connected to %s',mqtt_url);
	this.subscribe('#');
});

mqclient.on('message',function(topic,message){
	console.log('Topic: %s\tMessage: %s\n',topic,message);
});

mqclient.on('error',function(err){
	console.log(err);
});
