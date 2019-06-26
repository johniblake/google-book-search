const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_DEV_URI, {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
