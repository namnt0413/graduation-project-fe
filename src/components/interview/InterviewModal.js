import React, { useState } from 'react';
import '../../styles/components/interview/InterviewModal.css'
import DatetimePicker from '../times/DatetimePicker';
import DatetimeHandle from '../times/DatetimeHandle';
import axios from '../../lib/axios';
import AuthCompany from '../AuthCompany';

function InterviewModal({ candidate, onClose }) {
  const { getCompany } = AuthCompany();
  const [company, setCompany] = useState(getCompany());
  const [type, setType] = useState(1); // 'online' or 'offline'
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [link, setLink] = useState('');
  const [content, setContent] = useState('');
  const [selectedDate, setSelectedDate] = useState();

//   console.log(candidate.job.title)
  const handleSubmit = (e) => {
    e.preventDefault();
    const interviewDetails = {
      candidate_id: candidate.user_id,
      company_id: company.id,
      candidate_name: candidate.user.name,
      candidate_email: candidate.user.email,
      type,
      time: selectedDate,
      location,
      content,
      job_title: candidate.job.title,
    };
  
    // axios.post('/schedule-interview', interviewDetails)
    //   .then(response => {
    //     alert('Interview scheduled successfully! Google Meet Link: ' + response.data.event_link);
    //     onClose();
    //   })
    //   .catch(error => {
    //     console.error('There was an error scheduling the interview!', error);
    //   });
  };

  const handleDateChange = (date) => {
    setSelectedDate(DatetimeHandle(date));
  };
  
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Hẹn lịch phỏng vấn với ứng viên {candidate.user.name}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Hình thức phỏng vấn :
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="1">Trực tiếp (Offline)</option>
              <option value="2">Trực tuyến (Online)</option>
            </select>
          </label>
          <br />
          <label>
            Thời gian:
            <DatetimePicker onChange={handleDateChange} />
          </label>
          <br />
          {type === '1' ? (
            <label>
              Địa điểm:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </label>
          ) : (
            ""
          )}
          <br />
          <label>
            Nội dung (Optional):
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Gửi thư mời phỏng vấn</button>
          <button type="button" onClick={onClose}>Đóng</button>
        </form>
      </div>
    </div>
  );
}

export default InterviewModal;
