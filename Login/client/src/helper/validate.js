import toast from "react-hot-toast";

/**
 * Validte login page username
 */
export async function usernameValidate(value) {
  const errors = usernameVerify({}, value);
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
