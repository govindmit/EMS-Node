require("../db/config");
const userModel = require("../models/userModel");
const roleModel = require("../models/roleModel");

const createUser = async (req, res) => {
  const result = await roleModel.findOne({ name: req.body.role });

  try {
    const newuser = new userModel({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      dob: req.body.dob,
      role: result._id,
    });

    const userexist = await userModel.findOne({ email: req.body.email });

    if (userexist) {
      res.status(400).json({ result: "user already exist" });
    } else {
      await newuser.save();
      res.status(200).send({ msg: "sdsf", newuser: newuser });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createUser,
};
