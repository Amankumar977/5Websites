import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import UserContextProvider from "./Context/UserContextProvider";
function App() {
  return (
    <UserContextProvider>
      <h1>Hi This is Aman</h1>
      <Login />
      {/* <Profile /> */}
    </UserContextProvider>
  );
}

export default App;
