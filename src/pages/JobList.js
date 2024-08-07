import Layout from "../layouts/Layout";
import "../styles/pages/JobList.css";
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

const JobList = () => {
  const { getToken, getUser } = AuthUser();
  const [user, setUser] = useState(getUser());
  const [recommendJobs, setRecommendJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [exps, setExps] = useState([]);
  const [city, setCity] = useState();
  const [exp, setExp] = useState();
  const [category, setCategory] = useState();
  const [salary, setSalary] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const getExps = async () => {
      const res = await axios.get("/api/exp/all");
      setExps(res.data.data);
    };
    getExps();
    const getCategories = async () => {
      const res = await axios.get("/api/category/all");
      setCategories(res.data.data);
    };
    getCategories();
    const getCities = async () => {
      const res = await axios.get("/api/city/all");
      setCities(res.data.data);
    };
    getCities();

    const getJobs = async () => {
      const res = await axios.get("/api/job/get-all-jobs");
      setRecommendJobs(res.data.data);
    };
    getJobs();
  }, []);

  function convertCategories(categories) {
    return categories.map((category) => ({
      label: category.name,
      value: category.id,
    }));
  }
  const convertedCategories = convertCategories(categories);

  const handleRecomendJobs = () => {
    const categoryList = category
      ? category.map((item) => item.value).join(",")
      : undefined;
    console.log(city, exp, salary, categoryList);

    const getRecommendJobs = async () => {
      const params = {};

      if (exp !== undefined && exp !== "") {
        params.exp = exp;
      }

      if (city !== undefined && city !== "") {
        params.city = city;
      }

      if (salary !== undefined && salary !== "") {
        params.salary = salary;
      }

      if (categoryList !== undefined && categoryList !== "") {
        params.category = categoryList;
      }

      const res = await axios.get("/api/job/recommend-jobs", { params });
      setRecommendJobs(res.data.recommendJobs);
    };

    getRecommendJobs();
  };

  const openInNewTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  // handle pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  // Tính tổng số trang
  const totalPages = Math.ceil(recommendJobs.length / itemsPerPage);
  // Tạo mảng chứa dữ liệu của trang hiện tại
  const recommendJobsSlices = recommendJobs.slice(
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
    setSelectedJob(selectedJob);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const JobListContent = (
    <>
      <ToastContainer  className="toast-position" />
      <Modal 
        show={showModal} 
        onClose={closeModal} 
        selectedJob={selectedJob} 
      />
      <div className="jp_listing_sidebar_main_wrapper container" ref={topRef}>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 hidden-sm hidden-xs">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                <div class="jp_rightside_job_categories_heading">
                  <h4>Công việc theo địa điểm</h4>
                </div>
                <div class="jp_rightside_job_categories_content">
                  <div class="handyman_sec1_wrapper">
                    <div class="content" style={{ marginTop: 0 }}>
                    <ul>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Hà Nội <span>(214)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        TPHCM <span>(214)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Đà Nẵng <span>(154)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Hải Phòng <span>(157)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Bình Dương <span>(154)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-plus-circle"></i>{" "}
                      <a href="#">Xem tất cả</a>
                    </li>
                  </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                <div class="jp_rightside_job_categories_heading">
                  <h4>Công việc theo lĩnh vực</h4>
                </div>
                <div class="jp_rightside_job_categories_content">
                  <div class="handyman_sec1_wrapper">
                    <div class="content" style={{ marginTop: 0 }}>
                    <ul>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Thiết kế đồ họa <span>(114)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        IT, phần mềm <span>(114)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Kế toán <span>(254)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Hành chính, công vụ <span>(157)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Y tế <span>(154)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Kinh doanh <span>(154)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Tài chính, ngân hàng <span>(150)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Nhân viên bán hàng <span>(221)</span>
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
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="jp_add_resume_wrapper jp_job_location_wrapper">
                <div class="jp_add_resume_img_overlay"></div>
                <div class="jp_add_resume_cont">
                  <img src="images/content/resume_logo.png" alt="logo" />
                  <h4>Kết nối ứng viên với nhà tuyển dụng đễ dàng!</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-plus-circle"></i> &nbsp;ĐĂNG KÝ NGAY
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-9">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_listing_tabs_wrapper list-tabs">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="gc_causes_view_tabs_wrapper">
                    <div className="gc_causes_view_tabs">
                      <ul className="nav nav-pills">
                        <li className="active">
                          <a data-toggle="pill" href="#grid">
                            <i className="fa fa-th-large"></i>
                          </a>
                        </li>
                        <li>
                          <a data-toggle="pill" href="#list">
                            <i className="fa fa-list"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-5 col-sm-5 col-xs-12">
                  <div className="gc_causes_search_box_wrapper gc_causes_search_box_wrapper2">
                    <div className="gc_causes_search_box jobs-header">
                      Danh sách công việc HOT
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  {/* filter bar */}
                  <div className="filtar-bar col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-10  col-md-10 col-sm-12 col-xs-12">
                      <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
                        <div className="jp_form_location_wrapper">
                          <i className="fa fa-dot-circle-o first_icon"></i>
                          <select
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                          >
                            <option value="">Địa điểm</option>
                            {cities.map((city, index) => (
                              <option key={index} value={city.id || ""}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                          <i className="fa fa-angle-down second_icon"></i>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-3 col-sm-12 col-xs-12">
                        <div className="jp_form_exper_wrapper">
                          <Select
                            isMulti
                            options={convertedCategories}
                            value={category}
                            onChange={setCategory}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-3 col-sm-12 col-xs-12">
                        <div className="jp_form_location_wrapper">
                          <i className="fa fa-dot-circle-o first_icon"></i>
                          <select
                            onChange={(e) => {
                              setExp(e.target.value);
                            }}
                          >
                            <option value="">Kinh nghiệm</option>
                            {exps.map((exp, index) => (
                              <option key={index} value={exp.id || ""}>
                                {exp.name}
                              </option>
                            ))}
                          </select>
                          <i className="fa fa-angle-down second_icon"></i>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-3 col-sm-12 col-xs-12">
                        <div className="jp_form_exper_wrapper">
                          <i className="fa fa-dot-circle-o first_icon"></i>
                          <select
                            onChange={(e) => {
                              setSalary(e.target.value);
                            }}
                          >
                            <option value="">Mức lương</option>
                            {Salary.map((salary, index) => (
                              <option key={index + 1} value={index + 1 || ""}>
                                {salary}
                              </option>
                            ))}
                          </select>
                          <i className="fa fa-angle-down second_icon"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2  col-md-2 col-sm-12 col-xs-12">
                      <div className="jp_form_btn_wrapper">
                        <ul>
                          <li>
                            <button
                              className="search-button"
                              onClick={handleRecomendJobs}
                            >
                              <i className="fa fa-search"></i> Tìm kiếm
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="tab-content">
                    <div id="grid" className="tab-pane fade in active">
                      <div className="row">
                        {/* grid jobs */}
                        {recommendJobsSlices.map(
                          (recommendJobsSlice, index) => (
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                  <div className="row">
                                    <div
                                      className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                      onClick={() =>
                                        openInNewTab(
                                          `/job/${recommendJobsSlice.id}`
                                        )
                                      }
                                    >
                                      <div className="jp_job_post_side_img">
                                        <img
                                          src={
                                            recommendJobsSlice.company
                                              .avatar_url
                                          }
                                          alt="post_img"
                                        />
                                      </div>
                                      <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                        <div className="job-title">
                                          {recommendJobsSlice.title}
                                        </div>
                                        <p className="company-name">
                                          {recommendJobsSlice.company.name}
                                        </p>
                                        <ul>
                                          <li>
                                            <i className="fa fa-money"></i>
                                            &nbsp;
                                            <NumericFormat
                                              className="currency"
                                              value={recommendJobsSlice.salary}
                                              displayType="text"
                                              thousandSeparator={true}
                                              suffix="đ"
                                            />
                                            {recommendJobsSlice.max_salary !=
                                              null && (
                                              <>
                                                &nbsp; - &nbsp;
                                                <NumericFormat
                                                  className="currency"
                                                  value={
                                                    recommendJobsSlice.max_salary
                                                  }
                                                  displayType="text"
                                                  thousandSeparator={true}
                                                  suffix="đ"
                                                />
                                              </>
                                            )}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                      <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                        <ul>
                                          <li>
                                            <a href="#">
                                              <i className="fa fa-heart-o"></i>
                                            </a>
                                          </li>

                                          <li>
                                            <button onClick={() => openModal(recommendJobsSlice)}>
                                              Ứng tuyển
                                            </button>
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

                    <div id="list" className="tab-pane fade">
                      <div className="row">
                        {/* row jobs */}
                        {recommendJobsSlices.map(
                          (recommendJobsSlice, index) => (
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                <div className="jp_job_post_main_wrapper">
                                  <div className="row">
                                    <div
                                      className="col-lg-8 col-md-8 col-sm-8 col-xs-12"
                                      onClick={() =>
                                        openInNewTab(
                                          `/job/${recommendJobsSlice.id}`
                                        )
                                      }
                                    >
                                      <div className="jp_job_post_side_img">
                                        <img
                                          src={
                                            recommendJobsSlice.company
                                              .avatar_url
                                          }
                                          alt="post_img"
                                        />
                                      </div>
                                      <div className="jp_job_post_right_cont">
                                        <h3>{recommendJobsSlice.title}</h3>
                                        <p>{recommendJobsSlice.company.name}</p>
                                        <ul>
                                          <li>
                                            <i className="fa fa-money"></i>
                                            &nbsp;
                                            <NumericFormat
                                              className="currency"
                                              value={recommendJobsSlice.salary}
                                              displayType="text"
                                              thousandSeparator={true}
                                              suffix="đ"
                                            />
                                            {recommendJobsSlice.max_salary !=
                                              null && (
                                              <>
                                                &nbsp; - &nbsp;
                                                <NumericFormat
                                                  className="currency"
                                                  value={
                                                    recommendJobsSlice.max_salary
                                                  }
                                                  displayType="text"
                                                  thousandSeparator={true}
                                                  suffix="đ"
                                                />
                                              </>
                                            )}
                                          </li>
                                          <li style={{ marginRight: "20px" }}>
                                            <i className="fa fa-map-marker"></i>
                                            &nbsp;{" "}
                                            {recommendJobsSlice.city.name}
                                          </li>
                                          <li>
                                            <i class="fa-solid fa-business-time"></i>
                                            &nbsp;Còn{" "}
                                            <b>
                                              {
                                                recommendJobsSlice.remaining_date
                                              }
                                            </b>{" "}
                                            ngày để ứng tuyển
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
                                            <button onClick={() => openModal(recommendJobsSlice)}>
                                              Ứng tuyển
                                            </button>
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

  return <Layout page={JobListContent} isShowBanner={false} />;
};

export default JobList;
