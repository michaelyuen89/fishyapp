const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Location = require('../../models/Location');
const Fish = require('../../models/Fish');
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
router.get('/:id', (req, res) => {
    Location.findById(req.params.id)
        .then(location => res.json(location))
        .catch(err =>
            res.status(404).json({ nolocationfound: 'No location found with that ID'}))
});

// special index - pulling all locations for specific fish
router.get("/fish/:fish_id", (req, res) => {
  Fish.findOne({ _id: req.params.fish_id })
    .then((fish) => {
      Location.find({ _id: { $in: fish.locationIds } })
        .then((locations) => res.json(locations))
        .catch((err) =>
          res.status(404).json({ nolocationsfound: "No locations found" })
        );
    })
    .catch((err) =>
      res.status(404).json({ nofishfound: "No fish found" })
    );
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


// delete location via protected route
router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Location.deleteOne({_id: req.params.id})
            .then(() => res.status(200).json({successfuldelete: "Deleted successfully!"}))
            .catch(err => res.status(404).json({ nolocationfound: 'No location found with that ID' }))
    }
);

// update location via protected route
router.put('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateLocationInput(req.body);

        Location.findOne({ _id: req.params.id }).then(location => {
            // debugger
            for (let key in req.body) {
                // debugger
                if (location[key] === undefined) {
                    return res.status(404).json({ invalidfield: 'Invalid field being updated! '})
                }
                else if (req.body[key] && errors[key]) {
                    // debugger
                    return res.status(404).json(errors[key]);
                } else if (req.body[key]) {
                    if (key === "fishIds") {
                        if (req.body[key] instanceof Array) {
                            location[key] = req.body[key];
                        } else {
                            location[key] = location[key].concat(req.body[key]);
                        }
                    } else {
                        location[key] = req.body[key];
                    }
                }
            }
            // debugger
            location.save().then(location => res.json(location));

        })
        .catch(err => res.status(404).json({ nolocationfound: 'No location found with that ID' }));
    }
);

module.exports = router;

