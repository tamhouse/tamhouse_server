const express = require('express');
const productRoute = require('./product.route');
const categoryRoute = require('./category.route');
const imageRoute = require('./image.route');
const inforRoute = require('./infor.route');
const slideRoute = require('./slide.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/categories',
    route: categoryRoute,
  },
  {
    path: '/images',
    route: imageRoute,
  },
  {
    path: '/infor',
    route: inforRoute,
  },
  {
    path: '/slide',
    route: slideRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
