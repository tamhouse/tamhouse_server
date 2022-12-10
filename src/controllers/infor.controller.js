const catchAsync = require('../utils/catchAsync');
const { inforService } = require('../services');

const update = catchAsync(async (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.params.id);
  const infor = await inforService.update(req.params.id, req.body);
  res.send(infor);
});

const get = catchAsync(async (req, res) => {
  const infor = await inforService.get();
  res.send(infor);
});

module.exports = {
  update,
  get
};
