import express from "express";
const appRoute = express.Router();
import handleSignup from "../controllers/handleSignup.js";
import handleGetBill from "../controllers/handleGetBill.js";
import handleResetPassword from "../controllers/handleResetPassword.js";
appRoute.post("/user/SignUp", handleSignup);
appRoute.post("/user/getBill", handleGetBill);
appRoute.post("/user/resetPassword", handleResetPassword);
export default appRoute;
