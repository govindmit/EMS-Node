const express = require("express");

const departmentRoute = express.Router();
const departmentControllers = require("../controllers/departmentController");
departmentRoute.post(
  "/department/create",
  departmentControllers.createDepartment
);
module.exports = departmentRoute;
