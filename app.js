require("dotenv").config();

const express = require("express");
const app = express();
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

app.get("/", (req, res) => res.send("Hello Non-Fishers!!"));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/locations", locations);
app.use("/api/fishes", fishes);
app.use("/api/document", fileUploadRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
