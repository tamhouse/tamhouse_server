const express = require('express');
const upload = require('../../middlewares/storage');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router
  .route('/')
  .post(upload.single('image'), productController.createProduct)
  .get(productController.list)
  .delete(productController.deleteProducts);

router
  .route('/:productId')
  .get(productController.getProduct)
  .post(productController.updateView)
  .patch(upload.single('image'), productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
