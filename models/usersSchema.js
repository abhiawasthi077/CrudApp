const mongoose = require("mongoose"); // Erase if already required
const validator = require("validator");
// Declare the Schema of the Mongo model
var usersSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    unique: true,
  },
  lname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("not valid email");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  gender: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  datecreated: Date,
  dateupdated: Date,
});

//Export the model
module.exports = mongoose.model("users", usersSchema);
