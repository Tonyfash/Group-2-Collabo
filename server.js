require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/user') 
const mongoose = require('mongoose');
const PORT = process.env.PORT || 1234;
const db = process.env.DATABASE;


const app = express();
app.use(express.json());
app.use("/api/v1",userRouter);


mongoose.connect(db).then(()=>{
    console.log(`Successfully connected to database`);
    app.listen(PORT,()=>{
    console.log(`Server is runnng on the port: ${PORT}`);
     });
}) .catch((error) => {
  console.log(`cannot connect to database because: ${error.message}`);
})