const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/connect');
const userRoute = require('./routes/userRoute');

const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors());
app.use(express.json());
app.use( '/api/user',userRoute )

app.listen(PORT , ()=>{
    try {
        console.log(`Server is running on port ${PORT}`);
        connectDB()
        
    } catch (error) {
        
    }
})
