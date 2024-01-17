import React, { useState } from "react";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetpasswordValidation } from "../helper/validate";

function Reset() {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState("🙈");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetpasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setEyeIcon(() => (showPassword ? "🙈" : "🙊"));
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center ">
            <h4 className="text-5xl font-bold pt-4">Reset Password</h4>
            <span className="w-2/3 text-gray-400 py-4 text-center">
              Enter new password
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col gap-6 justify-center items-center pb-6">
              <div className="bg-white flex justify-between items-center rounded-lg">
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
              <div className="bg-white flex justify-between items-center rounded-lg">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...formik.getFieldProps("confirm_pwd")}
                  className={`${styles.textbox} py-2 rounded-lg`}
                />
                <span
                  id="eyeIcon"
                  onClick={handleTogglePassword}
                  className={`cursor-pointer ${styles.eyeIcon} text-3xl`}>
                  {eyeIcon}
                </span>
              </div>
              <button type="submit" className={`${styles.btn} bg-indigo-500 `}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
