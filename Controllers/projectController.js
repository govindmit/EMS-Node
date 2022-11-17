const Project = require('../models/ProjectsModel');

const createProjects = async (req, res) => {

    const newProject = new Project(req.body);

    const projectsExists = await Project.findOne({ projectTitle : req.body.projectTitle});
    try {
        if(projectsExists){
            res.status(400).json({ result: "project already exists" });
        }
        const savedProjects = await newProject.save();
        res.status(201).json(savedProjects);
    } catch (err) {
        res.status(500).json(err.errors);
    }
}

module.exports = {
    createProjects
}