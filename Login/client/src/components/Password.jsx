import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";

function Password() {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState("🙈");

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setEyeIcon((prevIcon) => (showPassword ? "🙈" : "🙊"));
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center ">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="w-2/3 text-gray-400 py-4 text-center">
              Explore More by contacting with us!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="avatar" className={styles.profile_img} />
            </div>
            <div className="textbox flex flex-col gap-6 justify-center items-center">
              <div className="bg-white flex justify-between items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  className={`${styles.textbox} py-2 rounded-lg`}
                />
                <span
                  id="eyeIcon"
                  onClick={handleTogglePassword}
                  className={`cursor-pointer ${styles.eyeIcon} text-3xl`}>
                  {eyeIcon}
                </span>
              </div>
              <button type="submit" className={`${styles.btn} bg-indigo-500`}>
                Sign In
              </button>
            </div>
            <div className="text-center py-6">
              <span className="text-gray-400">
                Forgot Password?{" "}
                <Link className="text-red-500" to="/recovery">
                  Reset Password
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;
