const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "dvoe9fsgq",
  api_key: "711182757388533",
  api_secret: "yjwHAYmL3-12r_0A01nimT8854w"
});

module.exports = { cloudinary };