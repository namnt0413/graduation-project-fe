// src/JobApplicationModal.js
import React, { useState, useEffect } from 'react';
import '../../styles/components/apply/Modal.css';
import AuthUser from "../../components/AuthUser";
import axios from '../../lib/axios';
import UploadFile from '../files/UploadFile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ show, onClose, selectedJob }) => {
    const { getToken, getUser } = AuthUser();
    const [user, setUser] = useState(getUser());
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedCV, setSelectedCV] = useState(null);
    const [listCvs, setListCvs] = useState([]);
    const [filename, setFilename] = useState();
    const notifySuccess = () => toast.success("Ứng tuyển thành công!");
    const notifyFailed = () => toast.error("Ứng tuyển thất bại!");

    useEffect(() => {
        const getListCvs = async () => {
            const res = await axios.get(`api/cv/get-list-cvs/${user.id}`);
            setListCvs(res.data.data);
        };
        getListCvs();
    }, []);

    if (!show) {
        return null;
    }

    const formatDateTime = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };

    const getFilename = (data) => {
        setFilename(data);
      };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleCVSelect = (selectedCV) => {
        setSelectedCV(selectedCV);
    };

    const handleSubmit = async () => {
        const currentDate = new Date();
        const curentDateTime = formatDateTime(currentDate);
        if (selectedOption === 'cv' && selectedCV) {
            axios.defaults.withCredentials = true;
            const res = await axios.post('/api/apply/create', { user_id: user.id, job_id: selectedJob.id, file_url: selectedCV.title+".pdf", date: curentDateTime }, {
                xsrfHeaderName: "X-XSRF-TOKEN",
                withCredentials: true
            }).then(async => {
                notifySuccess()
                setFilename(null)
                onClose();
            }).catch((error) => {
                notifyFailed()
                onClose();
              });
            onClose();
        } else if (selectedOption === 'file' && filename) {
            axios.defaults.withCredentials = true;
            const res = await axios.post('/api/apply/create', { user_id: user.id, job_id: selectedJob.id, file_url: filename, date: curentDateTime }, {
                xsrfHeaderName: "X-XSRF-TOKEN",
                withCredentials: true
            }).then(async => {
                notifySuccess()
                setFilename(null)
                onClose();
            }).catch((error) => {
                notifyFailed()
                onClose();
              });
        } else {
            notifyFailed()
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && onClose()}>
            <div className="modal-content">
                <div className="modal-header">
                       <h3 className='apply-job-title'>{selectedJob.title}</h3>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <div className='modal-body-title'>
                        Lựa chọn phương thức để ứng tuyển
                    </div>
                    <div
                        className={`select-cv application-option ${selectedOption === 'cv' ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect('cv')}
                    >
                        <h3 className={`select-cv-title ${selectedOption === 'cv' ? 'selected' : ''}`}>Chọn CV trong thư viện CV của tôi</h3>
                        {selectedOption === 'cv' && (
                            <div className="cv-selection">
                                {listCvs.map((cv, index) => (
                                    <div
                                        key={index}
                                        className={`cv-item ${selectedCV === cv ? 'selected' : ''}`}
                                        onClick={() => handleCVSelect(cv)}
                                    >
                                        {cv.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div
                        className={`upload-cv application-option ${selectedOption === 'file' ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect('file')}
                    >
                        <h3 className={`upload-cv-title ${selectedOption === 'file' ? 'selected' : ''}`}>Tải CV lên từ máy tính</h3>
                        <h4><i>(hỗ trợ định dạng PDF dưới 50mb)</i></h4>
                        {selectedOption === 'file' && (
                            <UploadFile
                              onUpload={getFilename}
                              jobId={selectedJob.id}
                            />
                        )}
                    </div>
                </div>
                <div className="modal-footer">
                    <button className='cancel-button col-md-3' onClick={onClose}>Hủy</button>
                    <button className='apply-button col-md-9' onClick={handleSubmit}>Nộp hồ sơ ứng tuyển</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
