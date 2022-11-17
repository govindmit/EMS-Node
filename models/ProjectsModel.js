const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema(
  {
    projectTitle: {
      type: String,
      required: [true, "Please enter a project title"],
    },
    date: { type: String, required: true },
    clientName: {
      type: String,
      required: [true, "please enter a client name"],
    },
    emp_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "please provide valid employee id"],
      },
    ],
    technologies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Technologies",
        required: [true, "please enter a technologies"],
      },
    ],
    employer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "please enter a employer id"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Projects", ProjectsSchema);
