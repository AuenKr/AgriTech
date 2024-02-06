const mongoose = require("mongoose");
const { MONGODB_URL } = require("../constant/envVariable");
mongoose.connect(MONGODB_URL + "/agroTech");

const Schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sensors: [
    {
      currValue: {
        type: String,
        require: true,
      },
      sensorId: {
        type: mongoose.Schema.ObjectId,
        ref: "SensorData",
      },
    },
  ],
});

const UserSensor = mongoose.model("UserSensor", Schema);

module.exports = UserSensor;
