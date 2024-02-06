const mongoose = require("mongoose");
const { MONGODB_URL } = require("../constant/envVariable");
mongoose.connect(MONGODB_URL + "/agroTech");

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: null,
  },
  IsValid: {
    type: Boolean,
    default: false,
  },
});

const Admin = mongoose.model("Admin", Schema);

module.exports = Admin;
