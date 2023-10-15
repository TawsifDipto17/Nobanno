const express = require('express');
const cors = require('cors');

const Mail = require('./mail')



const app = express();

app.use(express.json());
app.use(cors());
app.listen(3005, () => {
  console.log('Data Server is running on port 3005');
});



app.post('/officer_advice_accept1', (req, res) => {
  let Oemail, Uemail; // Corrected variable name to Oemail
  Uemail = req.body.UserEmail;
  Oemail = req.body.OfficerEmail;

  const SQL = "UPDATE Appointment SET slot_1=? WHERE officer_email = ?";
  const Values = ['accepted', Oemail];

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(success => {
      if (success) {
        res.send({ message: 'successful' });
        const text = "প্রিয় গ্রাহক আপনার অনুরোধ গৃহীত হয়েছে। মিটিং লিঙ্ক সময়মত প্রদান করা হবে"
        Mail.LinkSendMail(text, Uemail);
      } else {
        console.log("User not found!!!");
        res.send({ message: 'error' });
      }
    })
    .catch(error => {
      console.error("Error during connecting to the server:", error);
    });
});

app.post('/officer_advice_accept2', (req, res) => {
  let Oemail, Uemail; // Corrected variable name to Oemail
  Uemail = req.body.UserEmail;
  Oemail = req.body.OfficerEmail;

  const SQL = "UPDATE Appointment SET slot_2=? WHERE officer_email = ?";
  const Values = ['accepted', Oemail];

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(success => {
      if (success) {
        res.send({ message: 'successful' });
        const text = "প্রিয় গ্রাহক আপনার অনুরোধ গৃহীত হয়েছে। মিটিং লিঙ্ক সময়মত প্রদান করা হবে"
        Mail.LinkSendMail(text, Uemail);
      } else {
        console.log("User not found!!!");
        res.send({ message: 'error' });
      }
    })
    .catch(error => {
      console.error("Error during connecting to the server:", error);
    });
});

app.post('/officer_advice_accept3', (req, res) => {
  let Oemail, Uemail; // Corrected variable name to Oemail
  Uemail = req.body.UserEmail;
  Oemail = req.body.OfficerEmail;

  const SQL = "UPDATE Appointment SET slot_3=? WHERE officer_email = ?";
  const Values = ['accepted', Oemail];

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(success => {
      if (success) {
        res.send({ message: 'successful' });
        const text = "প্রিয় গ্রাহক আপনার অনুরোধ গৃহীত হয়েছে। মিটিং লিঙ্ক সময়মত প্রদান করা হবে"
        Mail.LinkSendMail(text, Uemail);
      } else {
        console.log("User not found!!!");
        res.send({ message: 'error' });
      }
    })
    .catch(error => {
      console.error("Error during connecting to the server:", error);
    });
});

app.post('/officer_advice_accept4', (req, res) => {
  let Oemail, Uemail; // Corrected variable name to Oemail
  Uemail = req.body.UserEmail;
  Oemail = req.body.OfficerEmail;

  const SQL = "UPDATE Appointment SET slot_4=? WHERE officer_email = ?";
  const Values = ['accepted', Oemail];

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(success => {
      if (success) {
        res.send({ message: 'successful' });
        const text = "প্রিয় গ্রাহক আপনার অনুরোধ গৃহীত হয়েছে। মিটিং লিঙ্ক সময়মত প্রদান করা হবে"
        Mail.LinkSendMail(text, Uemail);
      } else {
        console.log("User not found!!!");
        res.send({ message: 'error' });
      }
    })
    .catch(error => {
      console.error("Error during connecting to the server:", error);
    });
});


app.post('/officer_advice_reject1', (req, res) => {
  let Oemail, Uemail; // Corrected variable name to Oemail
  Uemail = req.body.UserEmail;
  Oemail = req.body.OfficerEmail;

  const SQL = "UPDATE Appointment SET slot_1=? WHERE officer_email = ?";
  const Values = ['rejected', Oemail];

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(success => {
      if (success) {
        res.send({ message: 'successful' });
        const text = " প্রিয় গ্রাহক আপনার অনুরোধ প্রত্যাখ্যান করা হয়েছে. পরে আবার চেষ্টা করুন"
        Mail.LinkSendMail(text, Uemail);
      } else {
        console.log("User not found!!!");
        res.send({ message: 'error' });
      }
    })
    .catch(error => {
      console.error("Error during connecting to the server:", error);
    });
});

