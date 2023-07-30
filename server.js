const mongoose = require("mongoose")

const app = require('./app')

const {MONGO_URL} = process.env

mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(3000)
    console.log("Database connection successful")
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1);
  })


