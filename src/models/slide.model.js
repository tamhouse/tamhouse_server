const mongoose = require('mongoose');

const slideSchema = mongoose.Schema(
  {
    images: {
      type: Array,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Infor = mongoose.model('slide', slideSchema);

module.exports = Infor;
