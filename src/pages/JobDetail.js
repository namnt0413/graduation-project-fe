import Layout from "../layouts/Layout";
import "../styles/pages/JobDetail.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobDetailApi } from "../api/job.api";
import { NumericFormat } from "react-number-format";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "../components/apply/Modal";  
import moment from "moment";
import 'moment/locale/vi';

const JobDetail = () => {
  const [job, setJob] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const param = useParams();
  moment.locale('vi');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const jobId = param.id;
    getJobDetailApi(jobId)
      .then((res) => {
        setJob(res.data.data.job[0]);
        setJobCategories(res.data.data.categories)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param]);

  // handle modal
  const openModal = (selectedJob) => {
    setSelectedJob(selectedJob);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const JobDetailContent = (
    <>
      <ToastContainer  className="toast-position" />
      <Modal 
        show={showModal} 
        onClose={closeModal} 
        selectedJob={selectedJob} 
      />
      {/* job title */}
      <div className="jp_tittle_main_wrapper">
        <div className="jp_tittle_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_tittle_heading_wrapper">
                <div className="job-title col-md-8">
                <div className="jp_tittle_heading">
                  <h2>{job.title}</h2>
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
                        <Link className="nav-link" to="/job-list" style={{ fontSize: "16px" }}>
                          Công việc&nbsp;
                        </Link>
                        <i className="fa fa-angle-right"></i>
                      </li>
                      <li>{job.title}</li>
                    </ul>
                  </div>
                </div>
                </div>
                <div className="job-apply col-md-4">
                <div className="jp_listing_right_bar_btn_wrapper">
                        <div className="jp_listing_right_bar_btn">
                          <ul>
                            <li>
                              <a onClick={() => openModal(job)} style={{ cursor: "pointer" }}>
                                <i className="fa fa-plus-circle" ></i>{" "}
                                &nbsp;ứng tuyển
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i>{" "}
                                &nbsp;Yêu thích
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

      <div className="jp_listing_single_main_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="jp_listing_left_sidebar_wrapper">
                <div className="jp_job_des">
                  <h2>Mô tả công việc </h2>
                  <p>
                    {job.description}
                  </p>
                </div>
                <div className="jp_job_res jp_job_qua">
                  <h2>Yêu cầu ứng viên</h2>
                  <p>
                    {job.requirement}
                  </p>
                </div>
                <div className="jp_job_apply">
                  <h2>Quyền lợi</h2>
                  <p>
                    {job.right}
                  </p>
                </div>
                <div className="jp_job_apply">
                  <h2>Địa điểm làm việc</h2>
                  <p>
                    {job.city?.name}
                  </p>
                </div>
                <div className="jp_job_apply">
                  <h2>Hạn chót ứng tuyển</h2>
                  <p style={{ color: "red" }}>
                    {moment(job.deadline).format("DD/MM/YYYY")}
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
              <div className="jp_listing_related_heading_wrapper">
                <h2>Công việc liên quan</h2>
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
                      <h4>Thông tin chung</h4>
                    </div>
                    <div className="jp_jop_overview_img_wrapper">
                      <div className="jp_jop_overview_img">
                        <img src={job.company?.avatar_url} alt="post_img" />
                      </div>
                    </div>
                    <div className="jp_job_listing_single_post_right_cont">
                      <div className="jp_job_listing_single_post_right_cont_wrapper">
                        <h4>{job.title}</h4>
                        <p>{job.company?.name}</p> 
                      </div>
                    </div>
                    <div className="jp_listing_overview_list_outside_main_wrapper">
                      <div className="jp_listing_overview_list_main_wrapper">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-calendar"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Thời hạn ứng tuyển:</li>
                            <li>{moment(job.deadline).format("DD/MM/YYYY")}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Địa điểm:</li>
                            <li>{job.company?.address}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-money"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Mức lương:</li>
                            <li>
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
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Yêu cầu kinh nghiệm:</li>
                            <li>{job.exp?.name}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_overview_list_main_wrapper jp_listing_overview_list_main_wrapper2">
                        <div className="jp_listing_list_icon">
                          <i className="fa fa-th-large"></i>
                        </div>
                        <div className="jp_listing_list_icon_cont_wrapper">
                          <ul>
                            <li>Ngành nghề:</li>
                            <div className="job-categories">
                              {
                                jobCategories.map((jobCategory) => (
                                  <span className="job-category">{jobCategory.name}</span>
                                ))
                              }

                            </div>
                          </ul>
                        </div>
                      </div>
                      <div className="jp_listing_right_bar_btn_wrapper">
                        <div className="jp_listing_right_bar_btn">
                          <ul>
                            <li>
                              <a onClick={() => openModal(job)} style={{ cursor: "pointer" }}>
                                <i className="fa fa-plus-circle" ></i>{" "}
                                &nbsp;ứng tuyển
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i>{" "}
                                &nbsp;Yêu thích
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
