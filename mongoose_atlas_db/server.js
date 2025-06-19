const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = require('./config/db')
const router = require('./routes/userRoute')

const app = express();

app.use(express.json());

app.use('/api/users',router)

app.listen( process.env.PORT , async ()=>{
    try {
        console.log(`server started! on port:${process.env.PORT}`);
        connectDB()
        
    } catch (error) {
        console.log("Server not started!");
        
    }
})