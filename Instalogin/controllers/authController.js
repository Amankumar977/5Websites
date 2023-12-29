const user = require("../models/userModel");
const bcrypt = require("bcrypt");
let handlesignIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ msg: "Please provide all the details" });
  }
  try {
    const userData = await user.findOne({ email }).select("+password");
    if (!userData || !(await bcrypt.compare(password, userData.password))) {
      return res.status(401).json({ msg: "Invalid Credentails" });
    }
    const token = userData.jwtToken();
    userData.password = undefined;
    console.log(token);
    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };
    res.cookie("Token", token, cookieOption);
    res.status(200).json({ msg: "User Logged In Succesful" });
  } catch (error) {
    res.status(400).json({ msg: "Internal Server Error" });
  }
};
let handlesignUp = async (req, res) => {
  const { name, email, password, jobTitle } = req.body;

  if (!req.body || !name || !email || !password) {
    return res.status(400).json({ msg: "Please Enter all the details" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      name,
      email,
      password: hashedPassword,
      jobTitle,
    });
    await newUser.validate();
    const userData = await newUser.save();
    return res.status(201).json({
      msg: "User Created Successfully",
      data: userData,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      console.error("Validation Errors:", error.errors);
      // Handle validation errors
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ msg: errors.join(", ") });
    }

    if (error.code === 11000) {
      return res.status(400).json({ msg: "The Email already exists" });
    }

    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

let handleUserInfo = async (req, res) => {
  const userId = req.user.id;
  try {
    const userData = await user.findById(userId);
    return res.status(200).json({
      success: true,
      msg: userData,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Bad Request",
    });
  }
};
let handleLogOut = async (req, res) => {
  const cookieOption = {
    expires: new Date(),
    httpOnly: true,
  };
  try {
    res.cookie("token", null, cookieOption);
    res.status(200).json({
      msg: "Logout Succesful",
    });
  } catch (err) {
    return res.status(400).json({
      msg: "Bad Request",
    });
  }
};
module.exports = {
  handleUserInfo,
  handlesignIn,
  handlesignUp,
  handleLogOut,
};
