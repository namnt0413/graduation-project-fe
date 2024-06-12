import "../../../styles/containers/HomeLeftContent/RecentJob.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "../../../lib/axios";
import { NumericFormat } from "react-number-format";
import AuthUser from "../../../components/AuthUser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "../../../components/Pagination";
import Modal from "../../../components/apply/Modal";  

const RecentJob = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const { getToken, getUser } = AuthUser();
  const [user,setUser] = useState(getUser());
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get("/api/job/get-all-jobs");
      setJobs(res.data.data);
    };
    getJobs();
  }, []);

  const openInNewTab = url => {
    window.open(url, '_self', 'noopener,noreferrer');
  };

    // handle pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    // Tính tổng số trang
    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    // Tạo mảng chứa dữ liệu của trang hiện tại
    const jobsSlices = jobs.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    // scroll to top
    const topRef = useRef(null);
    const handlePageChange = (page) => {
      setCurrentPage(page);
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <>
      <ToastContainer  className="toast-position" />
      <Modal 
        show={showModal} 
        onClose={closeModal} 
        selectedJob={selectedJob} 
      />
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" ref={topRef}>
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
                {jobsSlices.map((jobsSlice, index) => (
                  <div className="jp_job_post_main_wrapper_cont jp_job_post_main_wrapper_cont2">
                    <div className="jp_job_post_main_wrapper">
                      <div className="row">
                        <div
                          className="col-lg-8 col-md-8 col-sm-8 col-xs-12"
                          onClick={() => openInNewTab(`/job/${jobsSlice.id}`)}
                        >
                          <div className="jp_job_post_side_img">
                            <img src={jobsSlice.company.avatar_url} alt="post_img" />
                          </div>
                          <div className="jp_job_post_right_cont">
                            <h4>{jobsSlice.title}</h4>
                            <p>{jobsSlice.company.name}</p>
                            <ul>
                              <li>
                                <i className="fa fa-money"></i>&nbsp;
                                <NumericFormat
                                  className="currency"
                                  value={jobsSlice.salary}
                                  displayType="text"
                                  thousandSeparator={true}
                                  suffix="đ"
                                />
                                {jobsSlice.max_salary!=null &&
                                  <>
                                  &nbsp; - &nbsp;
                                  <NumericFormat
                                    className="currency"
                                    value={jobsSlice.max_salary}
                                    displayType="text"
                                    thousandSeparator={true}
                                    suffix="đ"
                                  />
                                  </>
                                }
                              </li>
                              <li>
                                <i className="fa fa-map-marker"></i>&nbsp;
                                {jobsSlice.city.name}
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
                                <button onClick={() => openModal(jobsSlice)}>
                                  Ứng tuyển
                                </button>
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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />

        </div>
      </div>
    </>
  );
};

export default RecentJob;
