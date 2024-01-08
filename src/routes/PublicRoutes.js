import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import JobDetail from "../pages/JobDetail";
import CompanyDetail from "../pages/CompanyDetail";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:token" element={<ResetPassword />} />
      <Route path="/job/:id" element={<JobDetail />} />
      <Route path="/company/:id" element={<CompanyDetail />} />
      <Route path="*" element={null} />
    </Routes>
  );
};

export default PublicRoutes;
