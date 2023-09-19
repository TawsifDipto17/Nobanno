const express = require('express');
const cors = require('cors');

const Mail= require('./mail')



const app = express();

app.use(express.json());
app.use(cors());
app.listen(3005, () => {
    console.log('Data Server is running on port 3005');
  });
  
app.post('/officer_advice', (req, res) => {
    console.log('I am getting email from local storage here')
    console.log(req.body.LoginEmail)
    console.log('I am getting meet link')
    console.log(req.body.Meet_link)


    let email,meet;
    if(req.body.LoginEmail!='none' && req.body.Meet_link!='none' && req.body.Meet_link!=''){
      email=req.body.LoginEmail;
      meet=req.body.Meet_link;
    
    const SQL = "UPDATE User_Details SET meet_link=? WHERE email = ?"
    const Values = [meet,email];



    const db_class = require('./db_class');
    const db = new db_class('test');


   
  


    
    db.Update(SQL, Values)
        .then(success => {
            if (success) {
               
                res.send({ message: 'Sent link successfully' });
               const text="প্রিয় গ্রাহক, সময়মতো মিটিংয়ে যোগ দিতে লিঙ্কে প্রবেশ করুন" +" "+ meet
                Mail.LinkSendMail(text,email)
                
            } else {
                console.log("User not found!!!");
                res.send({ message: 'User not found!!!' });
            }
        })
        .catch(error => {
            console.error("Error during connecting server:", error);
        });
      }else{
        res.send({ message: 'Error!!!' });

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
              username: row.username,
              email: row.user_email,
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
  'SELECT officer_name, bio, slot_1, slot_2, slot_3, slot_4, ' +
  'TO_BASE64(image) AS image_base64 ' +
  'FROM Officer_Details ' +
  'INNER JOIN Appointment ON Officer_Details.email = Appointment.officer_email';

    db.GetSelect(SQL, Values)
      .then((result) => {
        if (result !== false) {
         
          const getAdviceData = result.map((row) => {
            return {
              officer_name: row.officer_name,
              image: row.image_base64,
              bio:row.bio,
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

