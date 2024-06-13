import { Routes, Route } from "react-router-dom";
import User from "../pages/User";
import CV1 from "../pages/CV/CV1";
import CreateNewCV from "../pages/CV/MyListCV";
import MyListCV from "../pages/CV/MyListCV";
import TestCV from "../pages/CV/TestCV";
import Home from '../pages/Home';
import CompanyPostJob from '../pages/CompanyPostJob';
import CompanyListJob from '../pages/CompanyListJob';
import CompanyAppliedByJob from '../pages/CompanyAppliedByJob';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
      <Route path="/cv1/:id" element={<CV1 />} />
      <Route path="/create-new-cv" element={<CreateNewCV />} />
      <Route path="/my-list-cv" element={<MyListCV />} />

      <Route path="/company-post-job" element={<CompanyPostJob />} />
      <Route path="/company-list-job" element={<CompanyListJob />} />
      <Route path="/applied-by-job/:id" element={<CompanyAppliedByJob />} />
      <Route path="*" element={null} />
    </Routes>
  );
};

export default PrivateRoutes;
