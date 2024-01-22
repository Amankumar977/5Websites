import axios from "axios";
/**Base Domain */
axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;
/**
 * Make API Request
 */
// Authenticate Function
export async function authenticate(username) {
  try {
    return await axios.post("/api/authenticate", { username });
  } catch (error) {
    return { error: "user Name doesn't exist" };
  }
}
// Get user details
export async function getUser({ username }) {
  try {
    const { data } = await axios.get(`api/user/${username}`);
    return { data };
  } catch (error) {
    return { error: "Password doesn't exist" };
  }
}
/** register user */
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post("/api/register", credentials);
    let { username, email } = credentials;
    if (status == 201) {
      await axios.post("/api/registerMail", {
        username,
        userEmail: email,
        text: msg,
      });
    }
    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}
/**login function */
export async function verifyPassowrd({ username, password }) {
  try {
    if (username) {
      const { data } = await axios.post("/api/login", { username, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password Doesn't Match" });
  }
}
/**Update user */
export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.put("/api/updateuser", response, {
      headers: { Authorization: ` Bearer ${token}` },
    });
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't Update Profile..." });
  }
}
/**Generate OTPs */
export async function generateOTP(username) {
  try {
    const {
      data: { code },
      status,
    } = await axios.get("/api/generateOTP", { params: { username } });
    if (status === 200) {
      let {
        data: { email },
      } = await getUser({ username });
      let text = `Your Password Recovery Code is ${code}`;
      await axios.post("/api/registerMail", {
        username,
        userEmail: email,
        text,
        subject: "Password Recovery Email",
      });
    }
    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error });
  }
}
/**Verify OTP */
export async function verifyOTP({ username, code }) {
  try {
    const { data, status } = await axios.get("/api/verifyOTP", {
      params: { username, code },
    });
    return { data, status };
  } catch (error) {
    return Promise.reject({ error });
  }
}
/**reset Password */
export async function resetPassword({ username, password }) {
  try {
    const { data, status } = await axios.put("/api/resetPassword", {
      username,
      password,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}
