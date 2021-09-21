var sendpulse = require("sendpulse-api");
/*
 * https://login.sendpulse.com/settings/#api
 */
var API_USER_ID = "USER_ID";
var API_SECRET = "USER_SECRET";
var TOKEN_STORAGE = "/tmp/";

sendpulse.init(API_USER_ID,API_SECRET,TOKEN_STORAGE,function() {
    sendpulse.listAddressBooks(console.log);
});



console.log(1);


// var email = {
//     "html" : "<p>Your email content goes here</p>",
//     "text" : "Your email text version goes here",
//     "subject" : "Пользователь оформил заказ!",
//     "from" : {
//         "name" : "Support",
//         "email" : "info@bbcrm.ru"
//     },
//     "to" : [ {
//         "name" : "NPO22",
//         "email" : "CoderYooda@gmail.com"
//     } ]
// };
//Npo22@bk.ru
// var answerGetter = function answerGetter(data){
//     console.log(data);
// }
// var send = () => {
//     sendpulse.smtpSendMail(answerGetter,email);
// }