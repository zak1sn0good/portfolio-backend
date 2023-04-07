const Project = require('../models/project');

const getAllProjects = (req, res) => {
  
  Project.find()
  .then((docs) => {
    res.status(200).json({
      projects : docs,
      count : docs.length
    });
  })
  .catch((err) => {
    res.status(500).json({
      message : "internal server error!"
    });
  });

};

module.exports = {
  getAllProjects
};

