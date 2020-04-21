const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    lng: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    lat: {
        type: Number,
        required: true,
        min: -90,
        max: 90
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Location = mongoose.model('Location', LocationSchema);