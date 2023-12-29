const express = require("express");
const authRouter = express.Router();
const jwtAuth = require("../middleware/jwtAuth");
const {
  handleUserInfo,
  handlesignIn,
  handlesignUp,
  handleLogOut,
} = require("../controllers/authController");
authRouter.post("/signIn", handlesignIn);
authRouter.post("/signUp", handlesignUp);
authRouter.get("/userInfo", jwtAuth, handleUserInfo);
authRouter.get("/logout", jwtAuth, handleLogOut);
module.exports = { authRouter };
