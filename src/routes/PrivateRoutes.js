import { Routes, Route } from "react-router-dom";
import User from "../pages/User";
import CV from "../pages/CV";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
};

export default PrivateRoutes;
