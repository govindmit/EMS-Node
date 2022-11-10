require("../db/config")
const userModel = require("../models/userModel")

const createUser = async (req, res) => {
    try {
      const newuser = new userModel({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        dob: req.body.dob,
        // role: req.body.,
      });
  
      const userexist = await userModel.findOne({ email: req.body.email });
      if (userexist) {
        res.status(400).json({ result: "user already exist" });
      } else {
        await newuser.save();
        res.status(200).json({
          succes: true,
          msg: "user created successfully",
          data: {
        name: newuser.name,
        lastName: newuser.lastName,
        email: newuser.email,
        password: newuser.password,
        phone: newuser.phone,
        dob: newuser.dob,
        role: newuser.role,
          },
        });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

  module.exports = {
    createUser,

  };