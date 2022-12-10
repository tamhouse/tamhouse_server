const { Infor } = require('../models');

const get = async () => {
  const data = await Infor.find().lean();
  return data;
};
const update = async (id, data) => {
  const infor = await Infor.findById(id);
  Object.assign(infor, data);
  return infor.save();
};

module.exports = {
  update,
  get,
};
