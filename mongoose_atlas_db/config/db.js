const mongoose = require("mongoose");

const connectDB = async () => {
  try 
  {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: http://${conn.connection.host}:${process.env.PORT}`);
  } 
  catch (error) 
  {
    console.log("Database is not connected!"+error);
  }
}

module.exports = connectDB;