app.post('/officer_advice_reject2', (req, res) => {
  let Oemail, Uemail; // Corrected variable name to Oemail
  Uemail = req.body.UserEmail;
  Oemail = req.body.OfficerEmail;

  const SQL = "UPDATE Appointment SET slot_2=? WHERE officer_email = ?";
  const Values = ['rejected', Oemail];

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(success => {
      if (success) {
        res.send({ message: 'successful' });
        const text = " প্রিয় গ্রাহক আপনার অনুরোধ প্রত্যাখ্যান করা হয়েছে. পরে আবার চেষ্টা করুন"
        Mail.LinkSendMail(text, Uemail);
      } else {
        console.log("User not found!!!");
        res.send({ message: 'error' });
      }
    })
    .catch(error => {
      console.error("Error during connecting to the server:", error);
    });
});


app.post('/officer_advice_reject3', (req, res) => {
  let Oemail, Uemail; // Corrected variable name to Oemail
  Uemail = req.body.UserEmail;
  Oemail = req.body.OfficerEmail;

  const SQL = "UPDATE Appointment SET slot_3=? WHERE officer_email = ?";
  const Values = ['rejected', Oemail];

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(success => {
      if (success) {
        res.send({ message: 'successful' });
        const text = " প্রিয় গ্রাহক আপনার অনুরোধ প্রত্যাখ্যান করা হয়েছে. পরে আবার চেষ্টা করুন"
        Mail.LinkSendMail(text, Uemail);
      } else {
        console.log("User not found!!!");
        res.send({ message: 'error' });
      }
    })
    .catch(error => {
      console.error("Error during connecting to the server:", error);
    });
});

app.post('/officer_advice_reject4', (req, res) => {
  let Oemail, Uemail; // Corrected variable name to Oemail
  Uemail = req.body.UserEmail;
  Oemail = req.body.OfficerEmail;

  const SQL = "UPDATE Appointment SET slot_4=? WHERE officer_email = ?";
  const Values = ['rejected', Oemail];

  const db_class = require('./db_class');
  const db = new db_class('test');

  db.Update(SQL, Values)
    .then(success => {
      if (success) {
        res.send({ message: 'successful' });
        const text = " প্রিয় গ্রাহক আপনার অনুরোধ প্রত্যাখ্যান করা হয়েছে. পরে আবার চেষ্টা করুন"
        Mail.LinkSendMail(text, Uemail);
      } else {
        console.log("User not found!!!");
        res.send({ message: 'error' });
      }
    })
    .catch(error => {
      console.error("Error during connecting to the server:", error);
    });
});

app.post('/officer_advice_slot', (req, res) => {
  console.log('I am getting Useremail from local storage here')
  console.log(req.body.UserEmail)
  console.log('I am getting meet link')
  console.log(req.body.Meet_link)


  let email, meet;
  if (req.body.UserEmail != 'none' && req.body.Meet_link != 'none' && req.body.Meet_link != '') {
    email = req.body.UserEmail;
    meet = req.body.Meet_link;

    const SQL = "UPDATE User_Details SET meet_link=? WHERE email = ?"
    const Values = [meet, email];



    const db_class = require('./db_class');
    const db = new db_class('test');







    db.Update(SQL, Values)
      .then(success => {
        if (success) {

          res.send({ message: 'successful' });
          const text = "প্রিয় গ্রাহক, সময়মতো মিটিংয়ে যোগ দিতে লিঙ্কে প্রবেশ করুন" + " " + meet
          Mail.LinkSendMail(text, email)

        } else {
          console.log("User not found!!!");
          res.send({ message: 'error' });
        }
      })
      .catch(error => {
        console.error("Error during connecting server:", error);
      });
  } else {
    res.send({ message: 'error' });

  }
});
// Sample data (replace with your actual data fetching logic)
// const officerAdviceData = [
//   {
//     id: 1,
//     username: 'user1',
//     email: 'user1@example.com',
//     slot1: 'Slot A',
//     slot2: 'Slot B',
//     slot3: 'Slot C',
//     slot4: 'Slot D',
//     sendLink: 'Link 1',
//     start: 'Start 1',
//   }

// ];



