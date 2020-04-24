const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  minLegalSize: {
    type: Number,
    required: false,
    min: 0,
  },
  maxLegalSize: {
    type: Number,
    required: false,
    min: 0,
  },
  maxPossession: {
    type: Number,
    required: false,
    min: 0,
  },
  locationIds: {
      type: Array,
      default: []
  },
  // locationIds: {
  //   type: [Schema.Types.ObjectId],
  //   ref: "locations"
  // },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Fish = mongoose.model('Fish', FishSchema);

