const express = require("express");
const jwt = require("jsonwebtoken");
const verifytoken = require("../middleware/authjwt");

const userRoute = express.Router();

const userController = require("../Controllers/userController");

userRoute.post("/user/create", userController.createUser);
userRoute.post("/user/login", userController.login);
userRoute.put(
  "/user/updateProfile/:id",
  verifytoken.verifyToken,
  userController.updateProfile
);

userRoute.post("/verifyToken", verifytoken.verifyToken, (req, res) => {
  res.status(200).json({
    message: "Authorization successful! this token use for rest api request",
  });
});

module.exports = userRoute;
