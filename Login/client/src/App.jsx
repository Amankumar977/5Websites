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
    element: <Profile />,
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
    element: <Password />,
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
