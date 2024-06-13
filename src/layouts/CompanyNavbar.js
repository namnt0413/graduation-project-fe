import { Link, useNavigate } from "react-router-dom";
import AuthCompany from "../components/AuthCompany";
import { NavLink } from "react-router-dom";
import "../styles/components/Navbar.css";
// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const CompanyNavbar = () => {
  // const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const { companyGetToken, getCompany } = AuthCompany();
  const { token, companyHttp } = AuthCompany();
  const [company,setCompany] = useState(getCompany());
  // console.log(company)

  const logoutCompany = () => {
    if (token !== undefined) {
        companyHttp.post("/company-logout").then((res) => {
        // console.log(res.data);
      });
      sessionStorage.clear();
      navigate("/");
    }
  };

  return (
    <>
      <div className="gc_main_menu_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 hidden-xs hidden-sm full_width">
              <div className="gc_header_wrapper">
                <div className="gc_logo" >
                  <Link className="nav-link" to="/company-home">
                    <img
                      src="http://localhost:3000/images/header/logo.png"
                      alt="Logo"
                      title="Job Pro"
                      className="img-responsive"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 center_responsive">
              <div className="header-area hidden-menu-bar stick" id="sticker">
                <div className="mainmenu">
                  <ul className="float_left">
                    <li className="has-mega gc_main_navigation">
                      <a href="#" className="gc_main_navigation">
                        {" "}
                        Quản lý công việc&nbsp;<i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li className="parent">
                        <Link className="nav-link" to="/company-post-job">
                          Tạo bài đăng công việc mới
                        </Link>
                        </li>
                        <li className="parent">
                          <Link className="nav-link" to="/company-list-job">
                            Công việc đã đăng
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="parent gc_main_navigation">
                      <a href="#" className="gc_main_navigation">
                        Ứng viên &nbsp;<i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li className="parent">
                          <a href="">Top ứng viên tiềm năng</a>
                        </li>
                        <li className="parent">
                          {/* <Link className="nav-link" to="/company-applied-list"></Link> */}
                          <a href="">Quản lý Ứng viên đã ứng tuyển</a>
                        </li>
                        <li className="parent">
                          <a href="">
                            Ứng viên đang thep dõi
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-mega gc_main_navigation">
                      <a href="#" className="gc_main_navigation">
                        {" "}
                        Giới thiệu công ty&nbsp;
                      </a>
                    </li>
                  </ul>
                </div>
                <header className="mobail_menu">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-6 col-sm-6">
                        <div className="gc_logo">
                          <a href="index.html">
                            <img
                              src="images/header/logo.png"
                              alt="Logo"
                              title="Grace Church"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6">
                        <div className="cd-dropdown-wrapper">
                          <a className="house_toggle" href="#0"></a>
                          <nav className="cd-dropdown">
                            <h2>
                              <a href="#">
                                Job<span>Pro</span>
                              </a>
                            </h2>
                            <a href="#0" className="cd-close">
                              Close
                            </a>
                            <ul className="cd-dropdown-content">
                              <li>
                                <form className="cd-search">
                                  <input
                                    type="search"
                                    placeholder="Search..."
                                  />
                                </form>
                              </li>
                              <li className="has-children">
                                <a href="#">Home</a>

                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <a href="#0">Menu</a>
                                  </li>
                                  <li>
                                    <a href="index.html">Home1</a>
                                  </li>
                                  <li>
                                    <a href="index_II.html">Home2</a>
                                  </li>
                                  <li>
                                    <a href="index_map.html">Home3</a>
                                  </li>
                                  <li>
                                    <a href="index_iv.html">Home4</a>
                                  </li>
                                  <li>
                                    <a href="index_v.html">Home5</a>
                                  </li>
                                  <li>
                                    <a href="index_vi.html">Home6</a>
                                  </li>
                                </ul>
                              </li>

                              <li className="has-children">
                                <a href="#">Listing</a>

                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <a href="#0">Menu</a>
                                  </li>
                                  <li>
                                    <a href="listing_left.html">listing-Left</a>
                                  </li>

                                  <li>
                                    <a href="listing_right.html">
                                      listing-Right
                                    </a>
                                  </li>

                                  <li>
                                    <a href="listing_single.html">
                                      listing-Single
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li className="has-children">
                                <a href="#">candidates</a>

                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <a href="#0">Menu</a>
                                  </li>
                                  <li>
                                    <a href="company_listing.html">
                                      Company-Listing
                                    </a>
                                  </li>
                                  <li>
                                    <a href="company_listing_single.html">
                                      Company-Single
                                    </a>
                                  </li>
                                  <li>
                                    <a href="candidate_listing.html">
                                      candidate-Listing
                                    </a>
                                  </li>
                                  <li>
                                    <a href="candidate_profile.html">
                                      candidate-Profile
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="has-children">
                                <a href="#">Pages</a>

                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <a href="#0">Menu</a>
                                  </li>
                                  <li>
                                    <a href="about.html">About-Us</a>
                                  </li>
                                  <li>
                                    <a href="404_error.html">404</a>
                                  </li>
                                  <li>
                                    <a href="add_postin.html">Add-Posting</a>
                                  </li>
                                  <li>
                                    <a href="login.html">Login</a>
                                  </li>
                                  <li>
                                    <a href="register.html">Register</a>
                                  </li>
                                  <li>
                                    <a href="pricing.html">Pricing</a>
                                  </li>
                                </ul>
                              </li>

                              <li className="has-children">
                                <a href="#">Blog</a>

                                <ul className="cd-secondary-dropdown is-hidden">
                                  <li className="go-back">
                                    <a href="#0">Menu</a>
                                  </li>
                                  <li>
                                    <a href="blog_left.html">Blog-Left</a>
                                  </li>

                                  <li>
                                    <a href="blog_right.html">Blog-Right</a>
                                  </li>

                                  <li>
                                    <a href="blog_single_left.html">
                                      Blog-Single-Left
                                    </a>
                                  </li>

                                  <li>
                                    <a href="blog_single_right.html">
                                      Blog-Single-Left
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <a href="contact.html">Contact</a>
                              </li>
                              <li>
                                <a href="register.html">Sign Up</a>
                              </li>
                              <li>
                                <a href="login.html">Login</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
            {/* usesr bar */}
            {!companyGetToken() ? (
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                <div className="jp_navi_right_btn_wrapper">
                  <ul>
                    <li>
                      <Link className="nav-link" to="/register">
                        <i className="fa fa-user"></i>&nbsp; SIGN UP
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/login">
                        <i className="fa fa-sign-in"></i>&nbsp; LOGIN
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="user-bar col-lg-3 col-md-4 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                <div className="jp_navi_right_btn_wrapper">
                  <div className="user-info">
                    <li className="user-info nav-item dropdown">
                      <div
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{color: "white"}}
                      >
                        <img className="user-avatar" src={company?.avatar_url} />
                        {company.name}
                      </div>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Account infomation
                        </a>
                        <a className="dropdown-item" href="#">
                          Change password
                        </a>
                        <button className="dropdown-item" onClick={logoutCompany}>
                          Logout
                        </button>
                      </div>
                    </li>
                    <button className="notification">
                      <i className="fa-regular fa-bell"></i>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* end user bar */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyNavbar;
