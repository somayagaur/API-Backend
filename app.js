const express = require('express')
const app = express()
const fileUpload = require('express-fileupload');  
const dotenv = require('dotenv');
dotenv.config('dotenv');
const PORT = process.env.PORT || 8000;
const web = require('./Routes/web'); 
const connectDB=require('./DB/connectDB');

const cookiesParser = require('cookie-parser')
app.use(cookiesParser())


connectDB(); // Connect to MongoDB
app.use(fileUpload({ useTempFiles: true }));
app.use(express.json());











app.use("/api",web) //Localhost:8000/api

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
