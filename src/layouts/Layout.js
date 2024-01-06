import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {

  return (
    <>
      <div className="flex">
        <div className="w-full font-sans">
          <Navbar />
            <div className="content">{props.page}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
