const mongoose = require("mongoose");

const DatabaseConn = () => {
  mongoose
    .connect(process.env.MONOGO_PROD_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => console.log("DB connected !"))
    .catch((error) => console.log("error", error));
};
module.exports = DatabaseConn;
