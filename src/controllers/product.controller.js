const httpStatus = require('http-status');
const fs = require('fs');
const path = require('path');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const createProduct = catchAsync(async (req, res) => {
  const img = req.file.filename;
  req.body.img = img;
  // eslint-disable-next-line no-console
  console.log(req.body);
  await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send();
});

const getProduct = catchAsync(async (req, res) => {
  const product = await productService.getProduct(req.params.productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  res.send(product);
});

const updateProduct = catchAsync(async (req, res) => {
  const product = await productService.updateProduct(req.params.productId, req.body);
  res.send(product);
});

const deleteProduct = catchAsync(async (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  // await productService.deleteProductById(req.params.productId);
  res.status(httpStatus.NO_CONTENT).send();
});

const deleteProducts = catchAsync(async (req, res) => {
  const { name } = req.query;
  const namearr = name.split(',');
  const products = await productService.deleteProducts(namearr);
  // eslint-disable-next-line no-console
  if (products) {
    products.forEach((e) => {
      // eslint-disable-next-line no-console
      console.log(path.join(__dirname, '../../public/images/') + e.img);
      fs.unlinkSync(path.join(__dirname, '../../public/images/') + e.img);
    });
  }
  res.status(httpStatus.NO_CONTENT).send();
});

const updateView = catchAsync(async (req, res) => {
  const products = await productService.updateViews(req.params.productId);
  res.send(products);
});

const list = catchAsync(async (req, res) => {
  let products;
  const { top, limit, category } = req.query;
  if (top === 'true') {
    products = await productService.getTopProduct();
  } else if (limit) {
    products = await productService.getProductLimit(parseInt(limit, 10), category);
  } else {
    products = await productService.list();
  }
  res.send(products);
});

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  deleteProducts,
  list,
  updateView,
};
