const roleModel = require("../models/roleModel");
const createRole = async (req, res) => {
  var body = req.body;
  const roleDetails = new roleModel(body);
  await roleDetails
    .save()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
};

module.exports = {
  createRole,
};
