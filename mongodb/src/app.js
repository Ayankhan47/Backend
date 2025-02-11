const express = require("express");
const app = express();
const userModel = require("./models/user.model");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is working properly");
});
app.post("/create", async (req, res) => {
  const { email, username, password } = req.body;
  const user = await userModel.create({
    email: email,
    username: username,
    password: password,
  });
  res.send(user);
});
app.get("/get-file", async (req, res) => {
  const users = await userModel.findOne({
    username: "Ayanspamz77"
  });
  res.send(users);
});
module.exports = app;
