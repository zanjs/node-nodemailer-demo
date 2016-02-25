var nodemailer = require('nodemailer');
 
 
 
 var transporter = nodemailer.createTransport({  
        host: "smtp.163.com",
        port: 25,
        auth: {  
            user: 'kehuadmin@163.com',  
            pass: '*****'  
        }  
    });
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: 'kehuadmin@163.com', // sender address 
    to: 'onmicn@163.com', // list of receivers 
    
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