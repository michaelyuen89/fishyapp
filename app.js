require("dotenv").config();

const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const fileUploadRoutes = require("./routes/fileUploadRoutes");
const users = require("./routes/api/users");
const locations = require("./routes/api/locations");
const fishes = require("./routes/api/fishes");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("Hello Non-Fishers!!"));

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  console.log("we're in production");
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/fishes", fishes);
app.use("/api/locations", locations);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

