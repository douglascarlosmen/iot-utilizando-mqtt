<?php

require ('./vendor/autoload.php');

use PhpMqtt\Client\MqttClient;

$server   = 'localhost';
$port     = 1883;

$mqtt = new MqttClient($server, $port);
$mqtt->connect();
$mqtt->publish('php/teste', 'Olá Mundo!', 0);
$mqtt->disconnect();