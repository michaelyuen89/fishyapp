const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Fish = require("../../models/Fish");
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

// router.get("/:fish_name", (req, res) => {
//   debugger
//   Fish.find({name: req.params.name})
//     .then(fish => res.json(fish))
//     .catch(err =>
//       res.status(404).json({ nofishfound: "No fish found with that ID" })
//     );
// });

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

    Fish.findOne({ _id: req.params.id })
      .then((fish) => {
        for (let key in req.body) {
          if (fish[key] === undefined) {
            return res
              .status(404)
              .json({ invalidfield: "Invalid field being updated! " });
          } else if (req.body[key] && errors[key]) {
            return res.status(404).json(errors[key]);
          } else if (req.body[key]) {
            fish[key] = req.body[key];
          }
        }
        fish.save().then((fish) => res.json(fish));
      })
      .catch((err) =>
        res
          .status(404)
          .json({ nofishfound: "No fish found with that ID" })
      );
  }
);

module.exports = router;