const express = require("express");
const cors = require("cors");
// const { connectMongoDB } = require("./config/db.config");
const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://rameshsw17:FyVI0RAnFGGZgOOx@cluster0.9ikwlk3.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "split-us";

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => console.log(err));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
