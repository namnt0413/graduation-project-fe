import Layout from "../layouts/Layout";
import "../styles/pages/JobDetail.css";

const JobDetail = () => {
  const JobDetailContent = (
    <>
      {/* job title */}
      <div className="jp_tittle_main_wrapper">
        <div className="jp_tittle_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_tittle_heading_wrapper">
                <div className="jp_tittle_heading">
                  <h2>HTML Developer (1-2 Yrs Exp.)</h2>
                </div>
                <div className="jp_tittle_breadcrumb_main_wrapper">
                  <div className="jp_tittle_breadcrumb_wrapper">
                    <ul>
                      <li>
                        <a href="#">Home</a>{" "}
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                        <a href="#">Jobs</a>{" "}
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                        <a href="#">Developer</a>{" "}
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li>HTML Developer (1-2 Yrs Exp.)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="jp_listing_single_main_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="jp_listing_left_sidebar_wrapper">
                <div className="jp_job_des">
                  <h2>Job Description</h2>
                  <p>
                    Google is and always will be an engineering company. We hire
                    people with a broad set of ical skills who are ready to
                    tackle some of technology's greatest challenges and make an
                    impact on millions, if not billions, of users. At Google,
                    engineers not only revolutionize search, they routinely work
                    on massive scalability and storage solutions, large-scale
                    applications and rely new platforms for developers around
                    the world. From AdWords to Chrome, Android to Ye, Social to
                    Local, Google engineers are changing the world.
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-globe"></i>&nbsp;&nbsp;{" "}
                      <a href="#">www.example.com</a>
                    </li>
                    <li>
                      <i className="fa fa-file-pdf-o"></i>&nbsp;&nbsp;{" "}
                      <a href="#">Download Info</a>
                    </li>
                  </ul>
                </div>
                <div className="jp_job_res">
                  <h2>Responsibilities</h2>
                  <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Praesent sapien massa, convallis a pellentesque
                    nec, egestas non nisi. Curabitur aliquet quam id dui posuere
                    blandit.
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp; Build
                      next-generation web applications with a focus on the
                      client side.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp; Redesign
                      UI's, implement new UI's, and pick up Java as necessary.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp; Explore
                      and design dynamic and compelling consumer experiences.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp; Design
                      and build scalable framework for web applications.
                    </li>
                  </ul>
                </div>
                <div className="jp_job_res jp_job_qua">
                  <h2>Minimum qualifications</h2>
                  <ul>
                    <li>
                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp; BA/BS
                      degree in a technical field or equivalent practical
                      experience.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp; 2 years
                      of relevant work experience in software development.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp;
                      Programming experience in C, C++ or Java.
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>&nbsp;&nbsp;
                      Experience with AJAX, HTML and CSS.
                    </li>
                  </ul>
                </div>
                <div className="jp_job_apply">
                  <h2>How To Apply</h2>
                  <p>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Curabitur aliquet quam id dui posuere blandit.
                    Curabitur aliquet quam id dui posuere blandit. Curabitur non
                    nulla sit amet nisl tempus convallis quis ac lectus.
                  </p>
                </div>
              </div>
              <div className="jp_listing_left_bottom_sidebar_wrapper">
                <div className="jp_listing_left_bottom_sidebar_social_wrapper">
                  <ul className="hidden-xs">
                    <li>SHARE :</li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="hidden-xs">
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li className="hidden-xs">
                      <a href="#">
                        <i className="fa fa-vimeo"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="jp_listing_left_bottom_sidebar_key_wrapper">
                <ul>
                  <li>
                    <i className="fa fa-tags"></i>Keywords :
                  </li>
                  <li>
                    <a href="#">ui designer,</a>
                  </li>
                  <li>
                    <a href="#">developer,</a>
                  </li>
                  <li>
                    <a href="#">senior</a>
                  </li>
                  <li>
                    <a href="#">it company,</a>
                  </li>
                  <li>
                    <a href="#">design,</a>
                  </li>
                  <li>
                    <a href="#">call center</a>
                  </li>
                </ul>
              </div>
              <div className="jp_listing_related_heading_wrapper">
                <h2>Related Jobs</h2>
                <div className="jp_listing_related_slider_wrapper">
                  <div className="item">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                          <div className="jp_job_post_main_wrapper">
                            <div className="row">
                              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Fimages.png?alt=media&token=3b3116da-2a46-4e9a-b710-b0940198e57e"
                                    alt="post_img"
                                  />
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                  <p>Webstrot Technology Pvt. Ltd.</p>
                                  <ul>
                                    <li>
                                      <i className="fa fa-cc-paypal"></i>
                                      &nbsp; $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="fa fa-map-marker"></i>
                                      &nbsp; Caliphonia, PO 455001
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>

                                    <li>
                                      <a href="#">Apply</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                          <div className="jp_job_post_main_wrapper">
                            <div className="row">
                              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Fimages.png?alt=media&token=3b3116da-2a46-4e9a-b710-b0940198e57e"
                                    alt="post_img"
                                  />
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                  <p>Webstrot Technology Pvt. Ltd.</p>
                                  <ul>
                                    <li>
                                      <i className="fa fa-cc-paypal"></i>
                                      &nbsp; $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="fa fa-map-marker"></i>
                                      &nbsp; Caliphonia, PO 455001
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>

                                    <li>
                                      <a href="#">Apply</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                          <div className="jp_job_post_main_wrapper">
                            <div className="row">
                              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <div className="jp_job_post_side_img">
                                  <img
                                    src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Fimages.png?alt=media&token=3b3116da-2a46-4e9a-b710-b0940198e57e"
                                    alt="post_img"
                                  />
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                  <p>Webstrot Technology Pvt. Ltd.</p>
                                  <ul>
                                    <li>
                                      <i className="fa fa-cc-paypal"></i>
                                      &nbsp; $12K - 15k P.A.
                                    </li>
                                    <li>
                                      <i className="fa fa-map-marker"></i>
                                      &nbsp; Caliphonia, PO 455001
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="jp_job_post_right_btn_wrapper">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>

                                    <li>
                                      <a href="#">Apply</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="jp_rightside_job_categories_wrapper jp_rightside_listing_single_wrapper">
                    <div className="jp_rightside_job_categories_heading">
                      <h4>Job Overview</h4>
                    </div>
                    <div className="jp_jop_overview_img_wrapper">
                      <div className="jp_jop_overview_img">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Fimages.png?alt=media&token=3b3116da-2a46-4e9a-b710-b0940198e57e"
                          alt="post_img"
                        />
                      </div>
                    </div>
                    <div className="jp_job_listing_single_post_right_cont">
                      <div className="jp_job_listing_single_post_right_cont_wrapper">
                        <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                        <p>Webstrot Technology Pvt. Ltd.</p>
                      </div>
                    </div>
                    <div className="jp_job_post_right_overview_btn_wrapper">
                      <div className="jp_job_post_right_overview_btn">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">Part Time</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="jp_listing_overview_list_outside_main_wrapper">
                      <div className="jp_listing_overview_list_main_wrapper">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-calendar"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Date Posted:</li>
                            <li>Octomber 02, 2017</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Location:</li>
                            <li>Los Angeles Califonia PO, 455001</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-info-circle"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Job Title:</li>
                            <li>HTML Developer</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-clock-o"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Hours:</li>
                            <li>40h / Week</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-money"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Salary:</li>
                            <li>$12K - 15k P.A.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-th-large"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Category:</li>
                            <li>Developer</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Experience:</li>
                            <li>1+ Years Experience</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_right_bar_btn_wrapper">
                        <div className="jp_listing_right_bar_btn">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i>{" "}
                                &nbsp;Apply With Facebook
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i>{" "}
                                &nbsp;Apply NOw!
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return <Layout page={JobDetailContent} isShowBanner={false} />;
};

export default JobDetail;
