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
import FileView from "../components/files/FileView";
import InterviewModal from "../components/interview/InterviewModal";

const CompanyAppliedByJob = () => {
    const params = useParams()
    const { getCompany } = AuthCompany();
    const navigate = useNavigate();
    const [company, setCompany] = useState(getCompany());
    const [appliedList, setAppliedList] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [bookmarkedApply, setBookmarkedApply] = useState([]);
    const [unbookmarkedApply, setUnbookmarkedApply] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    useEffect(() => {
        const getApplied = async () => {
            const res = await axios.get(`/api/apply/list-by-job/${params.id}`);
            setAppliedList(res.data.data);
        };
        getApplied();

        const getBookmarked = async () => {
            const res = await axios.get(`/api/bookmark/list-candidates/${company.id}`);
            setBookmarks(res.data.data);
        };
        getBookmarked();
    }, []);

    // update bookmark list
    useEffect(() => {
        if (appliedList.length > 0 && bookmarks.length > 0) {
            const { bookmarkedApply, unbookmarkedApply } = checkBookmark(appliedList, bookmarks);
            setBookmarkedApply(bookmarkedApply);
            setUnbookmarkedApply(unbookmarkedApply);
        }
    }, [appliedList, bookmarks]);

    const openInNewTab = (url) => {
        window.open(url, "_self", "noopener,noreferrer");
    };

    const checkBookmark = (apply, bookmarks) => {
        const bookmarkedApply = [];
        const unbookmarkedApply = [...apply];
        bookmarks.forEach(bookmark => {
            const index = unbookmarkedApply.findIndex(a => a.user.id === bookmark.user_id);
            if (index !== -1) {
                bookmarkedApply.push(unbookmarkedApply[index]);
                unbookmarkedApply.splice(index, 1); // Xóa phần tử khỏi mảng unbookmarkedApply
            }
        });
        return { bookmarkedApply, unbookmarkedApply };
    }

    const handleBookmark = (candidateId, companyId) => {
        const unBookmarkedIndex = unbookmarkedApply.findIndex(apply => apply.user.id === candidateId);
        const bookmarkedIndex = bookmarkedApply.findIndex(apply => apply.user.id === candidateId);
        const index = appliedList.findIndex(apply => apply.user.id === candidateId);
        console.log(unBookmarkedIndex, bookmarkedIndex)
    
        if (unBookmarkedIndex !== -1) {
          // Ứng viên chưa được bookmark, thêm vào bookmark
          axios.post(`/api/bookmark/create`, { company_id: companyId , user_id: candidateId })
            .then(() => {
              const updatedCandidate = appliedList[index];

              setBookmarkedApply(prev => [...prev, updatedCandidate]);
              setUnbookmarkedApply(prev => prev.filter(candidate => candidate.user.id !== candidateId));
            })
            .catch(error => console.error(error));
        } else if (bookmarkedIndex !== -1) {
        //   Ứng viên đã được bookmark, xóa khỏi bookmark
          axios.post(`/api/bookmark/delete`, { company_id: companyId , user_id: candidateId })
            .then(() => {
              const updatedCandidate = appliedList[index];
              setUnbookmarkedApply(prev => [...prev, updatedCandidate]);
              setBookmarkedApply(prev => prev.filter(candidate => candidate.user.id !== candidateId));
            })
            .catch(error => console.error(error));
        }
    };

    const handleSchedule = (id) => {
        const candidate = [...bookmarkedApply, ...unbookmarkedApply].find(c => c.user.id === id);
        setSelectedCandidate(candidate);
    };
    
    const CompanyAppliedByJobContent = (
        <>
        <ToastContainer  className="toast-position" />
            <div className="jp_tittle_main_wrapper post-job">
                <div className="jp_tittle_img_overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="jp_tittle_heading_wrapper">
                                <div className="jp_tittle_heading">
                                    <h2>Danh sách ứng viên đã ứng tuyển công việc</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jp_adp_main_section_wrapper">
                <div className="container">
                    <div className="boorkmark-table" style={{ marginBottom: "30px" }}>
                        <div className="bookmarked-title" style={{ display: "flex" }}>
                            <i class="fa-solid fa-star" style={{ marginRight: "10px" }}></i>
                            <h3>Ứng viên đang quan tâm</h3>
                        </div>
                        <table className="bookmarked-list table table-hover" style={{ marginTop: "15px" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Tên ứng viên</th>
                                    <th scope="col">Ngày ứng tuyển</th>
                                    <th scope="col">CV</th>
                                    <th scope="col">Quan tâm</th>
                                    <th scope="col">Hẹn phỏng vấn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookmarkedApply.map((apply, index) => (
                                    <tr>
                                        <td style={{ width: "320px" }}>{apply.user.name}</td>
                                        <td>{moment(apply.date).format("DD MMM, YYYY")}</td>
                                        <td>
                                            {apply.file_url && <FileView fileName={apply.file_url} />}
                                        </td>
                                        <td><i class="fa-solid fa-star"
                                            style={{ marginLeft: "15px", padding: "5px", cursor: "pointer" }}
                                            onClick={() => handleBookmark(apply.user.id, company.id)}
                                        ></i></td>
                                        <td><i class="fa-solid fa-envelope"
                                            style={{ marginLeft: "25px", padding: "5px", cursor: "pointer" }}
                                            onClick={() => handleSchedule(apply.user.id)}
                                        ></i></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="applied-table">
                        <div className="bookmarked-title" style={{ display: "flex" }}>
                            <i class="fa-solid fa-user-tie" style={{ marginRight: "10px" }}></i>
                            <h3>Danh sách Ứng viên</h3>
                        </div>
                        <table className="applid-list table table-hover" style={{ marginTop: "15px" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Tên ứng viên</th>
                                    <th scope="col">Ngày ứng tuyển</th>
                                    <th scope="col">CV</th>
                                    <th scope="col">Quan tâm</th>
                                    <th scope="col">Hẹn phỏng vấn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {unbookmarkedApply.map((apply, index) => (
                                    <tr>
                                        <td style={{ width: "320px" }}>{apply.user.name}</td>
                                        <td>{moment(apply.date).format("DD MMM, YYYY")}</td>
                                        <td>
                                            {apply.file_url && <FileView fileName={apply.file_url} />}
                                        </td>
                                        <td><i class="fa-regular fa-star"
                                            style={{ marginLeft: "15px", padding: "5px", cursor: "pointer" }}
                                            onClick={() => handleBookmark(apply.user.id, company.id)}
                                        ></i></td>
                                        <td><i class="fa-solid fa-envelope"
                                            style={{ marginLeft: "25px", padding: "5px", cursor: "pointer" }}
                                            onClick={() => handleSchedule(apply.user.id)}
                                        ></i></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {selectedCandidate && (
                <InterviewModal
                    candidate={selectedCandidate}
                    onClose={() => setSelectedCandidate(null)}
                />
            )}
            <ToastContainer className="toast-position" />
        </>
    );

    return <CompanyLayout page={CompanyAppliedByJobContent} />;
};

export default CompanyAppliedByJob;
