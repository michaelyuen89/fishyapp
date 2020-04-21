const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Location = require('../../models/Location');
const validateLocationInput = require('../../validation/locations');

// index - pulling all locations
router.get('/', (req, res) => {
    Location.find()
        .sort({ name: 1})
        .then(locations => res.json(locations))
        .catch(err => 
            res.status(404).json({ nolocationsfound: 'No locations found'}));
});

// show - pulling a specific location
router.get('/location/:location_id', (req, res) => {
    Location.find({location: req.params.location_id})
        .then(location => res.json(location))
        .catch(err =>
            res.status(404).json({ nolocationfound: 'No location found with that ID'}))
});

// create location via protected route
router.post('/',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const { errors, isValid } = validateLocationInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newLocation = new Location({
            name: req.body.name,
            description: req.body.description,
            lng: req.body.lng,
            lat: req.body.lat
        })

        newLocation.save().then(location => res.json(location));
    }
);

module.exports = router;

