import { Routes, Route } from "react-router-dom";
import User from "../pages/User";
import CV from "../pages/CV";
import Home from '../pages/Home';
import CompanyPostJob from '../pages/CompanyPostJob'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
      <Route path="/cv" element={<CV />} />

      <Route path="/company-post-job" element={<CompanyPostJob />} />
      <Route path="*" element={null} />
    </Routes>
  );
};

export default PrivateRoutes;
