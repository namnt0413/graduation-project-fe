import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import JobDetail from "../pages/JobDetail";
import CompanyDetail from "../pages/CompanyDetail";
import JobList from "../pages/JobList";
import CompanyList from "../pages/CompanyList";
import CompanyHome from "../pages/CompanyHome";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:token" element={<ResetPassword />} />
      <Route path="/job/:id" element={<JobDetail />} />
      <Route path="/job-list" element={<JobList />} />
      <Route path="/company/:id" element={<CompanyDetail />} />
      <Route path="/company-list" element={<CompanyList />} />
      <Route path="/company-home" element={<CompanyHome />} />
      <Route path="*" element={null} />
    </Routes>
  );
};

export default PublicRoutes;
