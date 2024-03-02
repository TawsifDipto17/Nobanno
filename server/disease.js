const express = require('express')
const cors = require('cors')
const multer = require('multer'); 
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage },{
    limits: { fileSize: 10 * 1024 * 1024 }, // Set the limit to 10MB or adjust to your requirements
  });


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3004, () => {
    console.log('Disease Server is running on port 3004')
})


app.get('/diseaseData', (req, res) => {

  const Values = [];

  const db_class = require('./db_class');
  const db = new db_class('test');
  
  const SQL = 'SELECT distinct name, TO_BASE64(image) AS image_base64 FROM cropdisease';
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





app.post('/disease', (req, res) => {

    const sentCrop = req.body.CropName


 

  
    const Values = [sentCrop];
    

    const db_class = require('./db_class');
    const db = new db_class('test');
    
    const SQL = "SELECT name,TO_BASE64(image) AS image,disease,symptom,cure FROM cropDisease where name=? GROUP BY name,image,disease,symptom,cure ";
    
    db.GetSelect(SQL,Values)
      .then(result => {
        if (result !== false) {
          // Data retrieval was successful
          console.log('Query Result:', result);
          res.send(result)
        } else {
          // An error occurred
          console.log('Error occurred during data retrieval.');
        }
      })
      .catch(error => {
        console.error('Error during query:', error);
      });
    
})




app.post("/updateDisease",upload.fields([{ name: 'image', maxCount: 1 } ]), (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const sentImage = req.files['image'] ? req.files['image'][0] : null;
  const disease = req.body.disease;
  const symptom = req.body.symptom;
  const cure = req.body.cure;

  console.log(name);
  console.log(disease);
  console.log(symptom);
  console.log(cure);

  // let SQL = "insert into crop (name,image) values(?,?)";
  // let Values = [name, null];

  const db_class = require("./db_class");
  const db = new db_class("test");

  // db.Insert(SQL, Values)
  //   .then((success) => {
  //     if (success) {
  //       console.log("Successful insert in Crop Name table");
  //       //res.send({ message: 'Crop added!' });

        let SQL1 =
          "insert into cropDisease (name,image, disease, symptom, cure) VALUES(?,?, ?, ?, ?)";
        let Values1 = [
          name,
          sentImage.buffer,
          disease,
          symptom,
          cure,
        ];
        // const Values = [];

        const db1 = new db_class("test");
        db1
          .Insert(SQL1, Values1)
          .then((success) => {
            if (success) {
              console.log("Successful insert in Crop Disease table");
              res.send({ message: "Crop added!" });
            } else {
              console.log("Unsuccessful insert in crop disease table");
            }
          })
          .catch((error) => {
            console.error("Error during Crop Insertion :", error);
          });
    //   } else {
    //     console.log("Unsuccessful insert in crop disease table");
    //   }
    // })
    // .catch((error) => {
    //   console.error("Error during Crop Name Insertion :", error);
    // });

  // const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0] : null;

  // console.log(sentEmail);

  //  SQL="INSERT INTO Appointment (Date, officer_email,officer_name) VALUES (?, ? , ?)"

  // if (sentUserName) {
  //   SQL += " username = ?,";
  //   Values.push(sentUserName);
  // }

  // if (sentContact) {
  //   SQL += " contact = ?,";
  //   Values.push(sentContact);
  // }

  // if (profilePicture) {
  //   SQL += " Image = ?,";
  //   Values.push(profilePicture.buffer);
  // }

  // SQL = SQL.slice(0, -1) + " WHERE email = ?";
  // Values.push(sentEmail);

  // // const SQL = "UPDATE user_details SET username = ?, contact = ?, Image = ? WHERE email = ?";
  // // let Values = [sentUserName, sentContact, profilePicture.buffer, sentEmail];
});







app.post('/yolo', (req, res) => {

  const sentYolo = req.body.yolo



 console.log(sentYolo)

  const Values = [sentYolo];
  

  const db_class = require('./db_class');
  const db = new db_class('test');
  
  const SQL = "SELECT disease,symptom,cure FROM cropDisease where name='আলু' and disease=? GROUP BY disease,symptom,cure ";
  
  db.GetSelect(SQL,Values)
    .then(result => {
      if (result !== false) {
        // Data retrieval was successful
        console.log('Query Result:', result);
        res.send(result)
      } else {
        // An error occurred
        console.log('Error occurred during data retrieval.');
      }
    })
    .catch(error => {
      console.error('Error during query:', error);
    });
  
})
