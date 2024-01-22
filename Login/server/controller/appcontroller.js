import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import otpGenerator from "otp-generator";
export async function verifyUser(req, res, next) {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;
    let exist = userModel.findOne({ username });
    if (!exist) {
      return res.status(404).send({
        error: "Cannot fnd user",
      });
    }
    next();
  } catch (error) {
    return res.status(404).send({
      error: "Authentication error",
    });
  }
}
/** POST: http://localhost:5000/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}l
*/
export async function register(req, res) {
  try {
    const { email, username, password, profile } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        msg: "Please enter all the required fields",
      });
    }

    const existUsername = userModel.findOne({ username });
    const emailExist = userModel.findOne({ email });

    Promise.all([existUsername, emailExist])
      .then(([usernameResult, emailResult]) => {
        if (usernameResult) {
          return res.status(400).json({
            success: false,
            error: "Please enter a unique username",
          });
        }
        if (emailResult) {
          return res.status(400).json({
            success: false,
            error: "Please enter a unique email",
          });
        }

        bcrypt
          .hash(password, 10)
          .then((hashedPassword) => {
            const user = new userModel({
              username,
              email,
              password: hashedPassword,
              profile: profile || "",
            });

            user
              .save()
              .then((result) => {
                return res
                  .status(201)
                  .json({ msg: "User Registered Successfully" });
              })
              .catch((error) => {
                return res.status(400).json({
                  success: false,
                  error: error.message,
                });
              });
          })
          .catch((error) => {
            return res.status(400).json({
              success: false,
              error: "Unable to hash the password",
            });
          });
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: "Error checking username and email existence",
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
}

/** POST: http://localhost:5000/api/login 
 * @param : {
  "username" : "example123",
  "password" : "admin@123"
}
*/
export async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(500).json({
      success: false,
      error: "Please enter all the details",
    });
  }

  try {
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "The username is not found",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(404).json({
        success: false,
        msg: "Incorrect password",
      });
    }

    const token = user.jwtToken();
    user.password = undefined;

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
}
/**
 * To verify the user
 */

/** Get: http://localhost:5000/api/user/idExample*/
export async function getUser(req, res) {
  const { username } = req.params;

  try {
    if (!username) return res.status(501).send({ error: "Invalid Username" });

    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(404).send({ msg: "User Not found" });
    }
    user.password = undefined;
    return res.status(200).send(user);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
}

/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export async function updateUser(req, res) {
  try {
    // const id = req.query.id;
    const { userId } = req.user;

    if (userId) {
      const body = req.body;

      // update the data
      const updatedDetails = await userModel.findByIdAndUpdate(userId, body, {
        new: true,
      });
      if (!updatedDetails) {
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
      return res.status(200).json({
        success: true,
        data: updatedDetails,
      });
    } else {
      return res.status(401).send({ error: "User Not Found...!" });
    }
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
}

/** Get: http://localhost:5000/api/generateOTP*/
export async function generateOTP(req, res) {
  req.app.locals.OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  res.status(200).send({ code: req.app.locals.OTP });
}
/** Get: http://localhost:5000/api/verifyOTP*/
export async function verifyOTP(req, res) {
  const { code } = req.query;
  if (parseInt(code) === parseInt(req.app.locals.OTP)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(201).send({ msg: "OTP verified" });
  }
  return res.status(400).send({ msg: "Invalid OTP" });
}
/** Get: http://localhost:5000/api/createResetSession*/
export async function createResetSession(req, res) {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false;
    return res.status(201).send({ msg: "access Granted" });
  }
  return res.status(400).send({ error: "session expired! " });
}
/** PUT: http://localhost:5000/api/resetPassword*/
export async function resetPassword(req, res) {
  if (!req.app.locals.resetSession) {
    return res.status(400).send({ error: "session expired! " });
  }
  try {
    const { username, password } = req.body;
    try {
      userModel
        .findOne({ username })
        .then((user) => {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              userModel.findOneAndUpdate(
                { username: user.username },
                { password: hashedPassword }
              );
            })
            .then(() => {
              req.app.locals.resetSession = false;
              res.status(200).send({ msg: "user password updated" });
            })
            .catch((error) => {
              return res.status(500).send({ error: error.message });
            })
            .catch((error) => {
              return res.status(500).send({ error: error.message });
            });
        })
        .catch((error) => {
          return res.status(404).send({ error: error.message });
        });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
}
