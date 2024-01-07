import { useState, useContext } from "react";
import UserContext from "../../Context/UserContext";
let Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  let handleSubmit = () => {
    setUser(userName, password);
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        required
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        type="submit"
        onSubmit={(e) => {
          e.preventDefault(), handleSubmit;
        }}>
        Submit
      </button>
    </div>
  );
};
export default Login;
