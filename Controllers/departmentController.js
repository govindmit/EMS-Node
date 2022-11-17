const departmentModel = require("../models/departmentModel");

const createDepartment = async (req, res) => {
  try {
    var body = req.body;
    const result = new departmentModel(body);
    await result.save().then((response) => {
      res.status(200).send(response);
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createDepartment,
};
