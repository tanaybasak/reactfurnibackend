const mongoose = require('mongoose');

const db_connection = mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:
${process.env.MONGO_PASSWORD}@cluster0.oqlh2up.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
 

  module.exports = db_connection;