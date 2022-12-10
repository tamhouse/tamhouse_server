/* eslint-disable no-console */
const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

const createProduct = async (body) => {
  const product = await Product.create(body);
  return product;
};
const getProduct = async (name) => {
  const product = await Product.findOne({ name }).lean();
  return product;
};
const getProductLimit = async (limit, category) => {
  const products = await Product.find({ category }).limit(limit).lean();
  const count = await Product.countDocuments({ category });
  return { products, count };
};
const getProductLimitByPage = async (limit, skip) => {
  const product = await Product.find().skip(skip).limit(limit).lean();
  return product;
};
const getTopProduct = async () => {
  const product = await Product.find().sort({ views: -1 }).limit(5).lean();
  return product;
};
const updateProduct = async (id, body) => {
  const product = await Product.findById(id).lean();
  Object.assign(product, body);
  return product.save();
};
const updateViews = async (name) => {
  const product = await Product.updateOne(
    {
      name,
    },
    {
      $inc: { views: 1 },
    }
  ).lean();
  return product;
};
const deleteProductById = async (id) => {
  const product = await Product.findById(id).lean();
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  await product.remove();
  return product;
};
const deleteProducts = async (name) => {
  const products = await Product.deleteMany({
    name: {
      $in: name,
    },
  });
  return products;
};
const list = async () => {
  const products = await Product.find().lean();
  if (!products) {
    throw new ApiError(httpStatus.NOT_FOUND, 'products not found');
  }
  return products;
};

const count = async () => {
  const total = await Product.countDocuments();
  return total;
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProductById,
  getProduct,
  list,
  count,
  getTopProduct,
  deleteProducts,
  updateViews,
  getProductLimit,
  getProductLimitByPage,
};
