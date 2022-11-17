const express = require("express");
require("dotenv").config();
const DatabaseConn = require("./db/config");
const projectRoute = require('./routes/projectsRoute');
DatabaseConn();
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());
const userRoute = require("./routes/userRoute");
app.use("/api", userRoute);
app.use("/api", projectRoute);
const roleRoute = require("./routes/roleRoute");
app.use("/api", roleRoute);
const departmentRoute = require("./routes/departmentRoute");
app.use("/api", departmentRoute);
const port = process.env.PORT || 3600;

app.listen(port, console.log("server is runing "));
