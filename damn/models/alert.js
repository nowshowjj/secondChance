const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlertSchema= new Schema({
  
  description:{
    type:String,
    required:true
  },

  testResult:{
    type: String,
    required: true
  },

  comments:{
    type:String,
    required: false
  },

  image:{
    type: String,
    required: false
  },

  date:{
    type:Date,
    default:Date.now
  }
});

const Alert = mongoose.model("Alert", AlertSchema);

module.exports = Alert;
