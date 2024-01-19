import JWT from "jsonwebtoken";

function verifyUser(req, res, next) {
  const token = (req.cookies && req.cookies.token) || null;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    const payload = JWT.verify(token, process.env.SECRET);
    req.user = { id: payload.id, username: payload.username };
    next();
  } catch (error) {
    if (error instanceof JWT.TokenExpiredError) {
      return res.status(401).json({
        success: false,
        message: "Token expired",
      });
    } else if (error instanceof JWT.JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}

export default verifyUser;
