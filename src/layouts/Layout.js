import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {

  return (
    <>
      <div className="jp_top_header_img_wrapper">
        <div className="jp_slide_img_overlay"></div>
        <Navbar />
        <div className="content">{props.page}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
