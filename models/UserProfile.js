const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: false,
  },
  favFish: {
    type: String,
    required: false,
  },
  favSpot: {
    type: String,
    required: false,
  },
  gear: {
    type: String,
    required: false,
  },
  tipsTricks: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UserProfile = mongoose.model('UserProfile', UserProfileSchema);
