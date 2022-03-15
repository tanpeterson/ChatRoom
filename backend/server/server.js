const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_DB_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "ChatRoom",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const app = express();
const PORT = 5050;

const AuthRoute = require("./routes/auth");
const MessageRoute = require("./routes/message");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/message", MessageRoute);
app.use("/api", AuthRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
