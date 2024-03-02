const express = require("express");
const cors = require("cors");
const multer = require('multer'); 
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage },{
    limits: { fileSize: 10 * 1024 * 1024 }, // Set the limit to 10MB or adjust to your requirements
  });

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Crop Server is running on port 3003");
});

app.post("/crop", (req, res) => {
  const sentCrop = req.body.CropName;

  console.log(sentCrop);

  const Values = [sentCrop];

  const db_class = require("./db_class");
  const db = new db_class("test");

  const SQL = "SELECT name,TO_BASE64(image) AS image,introduction,	selectcSpecies,growingMethod,selectSoil,growingSeason,seed,climate,fertilizer,irrigation,care,collect,storage FROM cropProduction where name =?";

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


app.post("/newchad", (req, res) => {
  const sentCrop = req.body.CropName;

  console.log(sentCrop);

  const Values = [sentCrop];

  const db_class = require("./db_class");
  const db = new db_class("test");

  const SQL = "SELECT name,TO_BASE64(image) AS image,introduction,	selectcSpecies,growingMethod,selectSoil,growingSeason,seed,climate,fertilizer,irrigation,care,collect,storage FROM rooftopcropproduction where name =?";

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


app.post("/updateCropData",upload.fields([{ name: 'image', maxCount: 1 } ]), (req, res) => {
  
  console.log(req.body);

  const name = req.body.name;
  const sentImage = req.files['image'] ? req.files['image'][0] : null;
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

  const db_class = require("./db_class");
  const db = new db_class("test");

  let SQL =
    "insert into cropProduction(name,image,introduction, selectcSpecies, growingMethod, selectSoil, growingSeason, seed, climate, fertilizer, irrigation, care, collect, storage) VALUES(?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  let Values = [
    name,
    sentImage.buffer,
    introduction,
    selectcSpecies,
    growingMethod,
    selectSoil,
    growingSeason,
    seed,
    climate,
    fertilizer,
    irrigation,
    care,
    collect,
    storage,
  ];
  

  db
    .Insert(SQL, Values)
    .then((success) => {
      if (success) {
        console.log("Successful insert in Crop table");
        res.send({ message: "Crop added!" });
      } else {
        console.log("Unsuccessful insert in crop table");
      }
    })
    .catch((error) => {
      console.error("Error during Crop Insertion :", error);
    });
});


app.post("/updateRoofCropData",upload.fields([{ name: 'image', maxCount: 1 } ]), (req, res) => {
  console.log("inside")
  console.log(req.body);

  const name = req.body.name;
  const sentImage = req.files['image'] ? req.files['image'][0] : null;
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

  const db_class = require("./db_class");
  const db = new db_class("test");

  let SQL =
    "insert into rooftopcropproduction(name,image,introduction, selectcSpecies, growingMethod, selectSoil, growingSeason, seed, climate, fertilizer, irrigation, care, collect, storage) VALUES(?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  let Values = [
    name,
    sentImage.buffer,
    introduction,
    selectcSpecies,
    growingMethod,
    selectSoil,
    growingSeason,
    seed,
    climate,
    fertilizer,
    irrigation,
    care,
    collect,
    storage,
  ];
  

  db
    .Insert(SQL, Values)
    .then((success) => {
      if (success) {
        console.log("Successful insert in RoofCrop table");
        res.send({ message: "Crop added!" });
      } else {
        console.log("Unsuccessful insert in roofcrop table");
      }
    })
    .catch((error) => {
      console.error("Error during Crop Insertion :", error);
    });
});