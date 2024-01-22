import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import { registervalidate } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import { registerUser } from "../helper/helper";
import { useNavigate } from "react-router-dom";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState("🙈");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  let handleTogglePassword = () => {
    setShowPassword((prePassword) => !prePassword);
    setIcon(() => (showPassword ? "🙈" : "🙊"));
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registervalidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, { profile: file || "" });
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "creating Profile Please Wait....",
        success: <b> Registered Successfully....!</b>,
        error: <b> Unable to register</b>,
      });
      registerPromise.then(
        () =>
          function () {
            navigate("/");
          }
      );
    },
  });
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center ">
            <h4 className="text-5xl foont-bold">Register</h4>
            <span className="w-2/3 text-gray-400 py-4 text-center">
              Happy to see you here
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  alt="avatar"
                  className={styles.profile_img}
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                name="profile"
                id="profile"
                className="hidden"
              />
            </div>
            <div className="textbox flex flex-col gap-6 justify-center items-center">
              <input
                type="email"
                placeholder="email"
                {...formik.getFieldProps("email")}
                className={`${styles.textbox} py-2`}
              />
              <input
                type="text"
                placeholder="username"
                {...formik.getFieldProps("username")}
                className={`${styles.textbox} py-2`}
              />
              <div className="bg-white flex justify-between items-center rounded-xl px-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  className={`${styles.textbox} py-2 rounded-lg`}
                />
                <span
                  id="eyeIcon"
                  onClick={handleTogglePassword}
                  className={`cursor-pointer  ${styles.eyeIcon}  text-3xl`}>
                  {icon}
                </span>
              </div>
              <button type="submit" className={`${styles.btn} bg-indigo-500`}>
                {" "}
                Register Now
              </button>
            </div>
            <div className="text-center py-6">
              <span className="text-gray-400">
                Already Reistered?{" "}
                <Link className="text-red-500" to="/">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
