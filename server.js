require('dotenv').config();

const express = require('express');
const PORT = 8080;
const app = express();
const mongoose = require('mongoose');
const db = process.env.DATABASE;



mongoose.connect(db).then(()=> {
    console.log('The database connection has been established successfully');

    app.listen(PORT, ()=>{
    console.log(`Server is running on the PORT: ${PORT}`);
})
}).catch((error) => {
    console.log('Error connecting to the database', error.message);
    
})
