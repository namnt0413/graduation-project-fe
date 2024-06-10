import Layout from "../layouts/Layout";
import "../styles/pages/JobList.css";
import { useEffect, useState } from "react";
import axios from "../lib/axios";
import AuthUser from "../components/AuthUser";
import Select from "react-select";
import { Salary } from "../const/salary";
import { NumericFormat } from "react-number-format";

const JobList = () => {
  const { getToken, getUser } = AuthUser();
  const [user, setUser] = useState(getUser());

  const [position, setPosition] = useState(null);
  const [title, setTitle] = useState("");
  const [positions, setPositions] = useState([]);

  const [recommendJobs, setRecommendJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [exps, setExps] = useState([]);
  const [city, setCity] = useState();
  const [exp, setExp] = useState();
  const [category, setCategory] = useState();
  const [salary, setSalary] = useState();

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
    const categoryList = category.map((item) => item.value).join(",");
    const getRecommendJobs = async () => {
      const res = await axios.get("/api/job/recommend-jobs", {
        params: {
          exp: exp,
          city: city,
          salary: salary,
          category: categoryList,
        },
      });
      setRecommendJobs(res.data.recommendJobs);
    };
    getRecommendJobs();
  };

  const openInNewTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  const JobListContent = (
    <>
      <div className="jp_listing_sidebar_main_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_listing_heading_wrapper">
                <h2>Danh sach cong viec phu hop</h2>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                      <div className="jp_form_location_wrapper">
                        <i className="fa fa-dot-circle-o first_icon"></i>
                        <select
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                        >
                          <option value={null}>Địa điểm</option>
                          {cities.map((city, index) => (
                            <option key={index} value={city.id || ""}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                        <i className="fa fa-angle-down second_icon"></i>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                      <div className="jp_form_exper_wrapper">
                        <Select
                          isMulti
                          options={convertedCategories}
                          value={category}
                          onChange={setCategory}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                      <div className="jp_form_location_wrapper">
                        <i className="fa fa-dot-circle-o first_icon"></i>
                        <select
                          onChange={(e) => {
                            setExp(e.target.value);
                          }}
                        >
                          <option value={null}>Kinh nghiệm</option>
                          {exps.map((exp, index) => (
                            <option key={index} value={exp.id || ""}>
                              {exp.name}
                            </option>
                          ))}
                        </select>
                        <i className="fa fa-angle-down second_icon"></i>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <div className="jp_form_exper_wrapper">
                        <i className="fa fa-dot-circle-o first_icon"></i>
                        <select
                          onChange={(e) => {
                            setSalary(e.target.value);
                          }}
                        >
                          <option value={null}>Mức lương</option>
                          {Salary.map((salary, index) => (
                            <option key={index + 1} value={index + 1 || ""}>
                              {salary}
                            </option>
                          ))}
                        </select>
                        <i className="fa fa-angle-down second_icon"></i>
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
                  <div className="jp_listing_tabs_wrapper">
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
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                      <div className="gc_causes_search_box_wrapper gc_causes_search_box_wrapper2">
                        <div className="gc_causes_search_box">
                          <p>Trang 01 tới 20</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="tab-content">
                    <div id="grid" className="tab-pane fade in active">
                      <div className="row">
                        {/* grid jobs */}
                        {recommendJobs.map((recommendJob, index) => (
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                              <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                                <div className="row">
                                  <div
                                    className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                    onClick={() =>
                                      openInNewTab(`/job/${recommendJob.id}`)
                                    }
                                  >
                                    <div className="jp_job_post_side_img">
                                      <img
                                        src={recommendJob.company.avatar_url}
                                        alt="post_img"
                                      />
                                    </div>
                                    <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                      <h4>{recommendJob.title}</h4>
                                      <p>{recommendJob.company.name}</p>
                                      <ul>
                                        <li>
                                          <i className="fa fa-money"></i>&nbsp;
                                          <NumericFormat
                                            className="currency"
                                            value={recommendJob.salary}
                                            displayType="text"
                                            thousandSeparator={true}
                                            suffix="đ"
                                          />
                                          {recommendJob.max_salary != null && (
                                            <>
                                              &nbsp; - &nbsp;
                                              <NumericFormat
                                                className="currency"
                                                value={recommendJob.max_salary}
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
                                          <a href="#">Apply</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* pagination */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                          <div className="pager_wrapper gc_blog_pagination">
                            <ul className="pagination">
                              <li>
                                <a href="#">Priv.</a>
                              </li>
                              <li>
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li className="hidden-xs">
                                <a href="#">4</a>
                              </li>
                              <li>
                                <a href="#">Next</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="list" className="tab-pane fade">
                      <div className="row">
                        {/* row jobs */}
                        {recommendJobs.map((recommendJob, index) => (
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                              <div className="jp_job_post_main_wrapper">
                                <div className="row">
                                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12"
                                    onClick={() =>
                                      openInNewTab(`/job/${recommendJob.id}`)
                                    }
                                  >
                                    <div className="jp_job_post_side_img">
                                    <img
                                        src={recommendJob.company.avatar_url}
                                        alt="post_img"
                                      />
                                    </div>
                                    <div className="jp_job_post_right_cont">
                                      <h4>{recommendJob.title}</h4>
                                      <p>{recommendJob.company.name}</p>
                                      <ul>
                                        <li>
                                          <i className="fa fa-money"></i>&nbsp;
                                          <NumericFormat
                                            className="currency"
                                            value={recommendJob.salary}
                                            displayType="text"
                                            thousandSeparator={true}
                                            suffix="đ"
                                          />
                                          {recommendJob.max_salary != null && (
                                            <>
                                              &nbsp; - &nbsp;
                                              <NumericFormat
                                                className="currency"
                                                value={recommendJob.max_salary}
                                                displayType="text"
                                                thousandSeparator={true}
                                                suffix="đ"
                                              />
                                            </>
                                          )}
                                        </li>
                                        <li>
                                          <i className="fa fa-map-marker"></i>
                                          &nbsp; {recommendJob.addresss}
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
                        ))}

                        {/* pagination */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                          <div className="pager_wrapper gc_blog_pagination">
                            <ul className="pagination">
                              <li>
                                <a href="#">Priv.</a>
                              </li>
                              <li>
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li className="hidden-xs">
                                <a href="#">4</a>
                              </li>
                              <li>
                                <a href="#">Next</a>
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
    </>
  );

  return <Layout page={JobListContent} isShowBanner={false} />;
};

export default JobList;
