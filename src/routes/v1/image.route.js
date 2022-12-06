/* eslint-disable prettier/prettier */
const express = require('express');
const upload = require('../../middlewares/storage');

const router = express.Router();

router.route('/').post(upload.single('uploadImg'), (req, res) => {
    res.send(req.file.filename)
});

module.exports = router;
