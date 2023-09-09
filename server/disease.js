const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3004, () => {
    console.log('Disease Server is running on port 3004')
})




app.post('/disease', (req, res) => {

    const sentCrop = req.body.CropName


 

  
    const Values = [sentCrop];
    

    const db_class = require('./db_class');
    const db = new db_class('test');
    
    const SQL = "SELECT name,disease,symptom,cure FROM cropDisease where name=? GROUP BY name,disease,symptom,cure ";
    
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

