var nodemailer = require('nodemailer'), 
 pkg = require('./package.json');
 
 var transporter = nodemailer.createTransport({  
        host: "smtp.163.com",
        port: 25,
        auth: {  
            user: 'kehuadmin@163.com',  
            pass: 'qq5521193'  
        }  
    });
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: {
    name: '花如意哟',
    address: 'kehuadmin@163.com'
    }, // sender address 
    to: 'onmicn@163.com', // list of receivers 
    name: '花如意',
    subject: 'Hello ✔', // Subject line 
    text: 'Hello world 🐴', // plaintext body 
    html: '<b>Hello world 🐴</b>' // html body 
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});