import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";
let Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
