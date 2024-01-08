import React from "react";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "./Footer";
import Banner from "./Banner";

const CompanyLayout = (props) => {

  return (
    <>
      <div className="jp_top_header_img_wrapper">
        <div className="jp_slide_img_overlay"></div>
        <CompanyNavbar />
      </div>
      <div className="content">{props.page}</div>
      <Footer />
    </>
  );
};

export default CompanyLayout;
