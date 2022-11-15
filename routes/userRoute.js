const express = require("express");
const jwt = require("jsonwebtoken");
const verifytoken = require("../middleware/authjwt")

const userRoute = express.Router();

const userController = require("../Controllers/userController");

userRoute.post("/user/create", userController.createUser);
userRoute.post("/user/login", userController.login);

userRoute.get("/authorizToken",verifytoken.verifyToken, (req, res) => {

  res.status(200).json({message:"Authorization successful! this token use for rest api request"})
  // const username = req.body;
  // const password = req.body;
  // try {
  //   const token = jwt.sign(
  //     { email: username, password: password },
  //     process.env.SECRET_KEY
  //   );
  //   res.status(200).json({
  //     success: "login successfully",
  //     message: "Authorization successful! this token use for rest api request",
  //     token: token,
  //   });
  // } catch (error) {
  //   res.status(400).json("somthing went wrong");
  // }
});

module.exports = userRoute;
