const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await User.findOne({
      email: email,
    });
    if (user) {
      return res.status(400).send({
        success: false,
        message: "User already exists with this email",
      });
    }

    await User.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 8),
    });

    res
      .status(200)
      .send({ success: true, message: "User registered successfully!" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
