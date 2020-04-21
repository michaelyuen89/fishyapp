const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLocationInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
    data.description = validText(data.description) ? data.description : "";

    if (!Validator.isLength(data.name, { min: 1, max: 200})) {
        errors.name = 'Location name must be between 1 and 200 characters';
    }

    if (!Validator.isFloat(data.lng, {min: -180, max: 180})) {
        errors.lng = 'Longitude must be a number between -180 and 180';
    }

    if (!Validator.isFloat(data.lat, {min: -90, max: 90})) {
        errors.lat = 'Latittude must be a number between -90 and 90';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}