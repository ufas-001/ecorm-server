require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://abdul:Kaosarat95@cluster0.cwh7nbp.mongodb.net/";


mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
