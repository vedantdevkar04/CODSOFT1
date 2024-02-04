 

const mongoose = require('mongoose');

function connectDB() {
  const uri = 'mongodb+srv://vedantdevkar:alliya123@cluster0.sfxspjt.mongodb.net/?retryWrites=true&w=majority';

  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
}

module.exports = connectDB;

