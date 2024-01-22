import toast from "react-hot-toast";
import { authenticate } from "./helper";
/**
 * Validte login page username
 */
export async function usernameValidate(value) {
  const errors = usernameVerify({}, value);
  if (value.username) {
    const { status } = await authenticate(value.username);
    if (status !== 200) {
      errors.exist = toast.error("User Doesn't exist....!");
    }
  }
  return errors;
}
/**
 * Validte Password
 */
export async function passwordValidate(value) {
  const errors = passwordVerify({}, value);
  return errors;
}
/**
 * Validate for reset passowrd
 */
export async function resetpasswordValidation(value) {
  const errors = passwordVerify({}, value);
  if (value.password !== value.confirm_pwd) {
    errors.exist = toast.error("Password not match....!");
  }
  return errors;
}
/**
 * Validate register
 */
export async function registervalidate(value) {
  const errors = passwordVerify({}, value);
  usernameVerify({}, value);
  emailVerify({}, value);
  return errors;
}
/**
 * Validate the Profile page
 */
export async function profileValidate(value) {
  const errors = emailVerify({}, value);
  return errors;
}

/**
 * verify Username
 */
function usernameVerify(error = {}, value) {
  if (!value.username) {
    error.username = toast.error("Username is required");
  } else if (value.username.includes(" ")) {
    error.username = toast.error("Inavlid username");
  }
  return error;
}

/**
 * verify Password
 */
let passwordVerify = (error = {}, value) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!value.password) {
    error.password = toast.error("password is required");
  } else if (value.password.includes(" ")) {
    error.password = toast.error("Wrong password");
  } else if (value.password.length < 6) {
    error.password = toast.error("Password length cannot be less than 6");
  } else if (!specialChars.test(value.password)) {
    error.password = toast.error("Password must include special character");
  }
  return error;
};
let emailVerify = (error = {}, value) => {
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!value.email) {
    error.email = toast.error("Email is required");
  } else if (value.email.includes(" ")) {
    error.email = toast.error("Wrong Email");
  } else if (!regex.test(value.email)) {
    error.email = toast.error("Please Enter a valid email id");
  }
  return error;
};
