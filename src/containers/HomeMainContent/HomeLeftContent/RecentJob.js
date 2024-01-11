import "../../../styles/containers/HomeLeftContent/RecentJob.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../lib/axios";
import { NumericFormat } from "react-number-format";
import UploadFile from "../../../components/files/UploadFile";
import { useSelector } from "react-redux";
import AuthUser from "../../../components/AuthUser";


const RecentJob = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [filename, setFilename] = useState("");
  const { getToken, getUser } = AuthUser();
  const [user,setUser] = useState(getUser());

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get("/api/job/get-all-jobs");
      setJobs(res.data.data);
    };
    getJobs();
  }, []);
  console.log(jobs);

  const getFilename = (data) => {
    setFilename(data);
  };

  const apply = async (job_id) => {
    axios.defaults.withCredentials = true;
    const res = await axios.post('/api/apply/create', { user_id: user.id, job_id: job_id, file_url: filename ,date: '2024-01-09 22:57:03' }, {
        xsrfHeaderName: "X-XSRF-TOKEN",
        withCredentials: true
    }).then(async => {
        // setApplyBtn('Applied')
        console.log("Apply OK")
    })
  }

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="cc_featured_product_main_wrapper">
          <div className="jp_hiring_heading_wrapper jp_job_post_heading_wrapper">
            <h2>Recent Jobs</h2>
          </div>
          {/* job types */}
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
              <a href="#best" aria-controls="best" role="tab" data-toggle="tab">
                Featured
              </a>
            </li>
            <li role="presentation">
              <a href="#hot" aria-controls="hot" role="tab" data-toggle="tab">
                Remotely
              </a>
            </li>
            <li role="presentation">
              <a
                href="#trand"
                aria-controls="trand"
                role="tab"
                data-toggle="tab"
              >
                Part Time
              </a>
            </li>
            <li role="presentation">
              <a href="#best" aria-controls="best" role="tab" data-toggle="tab">
                Full Time{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane fade in active" id="best">
            <div className="ss_featured_products">
              <div className="item" data-hash="zero">
                <div className="jp_job_post_main_wrapper_cont">
                  <div className="jp_job_post_main_wrapper">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div className="jp_job_post_side_img">
                          <img
                            src="images/content/job_post_img1.jpg"
                            alt="post_img"
                          />
                        </div>
                        <div className="jp_job_post_right_cont">
                          <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                          <p>Webstrot Technology Pvt. Ltd.</p>
                          <ul>
                            <li>
                              <i className="fa fa-cc-paypal"></i>&nbsp; $12K -
                              15k P.A.
                            </li>
                            <li>
                              <i className="fa fa-map-marker"></i>&nbsp;
                              Caliphonia, PO 455001
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
                <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
                  <div className="jp_job_post_main_wrapper">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div className="jp_job_post_side_img">
                          <img
                            src="images/content/job_post_img2.jpg"
                            alt="post_img"
                          />
                        </div>
                        <div className="jp_job_post_right_cont">
                          <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                          <p>Webstrot Technology Pvt. Ltd.</p>
                          <ul>
                            <li>
                              <i className="fa fa-cc-paypal"></i>&nbsp; $12K -
                              15k P.A.
                            </li>
                            <li>
                              <i className="fa fa-map-marker"></i>&nbsp;
                              Caliphonia, PO 455001
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
                {jobs.map((job, index) => (
                  <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
                    <div className="jp_job_post_main_wrapper">
                      <div className="row">
                        <div
                          className="col-lg-8 col-md-8 col-sm-8 col-xs-12"
                          // onClick={() => {
                          //   navigate(`/job/${job.id}`);
                          // }}
                          onClick={() => openInNewTab(`/job/${job.id}`)}
                        >
                          <div className="jp_job_post_side_img">
                            <img src={job.company.avatar_url} alt="post_img" />
                          </div>
                          <div className="jp_job_post_right_cont">
                            <h4>{job.title}</h4>
                            <p>{job.company.name}</p>
                            <ul>
                              <li>
                                <i className="fa fa-cc-paypal"></i>&nbsp;
                                <NumericFormat
                                  className="currency"
                                  value={job.budget}
                                  displayType="text"
                                  thousandSeparator={true}
                                  suffix=" đ"
                                />
                              </li>
                              <li>
                                <i className="fa fa-map-marker"></i>&nbsp;
                                {job.city.name}
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
                              <UploadFile
                                onUpload={getFilename}
                                jobId={job.id}
                              />
                              </li>
                              <li>
                                <button 
                                  onClick={() => apply(job.id)}
                                >Apply</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* pagination */}
            <div className="video_nav_img_wrapper">
              <div className="video_nav_img">
                <ul>
                  <li>
                    <a className="button secondary url owl_nav" href="#zero">
                      1
                    </a>
                  </li>
                  <li>
                    <a className="button secondary url owl_nav" href="#one">
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      className="button secondary url owl_nav active"
                      href="#two"
                    >
                      3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentJob;
