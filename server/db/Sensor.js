const mongoose = require("mongoose");
const { MONGODB_URL } = require("../constant/envVariable");
mongoose.connect(MONGODB_URL + "/agroTech");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  referenceValue: {
    type: String,
    required: true,
  },
  compareDetail: {
    type: String,
    required: true,
  },
});

const Sensor = mongoose.model("Sensor", Schema);

module.exports = Sensor;
