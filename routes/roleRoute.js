const express = require("express");

const roleRoute = express.Router();

const roleController = require("../controllers/roleController");

roleRoute.post("/role/create", roleController.createRole);

module.exports = roleRoute;