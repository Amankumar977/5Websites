const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name"],
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
      unique: [true, "Email Already Exists"],
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email-id",
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
      validate: {
        validator: function (value) {
          // Simplified the password validation
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
            value
            //
          );
        },
        message: "Please Enter a valid Password",
      },
    },
    jobTitle: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.methods = {
  jwtToken: () => {
    return JWT.sign(
      {
        id: this.id,
        email: this.email,
      },
      process.env.SECRET,
      { expiresIn: "24h" }
    );
  },
};
const User = mongoose.model("User", userSchema);
module.exports = User;
