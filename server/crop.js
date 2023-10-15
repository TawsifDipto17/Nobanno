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

