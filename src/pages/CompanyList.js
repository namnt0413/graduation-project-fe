import Layout from "../layouts/Layout";
import "../styles/pages/JobList.css";
import "../styles/pages/CompanyList.css";
import { useEffect, useState, useRef } from "react";
import axios from "../lib/axios";
import AuthUser from "../components/AuthUser";
import Select from "react-select";
import { Salary } from "../const/salary";
import { NumericFormat } from "react-number-format";
import Pagination from "../components/Pagination";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "../components/apply/Modal";

const CompanyList = () => {
  const { getToken, getUser } = AuthUser();
  const [user, setUser] = useState(getUser());
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const res = await axios.get("/api/company/get-all-companies");
      setCompanies(res.data.data);
    };
    getCompanies();
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  // handle pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  // Tính tổng số trang
  const totalPages = Math.ceil(companies.length / itemsPerPage);
  // Tạo mảng chứa dữ liệu của trang hiện tại
  const companySlices = companies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // scroll to top
  const topRef = useRef(null);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // handle modal
  const openModal = (selectedJob) => {
    // setSelectedJob(selectedJob);
    // setShowModal(true);
  };

  const closeModal = () => {
    // setShowModal(false);
    // setSelectedJob(null);
  };

  const CompanyListContent = (
    <>
      <div class="jp_listing_sidebar_main_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="jp_listing_heading_wrapper">
                <h2>
                  Danh sách công ty nổi bật
                </h2>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_listing_tabs_wrapper">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div class="gc_causes_select_box_wrapper">
                        <div class="gc_causes_select_box">
                          <select>
                            <option>Địa điểm</option>
                            <option>Hà Nội</option>
                            <option>TPHCM</option>
                            <option>Bình Dương</option>
                            <option>Đà Nẵng</option>
                            <option>Hải Phòng</option>
                          </select>
                          <i class="fa fa-angle-down"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                      <div class="gc_causes_view_tabs_wrapper">
                        <div class="gc_causes_view_tabs">
                          <ul class="nav nav-pills">
                            <li class="active">
                              <a data-toggle="pill" href="#grid">
                                <i class="fa fa-th-large"></i>
                              </a>
                            </li>
                            <li>
                              <a data-toggle="pill" href="#list">
                                <i class="fa fa-list"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                      <div class="gc_causes_search_box_wrapper gc_causes_search_box_wrapper2">
                        <div class="gc_causes_search_box">
                          <p>
                            You're Watching &nbsp;<span>01 to 20</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="tab-content">
                    <div id="grid" class="tab-pane fade in active">
                      <div class="row">
                        {companySlices && companySlices.map(
                          (companySlice, index) => (
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                              onClick={() =>
                                openInNewTab(
                                  `/company/${companySlice.id}`
                                )
                              }
                              style={{ cursor: "pointer" }}
                            >
                              <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                <div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                  <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div class="jp_job_post_side_img company-avatar">
                                        <img
                                          src={companySlice.avatar_url}
                                          alt="post_img"
                                        />
                                      </div>
                                      <div class="jp_job_post_right_cont jp_job_post_grid_right_cont jp_cl_job_cont">
                                        <p>{companySlice.name}</p>
                                        <ul>
                                          <li>
                                            <i class="fa fa-map-marker"></i>&nbsp;
                                            {companySlice.city.name}
                                          </li>
                                        </ul>
                                        <div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper jp_cl_aply_btn">
                                          <ul>
                                            <li>
                                              <a href="#">{companySlice.job_count} &nbsp;công việc đang tuyển</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                        {/* pagination */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                          <div className="pager_wrapper gc_blog_pagination">
                            <Pagination
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={handlePageChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="list" class="tab-pane fade">
                      <div class="row">
                      {companySlices && companySlices.map(
                          (companySlice, index) => (
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper">
                              <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div class="jp_job_post_side_img company-avatar-row">
                                    <img
                                      src={companySlice.avatar_url}
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_cl_job_cont">
                                    <p>{companySlice.name}</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        {companySlice.city.name}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div class="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">{companySlice.job_count}&nbsp; Công việc đang tuyển</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                          )
                        )}
                        {/* pagination */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                          <div className="pager_wrapper gc_blog_pagination">
                            <Pagination
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={handlePageChange}
                            />
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
    </>
  );

  return <Layout page={CompanyListContent} isShowBanner={false} />;
};

export default CompanyList;
