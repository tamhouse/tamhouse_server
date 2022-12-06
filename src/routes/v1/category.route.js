const express = require('express');

const router = express.Router();
const categoryController = require('../../controllers/category.controller');

router.route('/').get(categoryController.list).post(categoryController.add).delete(categoryController.del);
router.route('/:category').get(categoryController.listProduct);

module.exports = router;
