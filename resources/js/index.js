window.axios = require('axios');

let data = {
    grant_type: 'client_credentials',
    client_id: 'd7005dfb68d1408e38b7695e3e005160',
    client_secret: '352115c3e7555547480f755603892ebb',
};

data = {
    mail: 'CoderYooda@gmail.com'
}




window.sendMessage = function(sh, v, g, steel, name, phone){

    let data = new URLSearchParams();
    data.append('sh', sh);
    data.append('v', v);
    data.append('g', g);
    data.append('steel', steel);
    data.append('name', name);
    data.append('phone', phone);

    axios.post('/send.php', data)
        .then((response) => {
            alert("Заявка успешно отправлена!")

        })
        .catch((error) => {
            console.log(error);
        })
}

window.openMenu = function(){
    document.getElementsByTagName('body')[0].classList.add('opened');
    document.getElementById('open').classList.add('hide');
    document.getElementById('close').classList.remove('hide');
    document.getElementById('mobile_menu').classList.remove('hide');
};
window.closeMenu = function(){
    document.getElementsByTagName('body')[0].classList.remove('opened');
    document.getElementById('open').classList.remove('hide');
    document.getElementById('close').classList.add('hide');
    document.getElementById('mobile_menu').classList.add('hide');
};
//Npo22@bk.ru
// var answerGetter = function answerGetter(data){
//     console.log(data);
// }
// var send = () => {
//     sendpulse.smtpSendMail(answerGetter,email);
// }