import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";
import { verifyPassowrd } from "../helper/helper";
import axios from "axios";
function Password() {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState("🙈");
  const { username } = useAuthStore((state) => state.auth);
  const [getData, setData] = useState({
    isLoading: false,
    apiData: undefined,
    serverError: null,
    status: null,
  });
  useEffect(() => {
    async function fetchData() {
      try {
        if (username) {
          setData((prev) => ({ ...prev, isLoading: true }));
          const { data, status } = await axios.get(
            `${import.meta.env.VITE_SERVER_DOMAIN}/api/user/${username}`
          );
          if (status == 200) {
            setData((prev) => ({
              ...prev,
              isLoading: false,
              apiData: data,
              status: status,
            }));
          }
        }
      } catch (error) {
        setData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    }
    fetchData();
  }, []);

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "Aman@12",
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
        success: <b> Logged In succesfull....!</b>,
        error: <b> Password doesn't match</b>,
      });
      loginpassword.then((res) => {
        let token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/profile");
      });
    },
  });
  if (getData.isLoading) {
    return <h1 className="text-2xl text-bold"> Loading please wait... </h1>;
  }
  if (getData.serverError) {
    return (
      <h1 className="text-2xl text-bold text-red-600">
        {" "}
        {getData.serverError.message}
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
              Hello{" "}
              {getData.apiData?.firstName ||
                getData.apiData?.username ||
                "Again!"}
            </h4>
            <span className="w-2/3 text-gray-400 py-4 text-center">
              Explore More by contacting with us!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img
                src={getData.apiData?.profile || avatar}
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
