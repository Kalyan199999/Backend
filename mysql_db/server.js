const express = require('express');
require('dotenv').config();
const cors = require('cors');

// custom packages
const db = require('./config/db')
const router = require('./routes/userRoute')

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.use('/api/user' , router)

app.listen( PORT , ()=>{
    try {
        console.log(`Server is running on port ${PORT}`);
        
    } catch (error) {
        console.log("Server is not running");
        
    }
} )