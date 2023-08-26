const express = require('express')
const cors = require('cors')
const email= require('./mail')

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3002, () => {
    console.log('Server is running on port 3002')
})

app.post('/register', (req, res) => {
   

    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    console.log(sentEmail)
    console.log(sentPassword)

    const SQL = "Insert Into users (email, username, password_hash) values (?,?,sha(?))"
    const Values = [sentEmail, sentUserName, sentPassword];



    const db_class = require('./db_class');
    const db = new db_class('test');


  
    db.Registration(SQL, Values)
        .then(success => {


           if (success) {
              
                res.send({ message: 'User added!' });
            } else {
              
                res.send({ message: 'Email Exists. User not added!!!' });
            }
        })
        .catch(error => {
            console.error("Error during registration:", error);
            res.status(500).send({ message: 'An error occurred during registration.' });
        });
})


app.post('/login', (req, res) => {

    const sentEmail = req.body.LoginEmail
    const sentPassword = req.body.LoginPassword

    console.log(sentEmail)

    const SQL = "Select * from users where email=? and password_hash=sha(?)"
    const Values = [sentEmail, sentPassword];



    const db_class = require('./db_class');
    const db = new db_class('test');



    db.Select(SQL, Values)
        .then(success => {
            if (success) {
                console.log("Matched!!!");
                res.send({ message: 'User found!' });
            } else {
                console.log("User not found!!!");
                res.send({ message: 'User not found!' });
            }
        })
        .catch(error => {
            console.error("Error during login:", error);
            res.status(500).send({ message: 'An error occurred during login.' });
        });
})


app.post('/otp', (req, res) => {
const sentOTP = req.body.OTP
email.mail(sentOTP)

})

const createOTP = () => {
    const digits = 'D$345j7f9kLuE*#h9';
    let otp = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        otp += digits[randomIndex];
    }

    return otp;
}


app.post('/forgot', (req, res) => {
    
    const sentUser = req.body.LoginUser
    const sentEmail = req.body.LoginEmail

    
    let otp= createOTP();

    const SQL = "UPDATE users SET password_hash = SHA(?) WHERE username = ? AND email = ?"
    const Values = [otp,sentUser, sentEmail];



    const db_class = require('./db_class');
    const db = new db_class('test');


    console.log(sentUser)
    console.log(sentEmail)


    
    db.Update(SQL, Values)
        .then(success => {
            if (success) {
            
                res.send({ message: 'An OTP is sent. Login using that OTP' });
            } else {
                console.log("User not found!!! Try again or signup");
                res.send({ message: 'User not found!!! Try again or signup' });
            }
        })
        .catch(error => {
            console.error("Error during connecting server:", error);
            res.status(500).send({ message: 'Error during connecting server' });
        });
        console.log("Changed Password: "+otp)
        email.mail(otp)
})