app.get('/officer_advice', (req, res) => {
  console.log('I am getting email from local storage officer data table');

  let email;
  if (req.query.LoginEmail != 'none') {
    email = req.query.LoginEmail;
    console.log(email); // Use req.query to get query parameters

    const Values = [email];

    const db_class = require('./db_class');
    const db = new db_class('test');

    const SQL = 'SELECT * FROM Appointment WHERE officer_email = ?';

    db.GetSelect(SQL, Values)
      .then((result) => {
        if (result !== false) {
          console.log('Query Result:', result);
          const officerAdviceData = result.map((row) => {
            return {
              username1: row.username_1,
              email1: row.user_email1,
              username2: row.username_2,
              email2: row.user_email2,
              username3: row.username_3,
              email3: row.user_email3,
              username4: row.username_4,
              email4: row.user_email4,
              slot1: row.slot_1,
              slot2: row.slot_2,
              slot3: row.slot_3,
              slot4: row.slot_4,
            };
          });

          res.json(officerAdviceData);
          console.log("Successfully sent data")
        } else {
          console.log('Error occurred during data retrieval.');
          res.status(500).json({ error: 'Error occurred during data retrieval.' });
        }
      })
      .catch((error) => {
        console.error('Error during query:', error);
        res.status(500).json({ error: 'Error during query.' });
      });
  } else {
    console.log('Problem populating officer table');
    res.status(400).json({ error: 'Problem populating officer table.' });
  }
});



app.get('/get_advice', (req, res) => {
  console.log('I am getting email from local storage get advice data table');

  let email;
  if (req.query.LoginEmail != 'none') {
    email = req.query.LoginEmail;
    console.log(email); // Use req.query to get query parameters

    const Values = [email];

    const db_class = require('./db_class');
    const db = new db_class('test');

    const SQL =
      'SELECT officer_name,officer_email, bio, slot_1, slot_2, slot_3, slot_4, ' +
      'TO_BASE64(image) AS image_base64 ' +
      'FROM Officer_Details ' +
      'INNER JOIN Appointment ON Officer_Details.email = Appointment.officer_email';

    db.GetSelect(SQL, Values)
      .then((result) => {
        if (result !== false) {

          const getAdviceData = result.map((row) => {
            return {
              officer_name: row.officer_name,
              officer_email: row.officer_email,
              image: row.image_base64,
              bio: row.bio,
              slot1: row.slot_1,
              slot2: row.slot_2,
              slot3: row.slot_3,
              slot4: row.slot_4,
            };
          });
          console.log(' Result:', getAdviceData);
          res.json(getAdviceData);
          console.log("Successfully sent data")
        } else {
          console.log('Error occurred during data retrieval.');
        }
      })
      .catch((error) => {
        console.error('Error during query:', error);
      });
  } else {
    console.log('Problem populating officer table');
  }
});

//Getting meet link for user
app.get('/get_meet_link', (req, res) => {
 


    console.log("User Email LINK "+req.query.LoginEmail)

    const SQL = "Select meet_link From User_Details WHERE email = ?"
    const Values = [req.query.LoginEmail];



    const db_class = require('./db_class');
    const db = new db_class('test');







    db.GetSelect(SQL, Values)
      .then((result) => {
        if (result !== false) {

          console.log('Meet Link:', result);
          res.json(result);

        } else {
          console.log('Error occurred during data retrieval.');
          res.json(result);        }

      })
      .catch((error) => {
        console.error('Error during query:', error);
        res.json(result);      });
  
});

//Insert appointment data for slot_1
app.post('/appointment_slot_1', (req, res) => {
  let Uemail=''
  let Oemail=''
  console.log("officer--"+req.body)
  if (req.body.LoginEmail !== 'none') {
    Uemail = req.body.LoginEmail;

    if (req.body.OfficerEmail !== 'none') {
      Oemail = req.body.OfficerEmail;

      let SQL = "select username From User_Details WHERE email = ?";
      let Values = [Uemail];

      const db_class = require('./db_class');
      const db = new db_class('test');

      db.GetSelect(SQL, Values)
        .then((name) => {
          if (name !== false) {
            
            console.log("name"+name[0].username)
            let SQL = "select * From Appointment WHERE user_email1 = ?";
            let Values = [Uemail];

            const db_class = require('./db_class');
            const db = new db_class('test');

            db.GetSelect(SQL, Values)
              .then((result) => {
                if (result !== false) {

                  result.map((row) => {
                    if (row.slot_1 === 'rejected')
                      res.send({ message: 'rejected' });
                    return
                  })



                  const currentDate = new Date();
                  const isoFormattedDate = currentDate.toISOString().split('T')[0]; // Converts to 'YYYY-MM-DD'
                  const request = 'requested';
                  Values = [name[0].username, Uemail, isoFormattedDate, request, Oemail];
                  console.log("here")
                  console.log(name[0].username + Uemail+isoFormattedDate+request+Oemail)
                  SQL = "UPDATE Appointment SET username_1=?, user_email1=?, Date=?, slot_1=? WHERE officer_email = ?"

                  db.Update(SQL, Values)
                    .then((success) => {
                      if (success) {
                        res.send({ message: 'success' });
                     
                      } else {
                        
                        res.send({ message: 'error' });
                      }
                    })
                    .catch((error) => {
                      console.error("Error during connecting server:", error);
                      res.send({ message: 'error' });
                    });


                } else {
                  res.send({ message: 'error' });
                }
              })






              .catch((error) => {
                res.send({ message: 'error' });
              });




          } else {
            res.send({ message: 'error' });
          }
        })






        .catch((error) => {
          res.send({ message: 'error' });
        });
    } else {

      res.send({ message: 'error' });
    }



  }

  else {
    res.send({ message: 'error' });
  }
});

