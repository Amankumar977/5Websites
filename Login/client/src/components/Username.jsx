import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";
function Username() {
  const setUsername = useAuthStore((state) => state.setUsername);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setUsername(values.username);
      navigate("/password");
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center ">
            <h4 className="text-5xl foont-bold">Hello Again!</h4>
            <span className="w-2/3 text-gray-400 py-4 text-center">
              Explore More by contacting with us!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="avatar" className={styles.profile_img} />
            </div>
            <div className="textbox flex flex-col gap-6 justify-center items-center">
              <input
                type="text"
                placeholder="username"
                {...formik.getFieldProps("username")}
                className={`${styles.textbox} py-2`}
              />
              <button type="submit" className={`${styles.btn} bg-indigo-500`}>
                {" "}
                Let's Go
              </button>
            </div>
            <div className="text-center py-6">
              <span className="text-gray-400">
                Not a Member{" "}
                <Link className="text-red-500" to="/register">
                  Register now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Username;
