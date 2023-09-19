


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'adcommerce247@gmail.com',
        pass: 'jyexjnbstczwlvfz' 
    }
});



function mail(OTP,Email){

 const mailOptions = {
    from: 'adcommerce247@gmail.com', 
    to: Email, 
    subject: 'OTP',
    text:OTP
};



transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
}



function LinkSendMail(Text,Email){

    const mailOptions = {
       from: 'adcommerce247@gmail.com', 
       to: Email, 
       subject: 'মিটিং এর জন্য লিঙ্ক',
       text:Text
   };
   
   
   
   transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
           console.error('Error sending email:', error);
       } else {
           console.log('Email sent:', info.response);
       }
   });
}
module.exports = { mail,LinkSendMail };


