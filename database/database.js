const mongoose = require('mongoose');
const db= process.env.DATABASE_URI;

mongoose.connect(db).then(() =>{

    console.log('MongoDB connected successfully');  
})
.catch(error => console.log('MongoDB connection error:', error.message));
