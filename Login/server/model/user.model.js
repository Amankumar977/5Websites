import mongoose from "mongoose";
import JWT from "jsonwebtoken";
let userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter the username"],
      unique: [true, "The username is  already taken"],
    },
    password: {
      type: String,
      required: [true, "Please enter the password"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: [true, "The email is  already taken"],
      trim: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    address: {
      type: String,
    },
    profile: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.methods = {
  jwtToken() {
    return JWT.sign(
      {
        id: this._id,
        username: this.username,
      },
      process.env.SECRET,
      { expiresIn: "24h" }
    );
  },
};
export default mongoose.model.users || mongoose.model("users", userSchema);
