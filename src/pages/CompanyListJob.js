import CompanyLayout from "../layouts/CompanyLayout";
import "../styles/pages/CompanyListJob.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../lib/axios";
import AuthCompany from "../components/AuthCompany";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { JobStatus } from "../const/JobStatus";
import { Link } from "react-router-dom";
import moment from "moment";

const CompanyListJob = () => {
  const { getCompany } = AuthCompany();
  const navigate = useNavigate();
  const [company, setCompany] = useState(getCompany());
  const [companyJobs, setCompanyJobs] = useState([]);
  const [deleteJobs, setDeleteJobs] = useState([]);
  const notify = () => toast("Delete jobs success!");
  console.log(companyJobs)

  useEffect(() => {
    const getCompanyJobs = async () => {
      const res = await axios.get(`api/job/get-company-jobs/${company.id}`);
      setCompanyJobs(res.data.data);
    };
    getCompanyJobs();
  }, []);

  const handleCheckboxChange = (jobId) => {
    if (deleteJobs.includes(jobId)) {
      setDeleteJobs(deleteJobs.filter((id) => id !== jobId));
    } else {
      setDeleteJobs([...deleteJobs, jobId]);
    }
  };

  const handleDeleteSelected = async () => {
    try {
      const response = await axios.delete("/api/job/deleteJobs", {
        data: { jobIds: deleteJobs },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 200) {
        // Xóa thành công, cập nhật danh sách jobs
        notify();
        setCompanyJobs(
          companyJobs.filter(
            (companyJob) => !deleteJobs.includes(companyJob.id)
          )
        );
        setDeleteJobs([]);
      } else {
        console.error("Error deleting jobs:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting jobs:", error);
    }
  };

  const openInNewTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  const CompanyListJobContent = (
    <>
      <div className="jp_tittle_main_wrapper post-job">
        <div className="jp_tittle_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_tittle_heading_wrapper">
                <div className="jp_tittle_heading">
                  <h2>Danh sách công việc đã đăng</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jp_adp_main_section_wrapper">
        <div className="container">
          <Link className="nav-link newJobBtn" to="/company-post-job">
            Create new job
          </Link>
          <button onClick={handleDeleteSelected} className="deleteBtn">
            Delete All
          </button>
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Công việc</th>
                <th scope="col">Thời hạn</th>
                <th scope="col">Đã ứng tuyển</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Xóa Công việc</th>
              </tr>
            </thead>
            <tbody>
              {companyJobs.map((companyJob, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{companyJob.title}</td>
                  <td>{moment(companyJob.deadline).format("DD MMM, YYYY")}</td>
                  <td style={{ cursor: "pointer" }} 
                    onClick={() =>
                      openInNewTab(`/applied-by-job/${companyJob.id}`)
                    }
                  >
                    {companyJob.apply_count}  ứng viên
                  </td>
                  <td style={{ color: JobStatus[companyJob.status][1] }}>
                    {JobStatus[companyJob.status][0]}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={deleteJobs.includes(companyJob.id)}
                      onChange={() => handleCheckboxChange(companyJob.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer  className="toast-position" />
    </>
  );

  return <CompanyLayout page={CompanyListJobContent} />;
};

export default CompanyListJob;
