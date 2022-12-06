const { Category } = require('../models');
const { Product } = require('../models');

const listProduct = async (category) => {
  const data = await Product.find({ category }).lean();
  return data;
};
const list = async () => {
  const data = await Category.find().lean();
  return data;
};
const add = async (obj) => {
  const data = await Category.create(obj);
  return data;
};
const addChild = async (obj) => {
  const data = await Category.updateOne({ name: obj.parent }, { $push: { child: { name: obj.name } } });
  return data;
};
const findCategory = async (name) => {
  const data = await Category.find({ name });
  return data;
};
const deleteCategory = async (name) => {
  const data = await Category.deleteOne({ name });
  return data;
};
const deleteChildCategory = async (name, parent) => {
  const data = await Category.updateOne({ name: parent }, { $pull: { child: { name } } });
  return data;
};
module.exports = {
  list,
  listProduct,
  add,
  addChild,
  findCategory,
  deleteCategory,
  deleteChildCategory,
};
