import React, { useEffect, useState, useRef } from "react";
import axios from "../../lib/axios";
import "../../styles/pages/CV/TestCV.css";
import "../../styles/pages/CV/CV.css";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "jspdf-autotable";
import TextEditor from "../../components/TextEditor";
import ToolbarDropDown from "../../components/dropdown/ToolbarDropdown";
import Subject from "../../components/cv/Subject";

export default function CV() {
  const { http, setToken } = AuthUser();
  const [password, setPassword] = useState();

  // handle create default data

  // handle offset subject
  const [offsets, setOffsets] = useState([]);
  // handle cv basic info
  const [candidateName, setCandidateName] = useState("");
  const [title, setTitle] = useState();
  const [position, setPosition] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [birthday, setBirthday] = useState();

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "birthday":
        setBirthday(value);
        break;
      default:
        break;
    }
  };
  const handleBlur = async (field, value) => {
    // API update basic info
    await axios.put(`/api/cv/update-${field}/1`, {
      field: value,
    });
  };

  //handle with text editor component
  const handleOnChangeName = (data) => {
    setCandidateName(data);
  };
  const handleBlurName = async (data) => {
    await axios.put(`/api/cv/update-name/1`, {
      name: data,
    });
  };

  useEffect(() => {
    const getCV = async () => {
      const res = await axios.get("/api/cv/detail/1");
      const cv = res.data.data;
      setTitle(cv.title);
      setCandidateName(cv.name);
      setPosition(cv.position);
      setEmail(cv.email);
      setAddress(cv.address);
      setPhone(cv.phone);
      setBirthday(cv.birthday);

      // Convert the offfset string to an array
      const fetchedOffsets = cv.offset.split(",");
      setOffsets(fetchedOffsets);
    };
    getCV();
  }, []);

  // handle dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownType, setDropdownType] = useState();
  const handleOpenFontDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDropdownType(1);
  };
  const handleOpenColorDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDropdownType(2);
  };
  const handleOpenTemplateDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDropdownType(3);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  // handle CV download
  const cvRef = useRef();
  const handleDownload = () => {
    const element = cvRef.current;
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const scale = 2; // Tăng scale để có chất lượng tốt hơn

    html2canvas(element, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.8);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(
        imgData,
        "JPEG",
        0,
        position,
        pdfWidth,
        imgHeight,
        null,
        "FAST"
      ); // Thêm tùy chọn 'FAST' cho nén nhanh hơn
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(
          imgData,
          "JPEG",
          0,
          position,
          pdfWidth,
          imgHeight,
          null,
          "FAST"
        );
        heightLeft -= pdfHeight;
      }

      pdf.save("my_cv.pdf");
    });
  };

  const CvContent = (
    <>
      <div className="jp_tittle_main_wrapper cv-section">
        <div className="cv-background">
          <div className="cv-container">
            <div className="top-toolbar">
              <div
                className="toolbar-item text-font"
                onClick={handleOpenFontDropdown}
              >
                <i className="fa-solid fa-a toolbar-icon"></i>
                Phông chữ
              </div>
              <div
                className="toolbar-item theme-color"
                onClick={handleOpenColorDropdown}
              >
                <i className="fa-solid fa-palette toolbar-icon"></i>
                Màu sắc
              </div>
              <div
                className="toolbar-item template"
                onClick={handleOpenTemplateDropdown}
              >
                <i className="fa-solid fa-file toolbar-icon"></i>
                Mẫu CV
              </div>
              <div className="download">
                <button onClick={handleDownload} className="download-btn">
                  <i className="toolbar-icon fa-solid fa-download"></i>
                  Tải xuống
                </button>
              </div>
              <div className="toolbar-item manage-cv">
                <i className="fa-solid fa-id-badge toolbar-icon"></i>
                Quản lý CV
              </div>
              <ToolbarDropDown
                isOpen={dropdownOpen}
                onClose={handleDropdownClose}
                dropdownType={dropdownType}
              />
            </div>
            <div className="cv-title">
              <input
                type="text"
                id="title"
                className="cv-title-input"
                value={title}
                onChange={handleChange}
                onBlur={() => handleBlur("title", title)}
              />
            </div>

            <div className="cv-ref" ref={cvRef} id="content">
              <div className="cv-content">
                <div className="basic-info">
                  <div className="info">
                    <div className="name-position">
                      {candidateName && (
                        <TextEditor
                          data={candidateName}
                          id="name"
                          handleOnChangeName={handleOnChangeName}
                          handleBlurData={handleBlurName}
                        />
                      )}
                      <input
                        type="text"
                        id="position"
                        value={position}
                        onChange={handleChange}
                        onBlur={() => handleBlur("position", position)}
                      />
                    </div>
                    <div className="list-info">
                      <div className="info-field col-6">
                        <span>Email</span>
                        <input
                          type="text"
                          id="email"
                          value={email}
                          onChange={handleChange}
                          onBlur={() => handleBlur("email", email)}
                        />
                      </div>
                      <div className="info-field col-6">
                        <span>Phone</span>
                        <input
                          type="text"
                          id="phone"
                          value={phone}
                          onChange={handleChange}
                          onBlur={() => handleBlur("phone", phone)}
                        />
                      </div>
                    </div>
                    <div className="list-info">
                      <div className="info-field col-6">
                        <span>Birthday</span>
                        <input
                          type="text"
                          id="birthday"
                          value={birthday}
                          onChange={handleChange}
                          onBlur={() => handleBlur("birthday", birthday)}
                        />
                      </div>
                      <div className="info-field col-6">
                        <span>Address</span>
                        <input
                          type="text"
                          id="address"
                          value={address}
                          onChange={handleChange}
                          onBlur={() => handleBlur("address", address)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cv-avatar">
                    <img src="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM=" />
                  </div>
                </div>
                {offsets.map((offset) => {
                  return (
                    <Subject
                      key={offset}
                      id={offset}
                      // moveOffset={moveOffset}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return <Layout page={CvContent} />;
}
