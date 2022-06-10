const mongoose = require('mongoose');
require('dotenv').config({path: '.env'})
mongoose.createConnection(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
