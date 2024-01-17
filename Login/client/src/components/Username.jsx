import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center ">
            <h4 className="text-5xl foont-bold">Hello Again!</h4>
            <span className="w-2/3 text-gray-400 py-4 text-center">
              Explore More by contacting with us!
            </span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="textbox flex flex-col gap-6">
              <input type="text" placeholder="username" />
              <button type="submit"> Let's Go</button>
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
