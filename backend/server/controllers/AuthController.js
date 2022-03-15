const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashPass) {
    if (err) {
      res.json({
        error: err,
      });
    }

    let user = new User({
      username: req.body.username,
      password: hashPass,
    });

    user
      .save()
      .then((user) => {
        res.json({
          message: "User Created",
          user: req.body.username,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
};

const login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          res.json({
            loginStatus: "Login Successful!",
            user: user.username,
          });
        } else {
          res.json({
            loginStatus: "Login failed!",
          });
        }
      });
    } else {
      res.json({
        loginStatus: "No user found!",
      });
    }
  });
};

module.exports = { register, login };
