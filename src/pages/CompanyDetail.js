import Layout from "../layouts/Layout";
import "../styles/pages/CompanyDetail.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCompanyDetailApi } from "../api/company.api";
import { NumericFormat } from "react-number-format";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "../components/apply/Modal";  

const CompanyDetail = () => {
  const [company, setCompany] = useState([]);
  const param = useParams();
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const openInNewTab = url => {
    window.open(url, '_self', 'noopener,noreferrer');
  };

  // handle modal
  const openModal = (selectedJob) => {
    setSelectedJob(selectedJob);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const CompanyDetailContent = (
    <>
      <ToastContainer  className="toast-position" />
      <Modal 
        show={showModal} 
        onClose={closeModal} 
        selectedJob={selectedJob} 
      />
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
                        <Link className="nav-link" to="/" style={{ fontSize: "16px" }}>
                          Trang chủ&nbsp;
                        </Link>
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li>
                        <Link className="nav-link" to="/company-list" style={{ fontSize: "16px" }}>
                          Công ty&nbsp;
                        </Link>
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li>{company.name}</li>
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
                  <h2 style={{ padding: "5px", fontSize: "22px", fontWeight: "600" }}>
                    {company.name}
                  </h2>
                  <h4 style={{ padding: "5px" }}>
                    {company.email}
                  </h4>
                  <h3 style={{ padding: "5px" }}>
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
                  <h2>Giới thiệu công ty</h2>
                  <p>
                    {company.description}
                  </p>
                </div>
              </div>
              <div className="jp_listing_left_bottom_sidebar_wrapper">
                <div className="jp_listing_left_bottom_sidebar_social_wrapper">
                  <ul className="hidden-xs">
                    <li>Chia sẻ :</li>
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
                  </ul>
                </div>
              </div>
              {/* posting jobs */}
              <div className="jp_listing_related_heading_wrapper">
                <h2>Tuyển dụng</h2>
                <div className="jp_listing_related_slider_wrapper">
                  <div className="item">
                    <div className="row">
                      {company.job && company.job.map((job, index) => (
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper">
                              <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12"
                                  onClick={() => openInNewTab(`/job/${job.id}`)}
                                >
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src={company.avatar_url}
                                      alt="post_img"
                                    />
                                  </div>

                                  <div className="jp_job_post_right_cont">
                                    <h4>{job.title}</h4>
                                    <p>{company.name}</p>
                                    <ul style={{ display: "inline-grid" }}>
                                      <li>
                                        <i className="fa fa-money"></i>&nbsp;
                                        <NumericFormat
                                          className="currency"
                                          value={job.salary}
                                          displayType="text"
                                          thousandSeparator={true}
                                          suffix="đ"
                                        />
                                        {job.max_salary != null &&
                                          <>
                                            &nbsp; - &nbsp;
                                            <NumericFormat
                                              className="currency"
                                              value={job.max_salary}
                                              displayType="text"
                                              thousandSeparator={true}
                                              suffix="đ"
                                            />
                                          </>
                                        }
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
                                        <a onClick={() => openModal(job)} style={{ cursor: "pointer" }}>Ứng tuyển</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
                      <h4>Thông tin liên hệ</h4>
                    </div>
                    <div className="jp_jop_overview_img_wrapper">
                      <div className="jp_jop_overview_img">
                        <img
                          src={company.avatar_url}
                          alt="post_img"
                        />
                      </div>
                    </div>
                    <div className="jp_listing_overview_list_outside_main_wrapper">
                      <div className="address jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Địa chỉ:</li>
                            <li>{company.address}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="map jp_listing_overview_list_main_wrapper">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-calendar"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Bản đồ:</li>
                            <li></li>
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
