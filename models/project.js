const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  liveDemo : {
    type : String,
    required : true
  },
  codeRepo : {
    type : String,
    required : true
  },
  image : {
    type : String,
    required : true
  }
});

module.exports = mongoose.model('Project', projectSchema);