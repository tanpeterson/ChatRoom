const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    message: String,
    user: String,
    profilePictureURL: String,
  },
  { timestamp: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
