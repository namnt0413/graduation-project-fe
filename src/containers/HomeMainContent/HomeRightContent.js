import Slider from "react-slick";

const HomeRightContent = () => {
  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [],
  };

  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div className="jp_first_right_sidebar_main_wrapper">
          <div className="row">
            {/* add resume */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_add_resume_wrapper">
                <div className="jp_add_resume_img_overlay"></div>
                <div className="jp_add_resume_cont">
                  <img src="images/content/resume_logo.png" alt="logo" />
                  <h4>Get Best Matched Jobs On your Email. Add Resume NOW!</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-plus-circle"></i> &nbsp;ADD RESUME
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* job spotlight */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_spotlight_main_wrapper">
                <div className="spotlight_header_wrapper">
                  <h4>Job Spotlight</h4>
                </div>
                <div className="jp_spotlight_slider_wrapper">
                  <Slider {...settings}>
                    <div className="item">
                      <div className="jp_spotlight_slider_img_Wrapper">
                        <img
                          src="images/content/spotlight_img.jpg"
                          alt="spotlight_img"
                        />
                      </div>
                      <div className="jp_spotlight_slider_cont_Wrapper">
                        <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                        <p>Webstrot Technology Ltd.</p>
                        <ul>
                          <li>
                            <i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k
                            P.A.
                          </li>
                          <li>
                            <i className="fa fa-map-marker"></i>&nbsp;
                            Caliphonia, PO 455001
                          </li>
                        </ul>
                      </div>
                      <div className="jp_spotlight_slider_btn_wrapper">
                        <div className="jp_spotlight_slider_btn">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i> &nbsp;ADD
                                RESUME
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="jp_spotlight_slider_img_Wrapper">
                        <img
                          src="images/content/spotlight_img.jpg"
                          alt="spotlight_img"
                        />
                      </div>
                      <div className="jp_spotlight_slider_cont_Wrapper">
                        <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                        <p>Webstrot Technology Ltd.</p>
                        <ul>
                          <li>
                            <i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k
                            P.A.
                          </li>
                          <li>
                            <i className="fa fa-map-marker"></i>&nbsp;
                            Caliphonia, PO 455001
                          </li>
                        </ul>
                      </div>
                      <div className="jp_spotlight_slider_btn_wrapper">
                        <div className="jp_spotlight_slider_btn">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i> &nbsp;ADD
                                RESUME
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="jp_spotlight_slider_img_Wrapper">
                        <img
                          src="images/content/spotlight_img.jpg"
                          alt="spotlight_img"
                        />
                      </div>
                      <div className="jp_spotlight_slider_cont_Wrapper">
                        <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                        <p>Webstrot Technology Ltd.</p>
                        <ul>
                          <li>
                            <i className="fa fa-cc-paypal"></i>&nbsp; $12K - 15k
                            P.A.
                          </li>
                          <li>
                            <i className="fa fa-map-marker"></i>&nbsp;
                            Caliphonia, PO 455001
                          </li>
                        </ul>
                      </div>
                      <div className="jp_spotlight_slider_btn_wrapper">
                        <div className="jp_spotlight_slider_btn">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i> &nbsp;ADD
                                RESUME
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            {/* job by category */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_rightside_job_categories_wrapper">
                <div className="jp_rightside_job_categories_heading">
                  <h4>Jobs by Category</h4>
                </div>
                <div className="jp_rightside_job_categories_content">
                  <ul>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Graphic Designer <span>(214)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Engineering Jobs <span>(514)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Mainframe Jobs <span>(554)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Legal Jobs <span>(457)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        IT Jobs <span>(1254)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        R&D Jobs <span>(554)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Government Jobs <span>(350)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        PSU Jobs <span>(221)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-plus-circle"></i>{" "}
                      <a href="#">View All Categories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* job by location */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_rightside_job_categories_wrapper">
                <div className="jp_rightside_job_categories_heading">
                  <h4>Jobs by Location</h4>
                </div>
                <div className="jp_rightside_job_categories_content">
                  <ul>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Ha Noi <span>(214)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Ho Chi Minh City <span>(514)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Da Nang <span>(554)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Hai Phongs <span>(457)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Binh Duong <span>(1254)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-plus-circle"></i>{" "}
                      <a href="#">View All Locations</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRightContent;
