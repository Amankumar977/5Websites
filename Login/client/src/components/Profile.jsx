import React, { useEffect, useState } from "react";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import convertToBase64 from "../helper/convert";
import axios from "axios";
import { updateUser } from "../helper/helper";
function Profile() {
  const [file, setFile] = useState("");
  const { username } = useAuthStore((state) => state.auth);
  const [getData, setData] = useState({
    isLoading: false,
    apiData: undefined,
    serverError: null,
    status: null,
  });
  const navigate = useNavigate();
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
        console.error("Error fetching data:", error);
        setData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    }
    fetchData();
  }, [username]);
  useEffect(() => {
    console.log("API Data:", getData.apiData);
    const initialValues = {
      firstName: getData.apiData?.firstName || "",
      lastName: getData.apiData?.lastName || "",
      email: getData.apiData?.email || "",
      mobile: getData.apiData?.mobile || "",
      address: getData.apiData?.address || "",
    };
    console.log("Initial Values:", initialValues);
    formik.setValues(initialValues);
  }, [getData.apiData]);
  const formik = useFormik({
    initialValues: {
      firstName: getData.apiData?.firstName || "",
      lastName: getData.apiData?.lastName || "",
      email: getData.apiData?.email || "",
      mobile: getData.apiData?.mobile || "",
      address: getData.apiData?.address || "",
    },
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, {
        profile: file || getData.apiData.profile || "",
      });
      console.log(values);
      let profileUpdatePromise = updateUser({
        values,
      });
      toast.promise(profileUpdatePromise, {
        loading: "Updating .....",
        success: <b>User Updated Successfully</b>,
        error: <b>Error in updating the data. Please try again later</b>,
      });
    },
  });
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
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
  function userLogOut() {
    localStorage.removeItem("token");
    navigate("/");
  }
  if (!getData.apiData) {
    return null;
  }
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className={`${extend.glass} ${styles.glass}`}>
          <div className="title flex flex-col items-center ">
            <h4 className="text-5xl foont-bold">Profile</h4>
            <span className="w-2/3 tlext-gray-400 py-4 text-center">
              Update the details.
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={getData.apiData.profile || file || avatar}
                  className={`${styles.profile_img}  ${extend.profile_img}`}
                  alt="avatar"
                />
              </label>

              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
                className="hidden"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("firstName")}
                  className={`${styles.textbox} ${extend.textbox}  py-3`}
                  type="text"
                  placeholder="FirstName*"
                />
                <input
                  {...formik.getFieldProps("lastName")}
                  className={`${styles.textbox}  ${extend.textbox}  `}
                  type="text"
                  placeholder="LastName*"
                />
              </div>

              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("email")}
                  className={`${styles.textbox}  ${extend.textbox}  `}
                  type="text"
                  placeholder="Email*"
                />
                <input
                  {...formik.getFieldProps("mobile")}
                  className={`${styles.textbox}  ${extend.textbox}  py-3`}
                  type="text"
                  placeholder="Mobile No.*"
                />
              </div>

              <input
                {...formik.getFieldProps("address")}
                className={`${styles.textbox}  ${extend.textbox}  py-3 `}
                type="text"
                placeholder="Address"
              />
              <button className={`${styles.btn} bg-indigo-500`} type="submit">
                Update
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                come back later?{" "}
                <button className="text-red-500" onClick={userLogOut}>
                  Logout
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Profile;
