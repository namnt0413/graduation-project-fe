import Layout from "../layouts/Layout";
import "../styles/pages/CompanyDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCompanyDetailApi } from "../api/company.api"; 
import { NumericFormat } from "react-number-format";

const CompanyDetail = () => {
  const [company, setCompany] = useState([]);
  const param = useParams();

  useEffect(() => {
    const companyId = param.id;
    getCompanyDetailApi(companyId)
      .then((res) => {
        setCompany(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param]);

  const CompanyDetailContent = (
    <>
      <div className="jp_tittle_main_wrapper jp_cs_tittle_main_wrapper">
        <div className="jp_tittle_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_tittle_heading_wrapper">
                <div className="jp_tittle_heading">
                  <h2>{company.name}</h2>
                </div>
                <div className="jp_tittle_breadcrumb_main_wrapper">
                  <div className="jp_tittle_breadcrumb_wrapper">
                    <ul>
                      <li>
                        <a href="#">Home</a>{" "}
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                        <a href="#">Company</a>{" "}
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                        <a href="#">IT</a> <i className="fa fa-angle-right"></i>
                      </li>
                      <li>Webstrot Technology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_cs_com_info_wrapper">
                <div className="jp_cs_com_info_img">
                  <img
                    src={company.avatar_url}
                    alt="job_img"
                  />
                </div>
                <div className="jp_cs_com_info_img_cont">
                  <h2>
                    {company.name}
                  </h2>
                  <h4>
                    {company.email}
                  </h4>
                  <h3>
                    <i className="fa fa-map-marker"></i> &nbsp;&nbsp;
                    {company.address}
                  </h3>
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
                  <h2>Company Description</h2>
                  <p>
                    {company.description}
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

              {/* posting jobs */}
              <div className="jp_listing_related_heading_wrapper">
                <h2>Posting Jobs</h2>
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
                      <h4>Thong tin lien he</h4>
                    </div>
                    <div className="jp_jop_overview_img_wrapper">
                      <div className="jp_jop_overview_img">
                        <img
                          src={company.avatar_url}
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
                            <li>Map:</li>
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
                            <li>{company.address}</li>
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

  return <Layout page={CompanyDetailContent} />;
};

export default CompanyDetail;
