const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    descript: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    time: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('product', productSchema);

module.exports = Product;
