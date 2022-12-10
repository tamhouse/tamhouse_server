const express = require('express');
const inforController = require('../../controllers/infor.controller');

const router = express.Router();

router.route('/').get(inforController.get);
router.route('/:id').post(inforController.update);

module.exports = router;
