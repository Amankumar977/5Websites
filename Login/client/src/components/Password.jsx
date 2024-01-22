import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";
import useFetch from "../hooks/fetch.hook";
import { verifyPassowrd } from "../helper/helper";
function Password() {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState("🙈");
  const { username } = useAuthStore((state) => state.auth);
  const { isLoading, apiData, serverError, status } = useFetch(
    `user/${username}`
  );
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let loginpassword = verifyPassowrd({
        password: values.password,
        username,
      });
      toast.promise(loginpassword, {
        loading: "Checking the password",
        success: <b> Registered Successfully....!</b>,
        error: <b> Password doesn't match</b>,
      });
      loginpassword.then((res) => {
        let { token } = res.data;
        localStorage.setItem("token", token);
        navigate("/profile");
      });
    },
  });
  if (isLoading) {
    return <h1 className="text-2xl text-bold"> Loading please wait... </h1>;
  }
  if (serverError) {
    return (
      <h1 className="text-2xl text-bold text-red-600">
        {" "}
        {serverError.message}
      </h1>
    );
  }
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
            <h4 className="text-5xl font-bold">
              Hello {apiData?.firstName || apiData?.username || "Again!"}
            </h4>
            <span className="w-2/3 text-gray-400 py-4 text-center">
              Explore More by contacting with us!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img
                src={apiData?.profile || avatar}
                alt="avatar"
                className={styles.profile_img}
              />
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
