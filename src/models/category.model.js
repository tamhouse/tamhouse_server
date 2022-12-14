const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    child: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
const Category = mongoose.model('category', categorySchema);

module.exports = Category;
