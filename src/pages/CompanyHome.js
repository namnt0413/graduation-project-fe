import CompanyLayout from "../layouts/CompanyLayout";
import axios from "../api/axios";
import FileView from "../components/files/FileView";
import AuthCompany from "../components/AuthCompany";
import { useState, useEffect } from "react";

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

  const CompanyHomeContent = (
    <>
      {/* <div>Posted Job</div> */}
      {/* <div>Outstanding Candidate</div> */}
      <div style={{ marginBottom: 200, marginRight: 100, marginLeft: 100 }}>
        <div className="p-6 bg-white border-b border-gray-200">
          <h3 className="font-semibold text-xl text-gray-800 leading-tight" style={{fontSize: 30, marginBottom: 20}}>
            Applied List
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
            {applies.map((apply, index) => (
              <tr>
                <td>{apply.user.name}</td>
                <td>{apply.job.title}</td>
                <td>{apply.date}</td>
                <td>
                  {apply.file_url && <FileView fileName={apply.file_url} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  return <CompanyLayout page={CompanyHomeContent} />;
};

export default CompanyHome;
