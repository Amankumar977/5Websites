import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";

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

    const cookieOption = {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    };

    res.cookie("token", token, cookieOption);

    console.log(token);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
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
/** Get: http://localhost:5000/api/user/idExample*/
export async function getUser(req, res) {
  const { username } = req.params;

  if (!username) {
    return res.status(400).send({ error: "Invalid Username" });
  }

  try {
    const user = await userModel.findOne({ username }).lean();

    if (!user) {
      return res.status(404).send({ error: "User Not Found" });
    }
    user.password = undefined;

    return res.status(200).send(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal Server Error" });
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
    const id = req.params._id; // Assuming the user ID is in the URL parameters
    if (id) {
      const body = req.body;
      const updatedUser = await userModel.findOneAndUpdate({ _id: id }, body, {
        new: true,
      });

      if (!updatedUser) {
        return res.status(500).send({ error: "Unable to update the user" });
      }

      // Omit sensitive information like password before sending the response
      updatedUser.password = undefined;

      return res.status(201).send({ updatedUser });
    } else {
      return res.status(404).send({ Error: "Id not found" });
    }
  } catch (error) {
    return res.status(401).send({ error: error.message, msg: "here" });
  }
}

/** Get: http://localhost:5000/api/generateOTP*/
export async function generateOTP(req, res) {
  return res.json("OTP Generated");
}
/** Get: http://localhost:5000/api/verifyOTP*/
export async function verifyOTP(req, res) {
  return res.json("OTP Verified");
}
/** Get: http://localhost:5000/api/createResetSession*/
export async function createResetSession(req, res) {
  return res.json("OTP Verified");
}
/** PUT: http://localhost:5000/api/resetPassword*/
export async function resetPassword(req, res) {
  return res.json("Password Changed");
}