//Insert appointment data for slot_1
app.post('/appointment_slot_2', (req, res) => {
  let Uemail=''
  let Oemail=''
  console.log("officer--"+req.body.OfficerEmail)
  if (req.body.LoginEmail !== 'none') {
    Uemail = req.body.LoginEmail;

    if (req.body.OfficerEmail !== 'none') {
      Oemail = req.body.OfficerEmail;

      let SQL = "select username From User_Details WHERE email = ?";
      let Values = [Uemail];

      const db_class = require('./db_class');
      const db = new db_class('test');

      db.GetSelect(SQL, Values)
        .then((name) => {
          if (name !== false) {
            
            console.log("name"+name[0].username)
            let SQL = "select * From Appointment WHERE user_email2 = ?";
            let Values = [Uemail];

            const db_class = require('./db_class');
            const db = new db_class('test');

            db.GetSelect(SQL, Values)
              .then((result) => {
                if (result !== false) {

                  result.map((row) => {
                    if (row.slot_1 === 'rejected')
                      res.send({ message: 'rejected' });
                    return
                  })



                  const currentDate = new Date();
                  const isoFormattedDate = currentDate.toISOString().split('T')[0]; // Converts to 'YYYY-MM-DD'
                  const request = 'requested';
                  Values = [name[0].username, Uemail, isoFormattedDate, request, Oemail];
                  console.log("here")
                  console.log(name[0].username + Uemail+isoFormattedDate+request+Oemail)
                  SQL = "UPDATE Appointment SET username_2=?, user_email2=?, Date=?, slot_2=? WHERE officer_email = ?"

                  db.Update(SQL, Values)
                    .then((success) => {
                      if (success) {
                        res.send({ message: 'success' });
                     
                      } else {
                        
                        res.send({ message: 'error' });
                      }
                    })
                    .catch((error) => {
                      console.error("Error during connecting server:", error);
                    });


                } else {
                  res.send({ message: 'error' });
                }
              })






              .catch((error) => {
                res.send({ message: 'error' });
              });




          } else {
            res.send({ message: 'error' });
          }
        })






        .catch((error) => {
          res.send({ message: 'error' });
        });
    } else {

      res.send({ message: 'error' });
    }



  }

  else {
    res.send({ message: 'error' });
  }
});

