<?php

require 'vendor/autoload.php';
use Sendpulse\RestApi\ApiClient;
use Sendpulse\RestApi\Storage\FileStorage;

// API credentials from https://login.sendpulse.com/settings/#api
define('API_USER_ID', 'd7005dfb68d1408e38b7695e3e005160');
define('API_SECRET', '352115c3e7555547480f755603892ebb');
define('PATH_TO_ATTACH_FILE', __FILE__);

$SPApiClient = new ApiClient(API_USER_ID, API_SECRET, new FileStorage());

$name = $_POST['name'];
$phone = $_POST['phone'];
$sh = $_POST['sh'];
$v = $_POST['v'];
$g = $_POST['g'];
$steel = $_POST['steel'];

var_dump($data);

/*
 * Example: Send mail using SMTP
 */


$email = array(
    'html' => '<p>Пользователь оставил заявку!<br> Имя пользователя: ' . $name . '<br>Телефон: ' . $phone . '<br>Ширина ящика: ' . $sh . '<br>Высота: ' . $v . '<br>Глубина: ' . $g . '<br>Сталь: ' . $steel . '<br></p>',
    'text' => '',
    'subject' => 'Пользователь оставил заявку',
    'from' => array(
        'name' => 'РОБОТ 22NPO',
        'email' => 'info@bbcrm.ru',
    ),
    'to' => array(
        array(
            'name' => 'CoderYooda',
            'email' => 'CoderYooda@gmail.com',
        ),
    )
);
var_dump($SPApiClient->smtpSendMail($email));
