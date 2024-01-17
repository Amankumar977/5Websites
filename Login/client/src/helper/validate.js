import toast from "react-hot-toast";

/**
 * Validte login page username
 */
export async function usernameValidate(value) {
  const errors = usernameVerify({}, value);
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
 * Validate Username
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
 * Validate Password
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
