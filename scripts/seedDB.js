const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/secondChance",
  {
    useMongoClient: true
  }
);

const alertSeed = [
  {
   description: "Gucci logo stamped bags",
   testResult: "Tested positive for fentayl",
   comments: "Bag linked to multiple overdoes in the area",
   image: "This link",
    date: new Date(Date.now())
  },

  {
    description: "Gucci logo stamped bags",
    testResult: "Tested positive for fentayl",
    comments: "Bag linked to multiple overdoes in the area",
    image: "This link",
     date: new Date(Date.now())
   },
  
];

db.Alert
  .remove({})
  .then(() => db.Alert.collection.insertMany(alertSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
