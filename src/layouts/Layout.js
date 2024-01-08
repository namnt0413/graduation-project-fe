import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

const Layout = (props) => {

  return (
    <>
      <div className="jp_top_header_img_wrapper">
        <div className="jp_slide_img_overlay"></div>
        <Navbar />
        { props.isShowBanner && <Banner /> }
      </div>
      <div className="content">{props.page}</div>
      <Footer />
    </>
  );
};

export default Layout;
