window.axios = require('axios');


let email = {
    "html" : "<p>Your email content goes here</p>",
    "text" : "Your email text version goes here",
    "subject" : "Пользователь оформил заказ!",
    "from" : {
        "name" : "Support",
        "email" : "info@bbcrm.ru"
    },
    "to" : [ {
        "name" : "NPO22",
        "email" : "CoderYooda@gmail.com"
    } ]
};

let data = {
    grant_type: 'client_credentials',
    client_id: 'd7005dfb68d1408e38b7695e3e005160',
    client_secret: '352115c3e7555547480f755603892ebb',
};

axios.post('https://api.sendpulse.com/oauth/access_token', data)
    .then((response) => {
        let header = generateHeader(response.data.access_token);
        console.log(header);
        axios.post('https://api.sendpulse.com/smtp/emails', email, header)
            .then((response) => {
                console.log("SUCESS");

            })
            .catch((error) => {
                console.log(error);
            })

    })
    .catch((error) => {
        console.log(error);
    })


let generateHeader = function(token){
    return header = {
        'Authorization': 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*'
    };
}




//Npo22@bk.ru
// var answerGetter = function answerGetter(data){
//     console.log(data);
// }
// var send = () => {
//     sendpulse.smtpSendMail(answerGetter,email);
// }