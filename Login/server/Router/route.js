import { Router } from "express";
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

/** Post Method */
router.route("/register").post(register);
// router.route("/registerMail").post();
router.route("/authenticate").post((req, res) => res.end(""));
router.route("/login").post(verifyUser, login);
/** Get Method */
router.route("/user/:username").get(getUser);
router.route("/generateOTP").get(generateOTP);
router.route("/verifyOTP").get(verifyOTP);
router.route("/createResetSession").get(createResetSession);
/** Put Method */
router.route("/updateuser").put(updateUser);
router.route("/resetPassword").put(resetPassword);
/** Patch Method */
/** delete Method */
export default router;
