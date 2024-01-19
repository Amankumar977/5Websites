import React, { useState } from "react";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidate } from "../helper/validate";
import convertToBase64 from "../helper/convert";
function Profile() {
  const [file, setFile] = useState("");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
    },
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, { profile: file || "" });
      console.log(values);
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
                  src={file || avatar}
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
                  {...formik.getFieldProps("mobile")}
                  className={`${styles.textbox}  ${extend.textbox}  py-3`}
                  type="text"
                  placeholder="Mobile No.*"
                />
                <input
                  {...formik.getFieldProps("email")}
                  className={`${styles.textbox}  ${extend.textbox}  `}
                  type="text"
                  placeholder="Email*"
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
                <button className="text-red-500">Logout</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Profile;
