const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Crop Server is running on port 3003')
})




app.post('/crop', (req, res) => {

    const sentCrop = req.body.CropName

    console.log(sentCrop)

  
    const Values = [sentCrop];
    

    const db_class = require('./db_class');
    const db = new db_class('test');
    
    const SQL = "SELECT * FROM cropProduction where name =?";
    
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

app.post("/chad", (req, res) => {
  const sentCrop = req.body.CropName;

  console.log(sentCrop);

  const Values = [sentCrop];

  const db_class = require("./db_class");
  const db = new db_class("test");

  const SQL = "SELECT * FROM cropProduction where name =?";

  db.GetSelect(SQL, Values)
    .then((result) => {
      if (result !== false) {
        // Data retrieval was successful
        console.log("Query Result:", result);
        res.send(result);
      } else {
        // An error occurred
        console.log("Error occurred during data retrieval.");
      }
    })
    .catch((error) => {
      console.error("Error during query:", error);
    });
});


app.post('/updateCropData', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const introduction = req.body.introduction;
    const selectcSpecies = req.body.selectcSpecies;
    const growingMethod = req.body.growingMethod;
    const selectSoil = req.body.selectSoil;
    const growingSeason = req.body.growingSeason;
    const seed = req.body.seed;
    const climate = req.body.climate;
    const fertilizer = req.body.fertilizer;
    const irrigation = req.body.irrigation;
    const care = req.body.care;
    const collect = req.body.collect;
    const storage = req.body.storage;


    console.log(name);
    console.log(introduction);
    console.log(selectcSpecies);
    console.log(growingMethod);
    console.log(selectSoil);
    console.log(growingSeason);
    console.log(seed);
    console.log(climate);
    console.log(fertilizer);
    console.log(irrigation);
    console.log(care);
    console.log(collect);
    console.log(storage);
    
  
    let SQL="insert into crop (name,image) values(?,?)"
    let Values = [name,null];

    

     const db_class = require('./db_class');
    const db = new db_class('test');

    db.Insert(SQL, Values)
        .then(success => {
            if (success) {
                console.log("Successful insert in Crop Name table");
                //res.send({ message: 'Crop added!' });


         let SQL1="insert into cropProduction(name, introduction, selectcSpecies, growingMethod, selectSoil, growingSeason, seed, climate, fertilizer, irrigation, care, collect, storage) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
         let Values1 = [name, introduction, selectcSpecies, growingMethod, selectSoil, growingSeason, seed, climate, fertilizer, irrigation, care, collect, storage]; 
    // const Values = [];

              
        const db1 = new db_class('test');
   db1.Insert(SQL1, Values1)
        .then(success => {
            if (success) {
                console.log("Successful insert in Crop table");
                res.send({ message: 'Crop added!' });
               
            } else {
               
                console.log("Unsuccessful insert in crop table");
            }
        })
        .catch(error => {
            console.error("Error during Crop Insertion :", error);
        });



               
            } else {
                console.log("Unsuccessful insert in crop name table");
            }
        })
        .catch(error => {
            console.error("Error during Crop Name Insertion :", error);
        });

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
