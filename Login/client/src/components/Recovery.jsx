import styles from "../styles/Username.module.css";

function Recovery() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center ">
            <h4 className="text-5xl font-bold pt-4">Recovery</h4>
            <span className="w-2/3 text-gray-400 py-4 text-center">
              Enter the OTP to recover the password
            </span>
          </div>
          <form className="pt-10">
            <div className="textbox flex flex-col gap-6 justify-center items-center">
              <span className="text-gray-600 text-sm">
                Enter the 6 Digit OTP sent on Your email
              </span>
              <input
                type="number"
                placeholder="Enter the OTP"
                className={`${styles.textbox} py-2`}
              />
              <button type="submit" className={`${styles.btn} bg-indigo-500`}>
                Click to verify
              </button>
            </div>
            <div className="text-center py-6">
              <span className="text-gray-400">
                Click here to{" "}
                <button className="text-red-500">Resend OTP</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
