const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Fish = require("../../models/Fish");
const Location = require("../../models/Location");
const validateFishInput = require("../../validation/fishes");

// index - pulling all fishes
router.get("/", (req, res) => {
  Fish.find()
    .sort({ name: 1 })
    .then((fishes) => res.json(fishes))
    .catch((err) =>
      res.status(404).json({ nofishesfound: "No fishes found" })
    );
});

// show - pulling a specific fish
router.get("/:id", (req, res) => {
  Fish.findById(req.params.id)
    .then((fish) => res.json(fish))
    .catch((err) =>
      res
        .status(404)
        .json({ nofishfound: "No fish found with that ID" })
    );
});

// special index - pulling all fish for specific location
router.get("/location/:location_id", (req, res) => {
  Location.findOne({_id: req.params.location_id})
    .then((location) => {
      Fish.find({ _id: { $in: location.fishIds } })
        .then((fishes) => res.json(fishes))
        .catch((err) =>
          res.status(404).json({ nofishesfound: "No fishes found" })
        );
    })
    .catch((err) =>
      res.status(404).json({ nolocationfound: "No location found" })
    );
});

// create fish via protected route
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFishInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newFish = new Fish({
      name: req.body.name,
      description: req.body.description,
      minLegalSize: req.body.minLegalSize,
      maxLegalSize: req.body.maxLegalSize,
      maxPossession: req.body.maxPossession
    });

    newFish.save().then((fish) => res.json(fish));
  }
);

// delete fish via protected route
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Fish.deleteOne({ _id: req.params.id })
      .then(() =>
        res.status(200).json({ successfuldelete: "Deleted successfully!" })
      )
      .catch((err) =>
        res
          .status(404)
          .json({ nofishfound: "No fish found with that ID" })
      );
  }
);

// update fish via protected route
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFishInput(req.body);
    debugger
    Fish.findOne({ _id: req.params.id })
      .then((fish) => {
        for (let key in req.body) {
          if (fish[key] === undefined) {
            debugger
            return res
              .status(404)
              .json({ invalidfield: "Invalid field being updated! " });
          } else if (req.body[key] && errors[key]) {
            return res.status(404).json(errors[key]);
          } else if (req.body[key]) {
            fish[key] = req.body[key];
            // debugger
            // if (key === "locationIds") {
            //   if (req.body[key] instanceof Array) {
            //     fish[key] = req.body[key];
            //     fish.save().then((fish) => res.json(fish));
            //   }
            //   else {
            //     Location.findOne({ _id: req.body[key] })
            //       .then((location) => {
            //         fish[key] = fish[key].concat(req.body[key]);
            //         location.fishIds = location.fishIds.concat(req.params.id);
            //         location.save().then((location) => fish.save()).then(fish => res.json(fish));
            //       })
            //       .catch((err) => res.status(404).json({ nofishfound: "No location found with that ID" }));
            //   }
            // }
            // else {
            //   fish[key] = req.body[key];
            //   fish.save().then((fish) => res.json(fish));
            // }
          }
        }
        fish.save().then(fish => res.json(fish));
      })
      .catch((err) =>
        res
          .status(404)
          .json({ nofishfound: "No fish found with that ID" })
      );
  }
);

module.exports = router;
