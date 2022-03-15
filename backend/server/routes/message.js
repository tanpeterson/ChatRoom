const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/MessageController");

router.post("/send-message", MessageController.addMessage);
router.get("/get-message", MessageController.getMessage);

module.exports = router;
