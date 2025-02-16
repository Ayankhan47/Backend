const express = require("express");
const UserRoutes = require("./routes/user.route");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", UserRoutes);
module.exports = app;
