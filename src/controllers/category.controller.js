const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const list = catchAsync(async (req, res) => {
  const categories = await categoryService.list();
  res.send(categories);
});
const listProduct = catchAsync(async (req, res) => {
  const product = await categoryService.listProduct(req.params.category);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  res.send(product);
});
const add = catchAsync(async (req, res) => {
  const { parent } = req.body;
  // eslint-disable-next-line no-console
  console.log(req.body);
  if (parent && parent !== '0') {
    const category = await categoryService.findCategory(parent);
    if (category || category.length === 0) {
      const categories = await categoryService.addChild(req.body);
      res.status(httpStatus.CREATED).send(categories);
      return;
    }
  }
  const categories = await categoryService.add(req.body);
  res.status(httpStatus.CREATED).send(categories);
});
const del = catchAsync(async (req, res) => {
  const { parent, name } = req.query;
  // eslint-disable-next-line no-console
  console.log(req.query);
  if (parent) {
    const categories = await categoryService.deleteChildCategory(name, parent);
    res.status(204).send(categories);
    return;
  }
  const categories = await categoryService.deleteCategory(name);
  res.status(204).send(categories);
});

module.exports = {
  list,
  listProduct,
  add,
  del,
};
