const JWT = require("jsonwebtoken");
const jwtAuth = (req, res, next) => {
  const token = (req.cookies && req.cookies.token) || null;
  if (!token) {
    return res.status(400).json({
      msg: "No Token exist",
    });
  }
  try {
    const payLoad = JWT.verify(token, process.env.SECRET);
    req.user = { id: payLoad.id, email: payLoad.email };
  } catch (er) {
    return res.status(400).json({
      msg: "No Token exist",
    });
  }
  next();
};
module.exports = jwtAuth;
