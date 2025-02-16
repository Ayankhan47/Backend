const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
module.exports.registerUserController = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = userModel.create({
    username,
    email,
    password: hashedPassword,
  });
  res.send(user);
};
