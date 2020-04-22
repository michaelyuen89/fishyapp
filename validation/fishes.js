const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateFishInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.description = validText(data.description) ? data.description : "";
  data.minLegalSize = validText(data.minLegalSize) ? data.minLegalSize : "";
  data.maxLegalSize = validText(data.maxLegalSize) ? data.maxLegalSize : "";
    data.maxPossession = validText(data.maxPossession) ? data.maxPossession : "";


  if (!Validator.isLength(data.name, { min: 1, max: 200 })) {
    errors.name = "Fish name must be between 1 and 200 characters";
  }

  if (data.minLegalSize && !Validator.isFloat(data.minLegalSize, { min: 0 })) {
    errors.minLegalSize = "Minimum legal size must be a nonnegative number";
  }

  if (data.maxLegalSize && !Validator.isFloat(data.maxLegalSize, { min: 0 })) {
    errors.maxLegalSize = "Maximum legal size must be a nonnegative number";
  }

  if (data.maxPossession && !Validator.isInt(data.maxPossession, { min: 0 })) {
      errors.maxPossession = "Maxumum possession must be a nonnegative integer";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
