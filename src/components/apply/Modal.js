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
    const notifySuccess = () => toast.success("Apply successfully!!!");
    const notifyWarning = () => toast.warning("chon 1 phuong thuc");
    const notifyFailed = () => toast.error("That bai");


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
        if (selectedOption === 'cv' && selectedCV) {
            axios.defaults.withCredentials = true;
            const res = await axios.post('/api/apply/create', { user_id: user.id, job_id: selectedJob.id, file_url: selectedCV.title+".pdf", date: '2024-06-08 22:57:03' }, {
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
            const res = await axios.post('/api/apply/create', { user_id: user.id, job_id: selectedJob.id, file_url: filename, date: '2024-06-08 22:57:03' }, {
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
            // Handle case where no option is selected
            notifyFailed()
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && onClose()}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{selectedJob.title}</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <div
                        className={`application-option ${selectedOption === 'cv' ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect('cv')}
                    >
                        <h3>Apply with System CV</h3>
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
                        className={`application-option ${selectedOption === 'file' ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect('file')}
                    >
                        <h3>Apply with Uploaded File</h3>
                        {selectedOption === 'file' && (
                            <UploadFile
                              onUpload={getFilename}
                              jobId={selectedJob.id}
                            />
                        )}
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={handleSubmit}>Submit Application</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
