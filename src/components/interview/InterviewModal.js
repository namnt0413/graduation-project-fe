import React, { useState } from 'react';
import '../../styles/components/interview/InterviewModal.css'
import DatetimePicker from '../times/DatetimePicker';
import DatetimeHandle from '../times/DatetimeHandle';
import axios from '../../lib/axios';
import AuthCompany from '../AuthCompany';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InterviewModal({ candidate, onClose }) {
    const { getCompany } = AuthCompany();
    const [company, setCompany] = useState(getCompany());
    const [type, setType] = useState(); // 'online' or 'offline'
    const [selectType, setSelectType] = useState("offline"); // 'online' or 'offline'
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');
    const [content, setContent] = useState('');
    const [selectedDate, setSelectedDate] = useState();
    const notifySuccess = () => toast.success("Hẹn lịch thành công!");
    const notifyFailed = () => toast.error("Hẹn lịch thất bại!");
    console.log(candidate)
    const handleSubmit = (e) => {
        e.preventDefault();
        const interviewDetails = {
            candidate_id: candidate.user_id,
            company_id: company.id,
            company_name: company.name,
            candidate_name: candidate.user.name,
            candidate_email: candidate.user.email,
            apply_id: candidate.id,
            type: selectType === "offline" ? 1 : 2,
            time: selectedDate,
            location,
            link,
            content,
            job_title: candidate.job.title,
        };

        axios.post('/api/schedule-interview/create', interviewDetails)
            .then(response => {
                console.error('Create new interview schedule success!');
                notifySuccess()
                onClose();
            })
            .catch(error => {
                console.error('There was an error scheduling the interview!', error);
                notifyFailed();
                onClose();
            });
    };

    const handleDateChange = (date) => {
        setSelectedDate(DatetimeHandle(date));
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className='meeting-title-container'>
                    <h3 className='meeting-title'>Hẹn lịch phỏng vấn với ứng viên <b>{candidate.user.name}</b></h3>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <form className="meeting-schedule-form" onSubmit={handleSubmit}>
                    <label>
                        <p>Hình thức phỏng vấn :</p>
                        <select value={type} onChange={(e) => setSelectType(e.target.value)}>
                            <option value="offline">Trực tiếp (Offline)</option>
                            <option value="online">Trực tuyến (Online)</option>
                        </select>
                    </label>
                    <br />
                    <label style={{ width: "100%" }}>
                        <p>Thời gian:</p>
                        <DatetimePicker onChange={handleDateChange} />
                    </label>
                    <br />
                    {selectType && selectType === "offline" ? (
                        <label style={{ width: "100%" }}>
                            <p>Địa điểm:</p>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </label>
                    ) : (
                        <label style={{ width: "100%" }}>
                            <p>Link cuộc họp: </p>
                            <input
                                type="text"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                required
                            />
                        </label>
                    )}
                    <br />
                    <label style={{ width: "100%" }}>
                        <p>Nội dung (Optional): </p>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </label>
                    <br />
                    <button className='send-button col-md-8' type="button submit">Gửi thư mời phỏng vấn</button>
                    <button className='cancel-button col-md-3' type="button" onClick={onClose}>Đóng</button>
                </form>
            </div>
        </div>
    );
}

export default InterviewModal;
