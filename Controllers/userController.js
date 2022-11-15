
const bcrypt = require("bcryptjs");
const genrateToken = require("../middleware/authjwt");
const userModel = require("../models/userModel");
const roleModel = require("../models/roleModel");
const departmentModel = require("../models/departmentModel");

const createUser = async (req, res) => {
  const result = await roleModel.findOne({ name: req.body.role });
  const response = await departmentModel.findOne({
    departmentName: req.body.department,
  });
  try {
    const newuser = new userModel({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      dob: req.body.dob,
      role: result._id,
      department: response._id,
    });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newuser.password, salt);
    newuser.password = hash;

    const userexist = await userModel.findOne({ email: req.body.email });

    if (userexist) {
      res.status(400).json({ result: "user already exist" });
    } else {
      await newuser.save();
      res
        .status(200)
        .send({ msg: "user created successfully", newuser: newuser });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    if (req.body.password && req.body.email) {
      const user = await userModel.findOne({ email: req.body.email });
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (!result) {
            return res.status(200).json({
              message: "password is incorrect",
            });
          }
          if (result) {
            res.status(200).json({
              succes: true,
              msg: "user login successfuly",
              data: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                password: user.password,
                dob: user.dob,
                role: user.role,
                department: user.department,
                token: genrateToken.token(user._id),
              },
            });
          }
        });
      } else {
        res.send({ message: "user not found" });
      }
    } else {
      res.send({ message: "please provide a email and password" });
    }
  } catch (error) {
    res.status(400).send({
      message: "Oops! something went wrong login ",
      subError: error.message,
    });
  }
};

module.exports = {
  createUser,
  login,
};
