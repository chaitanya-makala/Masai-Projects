const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
