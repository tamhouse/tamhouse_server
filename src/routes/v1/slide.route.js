/* eslint-disable prettier/prettier */
const express = require('express');
const upload = require('../../middlewares/storage');
const { Slide } = require('../../models');

const router = express.Router();

router.route('/').get(async (req, res) => {
    const data = await Slide.find().lean();
    res.send(data);
}).post(upload.any('images'),async (req, res) => {
    await Slide.deleteMany({});
    // eslint-disable-next-line no-console
    const images = []
    req.files.forEach((img) => {
        images.push(img.filename)
    })
    Slide.create({ images });
    res.send(images)
});

module.exports = router;
