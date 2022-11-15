const express = require("express");
require("dotenv").config();
// const DatabaseConn = require("./db/config");
const mongoose = require("mongoose");
const DatabaseConn = () => {
    mongoose
      .connect(process.env.MONOGODBDEV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => console.log("DB connected !"))
      .catch((error) => console.log("error", error));
  };
DatabaseConn()
const app = express();
app.use(express.json());
const userRoute = require("./routes/userRoute");
app.use("/api", userRoute);

const roleRoute = require("./routes/roleRoute");
app.use("/api", roleRoute);
const departmentRoute = require("./routes/departmentRoute");
app.use("/api", departmentRoute);
const port = process.env.PORT || 3600 ;

app.listen(port, console.log("server is runing "));
