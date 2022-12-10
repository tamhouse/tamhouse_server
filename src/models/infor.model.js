const mongoose = require('mongoose');

const inforSchema = mongoose.Schema(
  {
    phone: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      require: true,
    },
    zalo: {
      type: String,
      require: true,
    },
    youtube: {
      type: String,
      require: true,
    },
    facebook: {
      type: String,
      default: 0,
    },
    address: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Infor = mongoose.model('infor', inforSchema);

module.exports = Infor;
