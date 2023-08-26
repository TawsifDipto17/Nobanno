


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'adcommerce247@gmail.com',
        pass: 'jyexjnbstczwlvfz' 
    }
});



function mail(OTP){

 const mailOptions = {
    from: 'adcommerce247@gmail.com', 
    to: 'mehediahamed@iut-dhaka.edu', 
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

module.exports = { mail };


