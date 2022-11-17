const express = require('express');
const verifytoken = require("../middleware/authjwt");
const router = express.Router();

const projectController = require('../Controllers/projectController');

router.post('/project/create', verifytoken.verifyToken, projectController.createProjects);

module.exports = router;

