import { Router } from "express";
import Auth, { localVariables } from "../middleware/verifyUser.js";
const router = Router();
/** Import all the controllers */
import {
  register,
  login,
  getUser,
  updateUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
  verifyUser,
} from "../controller/appcontroller.js";
import { registerMail } from "../controller/mailer.js";

/** Post Method */
router.route("/register").post(register);
router.route("/registerMail").post(registerMail);
router.route("/authenticate").post(verifyUser, (req, res) => res.end());
router.route("/login").post(login);
/** Get Method */
router.route("/user/:username").get(getUser);
router.route("/generateOTP").get(verifyUser, localVariables, generateOTP);
router.route("/verifyOTP").get(verifyUser, verifyOTP);
router.route("/createResetSession").get(createResetSession);
/** Put Method */
router.route("/updateuser").put(Auth, updateUser);
router.route("/resetPassword").put(verifyUser, resetPassword);
/** Patch Method */
/** delete Method */
export default router;
