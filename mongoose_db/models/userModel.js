const mongoose = require("mongoose");

// Define fileInfo as a Mongoose sub-schema
const fileInfo = new mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding:String,
  mimetype:String,
  destination:String,
  filename: String,
  path: String,
  size: Number
}, { _id: false }); // _id: false to avoid generating _id for each file object

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: false
  },
  files: {
    type: [fileInfo],
  } // list of file objects
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);