import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../components/AuthUser";
import { NavLink } from "react-router-dom";
import "../styles/components/Navbar.css";
// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Navbar = () => {
  // const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const { getToken, getUser } = AuthUser();
  const { token, http } = AuthUser();
  const [user,setUser] = useState(getUser());
  // console.log(user)

  const logoutUser = () => {
    if (token !== undefined) {
      http.post("/logout").then((res) => {
        console.log(res.data);
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
                  <Link className="nav-link" to="/">
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
                        Home&nbsp;<i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li className="parent">
                          <a href="index.html">Home1</a>
                        </li>
                        <li className="parent">
                          <a href="index_II.html">Home2</a>
                        </li>
                        <li className="parent">
                          <a href="index_map.html">Home3</a>
                        </li>
                        <li className="parent">
                          <a href="index_iv.html">Home4</a>
                        </li>
                        <li className="parent">
                          <a href="index_v.html">Home5</a>
                        </li>
                        <li className="parent">
                          <a href="index_vi.html">Home6</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-mega gc_main_navigation">
                      <a href="#" className="gc_main_navigation">
                        {" "}
                        Job&nbsp;<i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li className="parent">
                          <a href="listing_left.html">Listing-Left</a>
                        </li>
                        <li className="parent">
                          <a href="listing_right.html">Listing-Right</a>
                        </li>
                        <li className="parent">
                          <a href="listing_single.html">Listing-Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent gc_main_navigation">
                      <a href="#" className="gc_main_navigation">
                        candidates &nbsp;<i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li className="parent">
                          <a href="company_listing.html">Company-Listing</a>
                        </li>
                        <li className="parent">
                          <a href="company_listing_single.html">
                            Company-Single
                          </a>
                        </li>
                        <li className="parent">
                          <a href="candidate_listing.html">candidate-Listing</a>
                        </li>
                        <li className="parent">
                          <a href="candidate_profile.html">candidate-Profile</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-mega gc_main_navigation">
                      <a href="#" className="gc_main_navigation">
                        {" "}
                        Pages&nbsp;<i className="fa fa-angle-down"></i>
                      </a>
                      <ul>
                        <li className="parent">
                          <a href="about.html">About-Us</a>
                        </li>
                        <li className="parent">
                          <a href="404_error.html">404</a>
                        </li>
                        <li className="parent">
                          <a href="add_postin.html">Add-Posting</a>
                        </li>
                        <li className="parent">
                          <a href="login.html">Login</a>
                        </li>
                        <li className="parent">
                          <a href="register.html">Register</a>
                        </li>
                        <li className="parent">
                          <a href="pricing.html">Pricing</a>
                        </li>
                      </ul>
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
            {!getToken() ? (
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
                    <li class="user-info nav-item dropdown">
                      <div
                        class="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img className="user-avatar" src={user?.avatar} />
                        {user.name}
                      </div>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a class="dropdown-item" href="#">
                          Account infomation
                        </a>
                        <a class="dropdown-item" href="#">
                          Change password
                        </a>
                        <button class="dropdown-item" onClick={logoutUser}>
                          Logout
                        </button>
                      </div>
                    </li>
                    <button className="notification">
                      <i class="fa-regular fa-bell"></i>
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

export default Navbar;
