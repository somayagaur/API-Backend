const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  image: {
  public_id: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}
});

module.exports = mongoose.model('Teacher', teacherSchema);