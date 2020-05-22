const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const UserProfile = require("../../models/UserProfile");

// show - pulling a specific user profile
router.get("/:username", (req, res) => {
    UserProfile.findOne({username: req.params.username})
        .then((profile) => res.json(profile))
        .catch((err) =>
            res
                .status(404)
                .json({noprofilefound: "No user profile found for that username"})
                );
});

// set up new profile via protected route
router.post(
  "/:username",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
      const newProfile = new UserProfile({
          username: req.params.username,
          location: req.body.location,
          favFish: req.body.favFish,
          favSpot: req.body.favSpot,
          gear: req.body.gear,
          tipsTricks: req.body.tipsTricks
      });

      newProfile.save().then((profile) => res.json(profile));
  }
);

// update profile via protected route
router.put('/:username',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        UserProfile.findOne({username: req.params.username}).then(profile => {
            for (let key in req.body) {
                profile[key] = req.body[key];
            }

            profile.save().then(profile => res.json(profile));
        })
        .catch(err => res.status(404).json({noprofilefound: "No profile found for that username"}));
    });

module.exports = router;