app.post('/appointment_slot_3', (req, res) => {
  let Uemail=''
  let Oemail=''
  console.log("officer--"+req.body.OfficerEmail)
  if (req.body.LoginEmail !== 'none') {
    Uemail = req.body.LoginEmail;

    if (req.body.OfficerEmail !== 'none') {
      Oemail = req.body.OfficerEmail;

      let SQL = "select username From User_Details WHERE email = ?";
      let Values = [Uemail];

      const db_class = require('./db_class');
      const db = new db_class('test');

      db.GetSelect(SQL, Values)
        .then((name) => {
          if (name !== false) {
            
            console.log("name"+name[0].username)
            let SQL = "select * From Appointment WHERE user_email3 = ?";
            let Values = [Uemail];

            const db_class = require('./db_class');
            const db = new db_class('test');

            db.GetSelect(SQL, Values)
              .then((result) => {
                if (result !== false) {

                  result.map((row) => {
                    if (row.slot_1 === 'rejected')
                      res.send({ message: 'rejected' });
                    return
                  })



                  const currentDate = new Date();
                  const isoFormattedDate = currentDate.toISOString().split('T')[0]; // Converts to 'YYYY-MM-DD'
                  const request = 'requested';
                  Values = [name[0].username, Uemail, isoFormattedDate, request, Oemail];
                  console.log("here")
                  console.log(name[0].username + Uemail+isoFormattedDate+request+Oemail)
                  SQL = "UPDATE Appointment SET username_3=?, user_email3=?, Date=?, slot_3=? WHERE officer_email = ?"

                  db.Update(SQL, Values)
                    .then((success) => {
                      if (success) {
                        res.send({ message: 'success' });
                     
                      } else {
                        
                        res.send({ message: 'error' });
                      }
                    })
                    .catch((error) => {
                      console.error("Error during connecting server:", error);
                    });


                } else {
                  res.send({ message: 'error' });
                }
              })






              .catch((error) => {
                res.send({ message: 'error' });
              });




          } else {
            res.send({ message: 'error' });
          }
        })






        .catch((error) => {
          res.send({ message: 'error' });
        });
    } else {

      res.send({ message: 'error' });
    }



  }

  else {
    res.send({ message: 'error' });
  }
});

app.post('/appointment_slot_4', (req, res) => {
  let Uemail=''
  let Oemail=''
  console.log("officer--"+req.body.OfficerEmail)
  if (req.body.LoginEmail !== 'none') {
    Uemail = req.body.LoginEmail;

    if (req.body.OfficerEmail !== 'none') {
      Oemail = req.body.OfficerEmail;

      let SQL = "select username From User_Details WHERE email = ?";
      let Values = [Uemail];

      const db_class = require('./db_class');
      const db = new db_class('test');

      db.GetSelect(SQL, Values)
        .then((name) => {
          if (name !== false) {
            
            console.log("name"+name[0].username)
            let SQL = "select * From Appointment WHERE user_email4 = ?";
            let Values = [Uemail];

            const db_class = require('./db_class');
            const db = new db_class('test');

            db.GetSelect(SQL, Values)
              .then((result) => {
                if (result !== false) {

                  result.map((row) => {
                    if (row.slot_1 === 'rejected')
                      res.send({ message: 'rejected' });
                    return
                  })



                  const currentDate = new Date();
                  const isoFormattedDate = currentDate.toISOString().split('T')[0]; // Converts to 'YYYY-MM-DD'
                  const request = 'requested';
                  Values = [name[0].username, Uemail, isoFormattedDate, request, Oemail];
                  console.log("here")
                  console.log(name[0].username + Uemail+isoFormattedDate+request+Oemail)
                  SQL = "UPDATE Appointment SET username_4=?, user_email4=?, Date=?, slot_4=? WHERE officer_email = ?"

                  db.Update(SQL, Values)
                    .then((success) => {
                      if (success) {
                        res.send({ message: 'success' });
                     
                      } else {
                        
                        res.send({ message: 'error' });
                      }
                    })
                    .catch((error) => {
                      console.error("Error during connecting server:", error);
                    });


                } else {
                  res.send({ message: 'error' });
                }
              })






              .catch((error) => {
                res.send({ message: 'error' });
              });




          } else {
            res.send({ message: 'error' });
          }
        })






        .catch((error) => {
          res.send({ message: 'error' });
        });
    } else {

      res.send({ message: 'error' });
    }



  }

  else {
    res.send({ message: 'error' });
  }
});


// const currentDate = new Date();
// const isoFormattedDate = currentDate.toISOString().split('T')[0]; // Converts to 'YYYY-MM-DD'
// const request = 'requested';
// Values = [name, Uemail, isoFormattedDate, request, Oemail];
// SQL = "UPDATE Appointment SET username_1=?,user_email1=?,Date=?,slot_1=? WHERE officer_email = ?";
// db.Update(SQL, Values)
//   .then((success) => {
//     if (success) {
//       res.send({ message: 'Sent link successfully' });
//       const text = "প্রিয় গ্রাহক, সময়মতো মিটিংয়ে যোগ দিতে লিঙ্কে প্রবেশ করুন" + " " + meet;
//       Mail.LinkSendMail(text, email);
//     } else {
//       console.log("User not found!!!");
//       res.send({ message: 'User not found!!!' });
//     }
//   })
//   .catch((error) => {
//     console.error("Error during connecting server:", error);
//   });