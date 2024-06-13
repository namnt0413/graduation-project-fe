import CompanyLayout from "../layouts/CompanyLayout";
import axios from "../api/axios";
import FileView from "../components/files/FileView";
import AuthCompany from "../components/AuthCompany";
import { useState, useEffect, useRef } from "react";
import Pagination from "../components/Pagination";

const CompanyHome = () => {
  const { getCompany } = AuthCompany();
  const [company, setCompany] = useState(getCompany());
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [applies, setApplies] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get(`/job/get-company-jobs/${company.id}`);
      setJobs(res.data.data);
    };
    getJobs();
    const getCandidates = async () => {
      const res = await axios.get("/user/get-finding-job-user");
      setCandidates(res.data.data);
    };
    getCandidates();
    const getApplies = async () => {
      const res = await axios.get(`/apply/list-by-company/${company.id}`);
      setApplies(res.data.data);
    };
    getApplies();
  }, []);
  console.log(candidates);

  // handle pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  // Tính tổng số trang
  const totalPages = Math.ceil(applies.length / itemsPerPage);
  // Tạo mảng chứa dữ liệu của trang hiện tại
  const applySlices = applies.slice(
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

  const CompanyHomeContent = (
    <>
      <div className="company-home-container" style={{ margin: "0px 100px" }}>
        <div className="list-applied p-6 bg-white border-b border-gray-200" ref={topRef}>
          <h3 className="font-semibold text-xl text-gray-800 leading-tight" style={{ fontSize: 30, marginBottom: 20 }}>
          <i class="fa-solid fa-user-tie"></i>  &nbsp;&nbsp;Danh sách ứng tuyển
          </h3>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Candidate</th>
              <th scope="col">Job</th>
              <th scope="col">Applied Date</th>
              <th scope="col">CV</th>
            </tr>
          </thead>
          <tbody>
            {applySlices.map((applySlice, index) => (
              <tr>
                <td>{applySlice.user.name}</td>
                <td>{applySlice.job.title}</td>
                <td>{applySlice.date}</td>
                <td>
                  {applySlice.file_url && <FileView fileName={applySlice.file_url} />}
                </td>
              </tr>
            ))}
          </tbody>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </table>

        <div className="list-interview" style={{ margin: "50px 0" }}>
          <h3 className="font-semibold text-xl text-gray-800 leading-tight" style={{ fontSize: 30, marginBottom: 20 }}>
            <i class="fa-solid fa-calendar-days"></i> &nbsp;&nbsp;Lịch hẹn phỏng vấn
          </h3>
        </div>

      </div>
    </>
  );

  return <CompanyLayout page={CompanyHomeContent} />;
};

export default CompanyHome;
