const mongoose = require('mongoose');

// const LocalDB = 'mongodb://localhost:27017/api_backend'; // Replace with your local MongoDB URI

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_live_url)
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    
  }
}

module.exports = connectDB;