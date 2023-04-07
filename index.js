const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

const projectsRoutes = require("./routes/projects");
const contactsRoutes = require("./routes/contacts");

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URI, (err) => {
  if(!err){
    console.log("connected to the database...");
  }
  else{
    console.log("unable to connect to database!...");
  }
});

app.use(cors());
app.use(express.json());

app.use('/projects', projectsRoutes);
app.use('/contact', contactsRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message : "Not found!"
  });
});

app.listen(process.env.PORT || 8000, 'localhost', () => {
  console.log('app running on http://localhost:8000 ...');
});