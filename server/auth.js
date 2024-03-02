const express = require('express')
const cors = require('cors')
const email= require('./mail')
const multer = require('multer'); 
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage },{
    limits: { fileSize: 10 * 1024 * 1024 }, // Set the limit to 10MB or adjust to your requirements
  });
const app = express()



app.use(express.json())
app.use(cors())

app.listen(3002, () => {
    console.log('Authentication Server is running on port 3002')
})




app.post('/register', (req, res) => {
   

    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    console.log(sentEmail)
    console.log(sentPassword)

    const SQL = "Insert Into User_Details (email, username, password) values (?,?,sha(?))"
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





app.post('/officer_register', upload.fields([{ name: 'profilePicture', maxCount: 1 }, { name: 'certificate', maxCount: 1 }]), (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;

  const profilePicture = req.files['profilePicture'][0]; // Access the profile picture file
  const certificate = req.files['certificate'][0]; // Access the certificate file

  console.log(sentEmail);
  console.log(sentPassword);

  let SQL = "INSERT INTO Officer_Details (email, name, password, image, certificate_pdf) VALUES (?, ?, SHA(?), ?, ?)";
  let Values = [sentEmail, sentUserName, sentPassword, profilePicture.buffer, certificate.buffer]; // Use the buffer to store file data

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Officer_Registration(SQL, Values)
    .then(success => {
      if (success) {
       


        // //insert in appointment
        const currentDate = new Date();
        const isoFormattedDate = currentDate.toISOString().split('T')[0]; // Converts to 'YYYY-MM-DD'
    
         SQL="INSERT INTO Appointment (Date, officer_email,officer_name) VALUES (?, ? , ?)"
         Values = [isoFormattedDate,sentEmail, sentUserName]; 
    
    
        db.Insert(SQL, Values)
        .then(success => {
            if (success) {
                console.log("Successful insert in appointment table");
                res.send({ message: 'User added!' });
               
            } else {
               
                console.log("Unsuccessful insert in appointment table");
            }
        })
        .catch(error => {
            console.error("Error during login:", error);
        });




      } else {
        res.send({ message: 'Email Exists. User not added!!!' });              
      }
    })
    .catch(error => {
      console.error("Error during registration:", error);
      res.status(500).send({ message: 'An error occurred during registration.' });
    });
   


});




app.post('/login', (req, res) => {

    const sentEmail = req.body.LoginEmail
    const sentPassword = req.body.LoginPassword

    console.log(sentEmail)

    const SQL = "Select * from User_Details where email=? and password=sha(?)"
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


app.post('/officer_login', (req, res) => {

    const sentEmail = req.body.LoginEmail
    const sentPassword = req.body.LoginPassword

    console.log(sentEmail)

    const SQL = "Select * from Officer_Details where email=? and password=sha(?)"
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
const sentEmail=req.body.Email
email.mail(sentOTP,sentEmail)


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
    
  
    const sentEmail = req.body.LoginEmail

    
    let otp= createOTP();

    const SQL = "UPDATE User_Details SET password = SHA(?) WHERE email = ?"
    const Values = [otp,sentEmail];



    const db_class = require('./db_class');
    const db = new db_class('test');


   
  


    
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
        email.mail(otp,sentEmail)
})


app.post('/officer_forgot', (req, res) => {
    
  
    const sentEmail = req.body.LoginEmail

    
    let otp= createOTP();

    const SQL = "UPDATE Officer_Details SET password = SHA(?) WHERE email = ?"
    const Values = [otp,sentEmail];



    const db_class = require('./db_class');
    const db = new db_class('test');


   
  


    
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
        console.log("here Email" + sentEmail)
        email.mail(otp,sentEmail)
})


app.get('/userData', (req, res) => {

    const email = req.query.LoginEmail;
    console.log(email);

    const Values = [email];

    const db_class = require('./db_class');
    const db = new db_class('test');
    
    const SQL = 'SELECT username, email, contact, TO_BASE64(image) AS image_base64 FROM user_details where email=? ';
    console.log(SQL)
    db.GetSelect(SQL,Values)
      .then(result => {
        if (result !== false) {
          // Data retrieval was successful

          const getData = result.map((row) => {
            return {
              username: row.username,
              email: row.email,
              image: row.image_base64,
              contact: row.contact
            };
          });

          console.log('Query Result:', getData);
          res.json(getData);
        } else {
          // An error occurred
          console.log('Error occurred during data retrieval.');
        }
      })
      .catch(error => {
        console.error('Error during query:', error);
      });
    
})



app.post('/updateUserData',upload.fields([{ name: 'profilePicture', maxCount: 1 } ]), (req, res) => {
    const sentEmail = req.body.Email;
    const sentUserName = req.body.UserName;
    const sentContact = req.body.Contact;

    const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0] : null;

    console.log(sentEmail);

    let SQL = "UPDATE user_details SET";
    const Values = [];

    if (sentUserName) {
      SQL += " username = ?,";
      Values.push(sentUserName);
    }

    if (sentContact) {
      SQL += " contact = ?,";
      Values.push(sentContact);
    }
  
    if (profilePicture) {
      SQL += " Image = ?,";
      Values.push(profilePicture.buffer);
    }

    SQL = SQL.slice(0, -1) + " WHERE email = ?";
    Values.push(sentEmail);


  
    // const SQL = "UPDATE user_details SET username = ?, contact = ?, Image = ? WHERE email = ?";
    // let Values = [sentUserName, sentContact, profilePicture.buffer, sentEmail];

    const db_class = require('./db_class');
    const db = new db_class('test');

    db.Update(SQL, Values)
      .then(result => {
        if (result !== false) {
          // Data update was successful
          console.log('Update Result:', result);
          res.send(result);
          
        } else {
          // An error occurred
          console.log('Error occurred during data update.');
          res.status(500).send('Error occurred during data update');
        }
      })
      .catch(error => {
        console.error('Error during update:', error);
        res.status(500).send('Error during update');
      });
  });

  
app.get('/officerData', (req, res) => {

  const email = req.query.LoginEmail;
  console.log(email);

  const Values = [email];

  const db_class = require('./db_class');
  const db = new db_class('test');
  
  const SQL = 'SELECT name, email, contact,bio, TO_BASE64(image) AS image_base64 FROM officer_details where email=? ';
  console.log(SQL)
  db.GetSelect(SQL,Values)
    .then(result => {
      if (result !== false) {
        // Data retrieval was successful

        const getData = result.map((row) => {
          return {
            username: row.name,
            email: row.email,
            image: row.image_base64,
            contact: row.contact,
            bio:row.bio
          };
        });

        console.log('Query Result:', getData);
        res.json(getData);
      } else {
        // An error occurred
        console.log('Error occurred during data retrieval.');
      }
    })
    .catch(error => {
      console.error('Error during query:', error);
    });
  
})

  
app.get('/allofficerData', (req, res) => {

  const email = req.query.LoginEmail;
  console.log(email);

  const Values = [email];

  const db_class = require('./db_class');
  const db = new db_class('test');
  
  const SQL = 'SELECT name, email, bio, contact, TO_BASE64(image) AS image_base64 FROM officer_details';
  console.log(SQL)
  db.GetSelect(SQL,Values)
    .then(result => {
      if (result !== false) {
        // Data retrieval was successful

        const getData = result.map((row) => {
          return {
            username: row.name,
            email: row.email,
            image: row.image_base64,
            contact: row.contact,
            bio: row.bio
          };
        });

        console.log('Query Result:', getData);
        res.json(getData);
      } else {
        // An error occurred
        console.log('Error occurred during data retrieval.');
      }
    })
    .catch(error => {
      console.error('Error during query:', error);
    });
  
})

app.post('/updateOfficerData',upload.fields([{ name: 'profilePicture', maxCount: 1 } ]), (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentContact = req.body.Contact;
  const sentBio = req.body.Bio;

  const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0] : null;

  console.log(sentEmail);

  let SQL = "UPDATE officer_details SET";
  const Values = [];

  if (sentUserName) {
    SQL += " name = ?,";
    Values.push(sentUserName);
  }

  if (sentContact) {
    SQL += " contact = ?,";
    Values.push(sentContact);
  }

  if (sentBio) {
    SQL += " bio = ?,";
    Values.push(sentBio);
  }

  if (profilePicture) {
    SQL += " Image = ?,";
    Values.push(profilePicture.buffer);
  }

  SQL = SQL.slice(0, -1) + " WHERE email = ?";
  Values.push(sentEmail);



  // const SQL = "UPDATE user_details SET username = ?, contact = ?, Image = ? WHERE email = ?";
  // let Values = [sentUserName, sentContact, profilePicture.buffer, sentEmail];

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(result => {
      if (result !== false) {
        // Data update was successful
        console.log('Update Result:', result);
        res.send(result);
        
      } else {
        // An error occurred
        console.log('Error occurred during data update.');
        res.status(500).send('Error occurred during data update');
      }
    })
    .catch(error => {
      console.error('Error during update:', error);
      res.status(500).send('Error during update');
    });
});


 
app.get('/blogData', (req, res) => {

  const Values = [];

  const db_class = require('./db_class');
  const db = new db_class('test');
  
  const SQL = 'SELECT title,link, TO_BASE64(image) AS image_base64 FROM blogpost';
  console.log(SQL)
  db.GetSelect(SQL,Values)
    .then(result => {
      if (result !== false) {
        // Data retrieval was successful

        const getData = result.map((row) => {
          return {
            title: row.title,
            link: row.link,
            image: row.image_base64
          };
        });

        // console.log('Query Result:', getData);
        res.json(getData);
      } else {
        // An error occurred
        console.log('Error occurred during data retrieval.');
      }
    })
    .catch(error => {
      console.error('Error during query:', error);
    });
  
})


app.post('/addBlog',upload.fields([{ name: 'image', maxCount: 1 } ]), (req, res) => {
  const sentTitle = req.body.title;
  const sentLink = req.body.link;

  const sentImage = req.files['image'] ? req.files['image'][0] : null;

  const SQL = "INSERT INTO blogpost (title, link, image) VALUES (?, ?, ?)";
  const Values = [sentTitle, sentLink, sentImage.buffer];

 

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(result => {
      if (result !== false) {
       
        console.log('Insertion Result:', result);
        res.send(result);
        
      } else {
        // An error occurred
        console.log('Error occurred during data insertion.');
        res.status(500).send('Error occurred during data insertion');
      }
    })
    .catch(error => {
      console.error('Error during blog insertion:', error);
      res.status(500).send('Error during blog insertion');
    });
});

 
app.get('/newsData', (req, res) => {

  const Values = [];

  const db_class = require('./db_class');
  const db = new db_class('test');
  
  const SQL = 'SELECT title,link, TO_BASE64(image) AS image_base64 FROM news';
  console.log(SQL)
  db.GetSelect(SQL,Values)
    .then(result => {
      if (result !== false) {
        // Data retrieval was successful

        const getData = result.map((row) => {
          return {
            title: row.title,
            link: row.link,
            image: row.image_base64
          };
        });

        // console.log('Query Result:', getData);
        res.json(getData);
      } else {
        // An error occurred
        console.log('Error occurred during data retrieval.');
      }
    })
    .catch(error => {
      console.error('Error during query:', error);
    });
  
})



app.post('/addNews',upload.fields([{ name: 'image', maxCount: 1 } ]), (req, res) => {
  const sentTitle = req.body.title;
  const sentLink = req.body.link;

  const sentImage = req.files['image'] ? req.files['image'][0] : null;

  const SQL = "INSERT INTO news (title, link, image) VALUES (?, ?, ?)";
  const Values = [sentTitle, sentLink, sentImage.buffer];

 

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(result => {
      if (result !== false) {
       
        console.log('Insertion Result:', result);
        res.send(result);
        
      } else {
        // An error occurred
        console.log('Error occurred during data insertion.');
        res.status(500).send('Error occurred during data insertion');
      }
    })
    .catch(error => {
      console.error('Error during news insertion:', error);
      res.status(500).send('Error during news insertion');
    });
});



app.get('/cropData', (req, res) => {

  const Values = [];

  const db_class = require('./db_class');
  const db = new db_class('test');
  
  const SQL = 'SELECT name, TO_BASE64(image) AS image_base64 FROM crop';
  console.log(SQL)
  db.GetSelect(SQL,Values)
    .then(result => {
      if (result !== false) {
        // Data retrieval was successful

        const getData = result.map((row) => {
          return {
            name: row.name,
            image: row.image_base64
          };
        });

        // console.log('Query Result:', getData);
        res.json(getData);
      } else {
        // An error occurred
        console.log('Error occurred during data retrieval.');
      }
    })
    .catch(error => {
      console.error('Error during query:', error);
    });
  
})



app.post('/addCrop',upload.fields([{ name: 'image', maxCount: 1 } ]), (req, res) => {
  const sentTitle = req.body.title;

  const sentImage = req.files['image'] ? req.files['image'][0] : null;

  const SQL = "INSERT INTO Crop (name, image) VALUES (?, ?)";
  const Values = [sentTitle, sentImage.buffer];

 

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(result => {
      if (result !== false) {
       
        console.log('Insertion Result:', result);
        res.send(result);
        
      } else {
        // An error occurred
        console.log('Error occurred during data insertion.');
        res.status(500).send('Error occurred during data insertion');
      }
    })
    .catch(error => {
      console.error('Error during crop insertion:', error);
      res.status(500).send('Error during crop insertion');
    });
});


app.get('/roofcropData', (req, res) => {

  const Values = [];

  const db_class = require('./db_class');
  const db = new db_class('test');
  
  const SQL = 'SELECT name, TO_BASE64(image) AS image_base64 FROM rooftopcropproduction';
  console.log(SQL)
  db.GetSelect(SQL,Values)
    .then(result => {
      if (result !== false) {
        // Data retrieval was successful

        const getData = result.map((row) => {
          return {
            name: row.name,
            image: row.image_base64
          };
        });

        // console.log('Query Result:', getData);
        res.json(getData);
      } else {
        // An error occurred
        console.log('Error occurred during data retrieval.');
      }
    })
    .catch(error => {
      console.error('Error during query:', error);
    });
  
})
  



