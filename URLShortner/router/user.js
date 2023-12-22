const express = require("express");
const router = express.Router();
const { handleUserSignup, handleLogin } = require("../controller/user");
router.post("/", handleUserSignup);
router.post("/login", handleLogin);
module.exports = router;
