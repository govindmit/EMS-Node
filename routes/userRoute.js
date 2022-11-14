const express = require("express");

const userRoute = express.Router();

const userController = require("../controllers/userController");

userRoute.post("/user/create", userController.createUser);
userRoute.post("/user/login", userController.login);

module.exports = userRoute;
