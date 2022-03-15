const Message = require("../models/Message");

const addMessage = (req, res, next) => {
  let message = new Message({
    message: req.body.message,
    user: req.body.user,
    profilePictureURL: `https://avatars.dicebear.com/api/bottts/${req.body.user}.svg`,
  });

  message
    .save()
    .then((message) => {
      res.json({
        message: req.body.message,
        user: req.body.user,
        profilePictureURL: `https://avatars.dicebear.com/api/bottts/${req.body.user}.svg`,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

const getMessage = (req, res, next) => {
  Message.find({})
    .sort({ _id: 1 })
    .exec(function (err, post) {
      res.json({
        message: post,
      });
    });
};

module.exports = { addMessage, getMessage };
