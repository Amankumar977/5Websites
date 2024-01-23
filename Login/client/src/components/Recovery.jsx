import styles from "../styles/Username.module.css";
import { Toaster, toast } from "react-hot-toast";
import { useAuthStore } from "../store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateOTP, verifyOTP } from "../helper/helper";
function Recovery() {
  const { username } = useAuthStore((state) => state.auth);
  const [OTP, setOTP] = useState(""); // Fix: Correcting the usage of useState
  const navigate = useNavigate();

  useEffect(() => {
    generateOTP(username).then((OTP) => {
      console.log(OTP);
      if (OTP) return toast.success("OTP has been send to your email!");
      return toast.error("Problem while generating OTP!");
    });
  }, [username]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!username || !OTP) {
      console.error("Username or OTP is empty or undefined."); // Debugging line
      return;
    }
    let { status } = await verifyOTP({ username, code: OTP });
    if (status) {
      toast.success("OTP Verified");
      navigate("/reset");
    } else {
      return toast.error("Wrong OTP, Please check the email.");
    }
  }
  let resendOTP = () => {
    let sendPromise = generateOTP(username);
    toast.promise(sendPromise, {
      loading: "Sending the OTP",
      success: <b>OTP has been sent to the email</b>,
      error: <b>Could not send OTP</b>,
    });

    sendPromise
      .then((generatedOTP) => {
        console.log(generatedOTP);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center mt-20 flex-col">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center ">
            <h4 className="text-5xl font-bold pt-4">Recovery</h4>
            <span className="w-2/3 text-gray-400 py-4 text-center">
              Enter the OTP to recover the password
            </span>
          </div>
          <form className="pt-10" onSubmit={onSubmit}>
            <div className="textbox flex flex-col gap-6 justify-center items-center">
              <span className="text-gray-600 text-sm">
                Enter the 6 Digit OTP sent on Your email
              </span>
              <input
                onChange={(e) => setOTP(e.target.value)}
                type="number"
                placeholder="Enter the OTP"
                className={`${styles.textbox} py-2`}
              />
              <button type="submit" className={`${styles.btn} bg-indigo-500`}>
                Click to verify
              </button>
            </div>
          </form>
          <Toaster position="top-right" />

          <div className="text-center py-6">
            <span className="text-gray-400">
              Click here to{" "}
              <button className="text-red-500" onClick={resendOTP}>
                Resend OTP
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
