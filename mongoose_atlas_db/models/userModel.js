const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    default: "2002-08-10",
}
} , {timestamps:true} )

const User = mongoose.model("User", userSchema);

module.exports = User // User is the name of the collection