const bodyParser = require('body-parser');
const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer')
const cors = require('cors');
const { log } = require('console');

const app = express();

app.use(cors());
app.use(express.json());
connection = async () => {
  await mongoose.connect('mongodb+srv://root:root@cluster0.rifl9sr.mongodb.net/linkedin?retryWrites=true&w=majority');
  console.log("db connected");
}

connection()



app.listen(3000, () => {
  console.log("serve started");
})

