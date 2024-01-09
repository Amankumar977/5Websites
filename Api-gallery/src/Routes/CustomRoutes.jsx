import { Route, Routes } from "react-router-dom";
import { ImageDetail, Images, ImageList } from "../Components/index";
let CustomRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path="/photos/:id" element={<ImageDetail />} />
      </Routes>
    </>
  );
};
export default CustomRoutes;
