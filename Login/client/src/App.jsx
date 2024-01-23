import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Importing the components
import {
  PageNotFound,
  Recovery,
  Reset,
  Password,
  Profile,
  Username,
  Register,
} from "./components/index";
// Authorization middleware
import { AuthorizeUser, ProtectRoute } from "./middleware/Auth";
// React Routes
let router = createBrowserRouter([
  {
    path: "/",
    element: <Username />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/password",
    element: (
      <ProtectRoute>
        <Password />
      </ProtectRoute>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  return (
    <main className="font-mono">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
