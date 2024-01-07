// Profile.js
import { useContext } from "react";
import UserContext from "../../Context/UserContext.js";
function Profile() {
  console.log("Rendering Profile component");
  const { user } = useContext(UserContext);
  console.log("User:", user);

  if (!user) return <div>Please Login</div>;
  return <div>Welcome {user.userName}</div>;
}

export default Profile;
