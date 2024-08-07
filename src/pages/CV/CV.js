import React, { useEffect, useState, useRef } from "react";
import axios from "../../lib/axios";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "jspdf-autotable";
import TextEditor from "../../components/TextEditor";
import ToolbarDropDown from "../../components/dropdown/ToolbarDropdown";
import Subject from "../../components/cv/Subject";
import { useParams } from "react-router-dom";
import { Color } from "../../const/color";
import { storage } from '../../firebase'; // Import cấu hình Firebase
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import UploadCVAvatar from "../../components/files/UploadCvAvatar";
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/pages/CV/CV1.css";
import "../../styles/pages/CV/CV2.css";
import "../../styles/pages/CV/CV3.css";
import "../../styles/pages/CV/CV4.css";
import "../../styles/pages/CV/CV5.css";

export default function CV() {
  const params = useParams()
  const { http, setToken } = AuthUser();
  const [password, setPassword] = useState();
  const notifySuccess = () => toast.success("Lưu CV thành công");
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
  const [subjects, setSubjects] = useState([]);
  const [themeColor, setThemeColor] = useState();
  const [template, setTemplate] = useState();
  const [textFont, setTextFont] = useState();
  const [avatar, setAvatar] = useState();
  const [isShowingAvatar, setIsShowingAvatar] = useState();

  useEffect(() => {
    const getCV = async () => {
      const res = await axios.get(`/api/cv/detail/${params.id}`);
      const cv = res.data.data;
      setTitle(cv.title);
      setCandidateName(cv.name);
      setPosition(cv.position);
      setEmail(cv.email);
      setAddress(cv.address);
      setPhone(cv.phone);
      setBirthday(cv.birthday);
      setSubjects(cv.subject);
      setThemeColor(cv.theme_color)
      setTemplate(cv.template_id)
      setTextFont(cv.text_font)
      // Convert the offfset string to an array
      const fetchedOffsets = cv.offset.split(",");
      setOffsets(fetchedOffsets);
      setAvatar(cv.avatar);
      setIsShowingAvatar(cv.is_showing_avatar)
    };
    getCV();
  }, []);

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
    await axios.put(`/api/cv/update-${field}/${params.id}`, {
      field: value,
    });
  };
  //handle with text editor component
  const handleOnChangeName = (data) => {
    setCandidateName(data);
  };
  const handleBlurName = async (data) => {
    await axios.put(`/api/cv/update-name/${params.id}`, {
      name: data,
    });
  };

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

  //handle move,add,delete subject
    const moveOffsetSubject = (subjectId, direction) => {
      console.log(subjectId, direction)
      const currentIndex = offsets.indexOf(subjectId.toString());
      const targetIndex =
        direction === "up" ? currentIndex - 1 : currentIndex + 1;

      if (targetIndex >= 0 && targetIndex < offsets.length) {
        const newOffsets = [...offsets];
        [newOffsets[currentIndex], newOffsets[targetIndex]] = [
          newOffsets[targetIndex],
          newOffsets[currentIndex],
        ];
        setOffsets(newOffsets);

        // Send request to update offset on the backend
        const offsetString = newOffsets.join(",");
        axios
          .put(`/api/cv/update-offset/${params.id}`, { offset: offsetString })
          .then((response) => {
            console.log(response.data.message);
          })
          .catch((error) => {
            console.error("Error updating offset:", error);
          });
      }
    };
    const addSubject = async (subjectId) => {
      await axios.post("/api/subject/create", {
          title: "Lorem ipsum",
          c_v_id: params.id,
        })
        .then( async (response) => {
          const newSubject = response.data.subject;
          await axios.post("/api/item/create", {
            title: "<p><b>Lorem ipsum</b><br></p>",
            content:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
            c_v_id: params.id,
            subject_id: newSubject.id,
          })
          .then( async (response2) => {
            const newItem = response2.data.item;
            await axios.put(`/api/subject/update-offset/${newSubject.id}`, { offset: newItem.id })
            .then((response3) => {
              console.log(response.data.message);
            })
            .catch((error) => {
              console.error("Error updating offset:", error);
            });
          })
          .catch((error) => {
            console.error("Error adding new item:", error);
          });

          // Tìm vị trí hiện tại của div có id đang được nhấn nút Add
          const currentIndex = offsets.indexOf(subjectId.toString());
          // Tạo một mảng offsets mới với div mới được thêm vào ngay sau div hiện tại
          const newOffsets = [
            ...offsets.slice(0, currentIndex + 1),
            newSubject.id.toString(),
            ...offsets.slice(currentIndex + 1),
          ];
          // setSubjects([...items, newItem]);
          setOffsets(newOffsets);

          // Send request to update offset on the backend
          const offsetString = newOffsets.join(",");
          axios
            .put(`/api/cv/update-offset/${params.id}`, { offset: offsetString })
            .then((response) => {
              console.log(response.data.message);
            })
            .catch((error) => {
              console.error("Error updating offset:", error);
            });
        })
        .catch((error) => {
          console.error("Error adding new subject:", error);
        });
    };
    const deleteSubject = (subjectId) => {
      axios.delete(`/api/subject/delete/${subjectId}`)
        .then((response) => {
          // Xóa div khỏi state 'divs' bằng cách lọc ra các div có id khác với id cần xóa
          setSubjects(subjects.filter((subject) => subject.id !== subjectId));

          // Cập nhật lại offsets bằng cách lọc ra các offset có giá trị khác với id cần xóa
          const newOffsets = offsets.filter(
            (offset) => offset !== subjectId.toString()
          );
          setOffsets(newOffsets);

          // Chuyển đổi mảng offsets thành chuỗi và gửi yêu cầu cập nhật offsets tới backend
          const offsetString = newOffsets.join(",");
          axios
            .put(`/api/cv/update-offset/${params.id}`, { offset: offsetString })
            .then((response) => {
              console.log(response.data.message);
            })
            .catch((error) => {
              console.error("Error updating offset:", error);
            });
        })
        .catch((error) => {
          console.error("Error deleting div:", error);
        });
    };

  // handle CV download
  const cvRef = useRef();
  const handleDownload = () => {
    const element = cvRef.current;
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const scale = 2; // Tăng scale để có chất lượng tốt hơn

    // Fix bug print input : Thay thế các thẻ <input> bằng <div>
    const inputs = element.querySelectorAll('input');
    inputs.forEach(input => {
      const div = document.createElement('div');
      div.textContent = input.value;
      div.style.fontSize = window.getComputedStyle(input).fontSize;
      div.style.fontWeight = window.getComputedStyle(input).fontWeight;
      div.style.padding = window.getComputedStyle(input).padding;
      div.style.margin = window.getComputedStyle(input).margin;
      div.style.border = window.getComputedStyle(input).border;
      div.style.width = window.getComputedStyle(input).width;
      div.style.color = window.getComputedStyle(input).color;
      div.style.backgroundColor = window.getComputedStyle(input).backgroundColor;
      div.style.filter = window.getComputedStyle(input).filter;
      div.className = input.className;
      div.id = input.id;
      div.type = input.type;
      div.onChange = input.onChange;
      div.onBlur = input.onBlur;
      div.setAttribute('data-input', 'true'); // Gắn cờ cho các thẻ div tạm thời
      input.parentNode.replaceChild(div, input);
    });

    html2canvas(element, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.9);
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

    // Khôi phục lại các thẻ <input>
    const tempDivs = element.querySelectorAll('div[data-input="true"]');
    tempDivs.forEach(div => {
      const input = document.createElement('input');
      input.value = div.textContent;
      input.style.fontSize = window.getComputedStyle(div).fontSize;
      input.style.fontWeight = window.getComputedStyle(div).fontWeight;
      input.style.padding = window.getComputedStyle(div).padding;
      input.style.margin = window.getComputedStyle(div).margin;
      input.style.border = window.getComputedStyle(div).border;
      input.style.width = window.getComputedStyle(div).width;
      input.style.color = window.getComputedStyle(div).color;
      input.style.backgroundColor = window.getComputedStyle(div).backgroundColor;
      input.style.filter = window.getComputedStyle(div).filter;
      // Gán các thuộc tính khác từ div vào input
      input.className = div.className;
      input.id = div.id;
      input.type = div.type;
      input.onChange = div.onChange;
      input.onBlur = div.onBlur;
      div.parentNode.replaceChild(input, div);
    });

      pdf.save("my_cv.pdf");
    });
  };

  // handle save cv to firebase
  const generatePDF = async () => {
    const element = cvRef.current;

    // Tạo canvas từ nội dung CV
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });
    const imgData = canvas.toDataURL('image/jpeg', 0.8);

    // Tạo file PDF từ canvas
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight, null, 'FAST');
    heightLeft -= pdfHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight, null, 'FAST');
      heightLeft -= pdfHeight;
    }

    return pdf;
  };

  const handleSave = async () => {
    const pdf = await generatePDF();
    const pdfBlob = pdf.output('blob');
    const pdfTitle = title + '.pdf'; // Tên file PDF

    // Tạo tham chiếu đến vị trí lưu trữ trên Firebase
    const storageRef = ref(storage, `CV/${pdfTitle}`);
    
    // Tải file PDF lên Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, pdfBlob);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Quan sát trạng thái tải lên
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        // Xử lý lỗi nếu có
        console.error('Error uploading file:', error);
      }, 
      () => {
        // Hoàn thành tải lên thành công
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          notifySuccess()
        });
      }
    );
  }
  
  const onChangeColor = async (data) => {
    setThemeColor(data)
    await axios.put(`/api/cv/update-theme-color/${params.id}`, {
      theme_color: data,
    });
  }

  const onChangeTemplate = async (data) => {
    setTemplate(data)
    await axios.put(`/api/cv/update-template/${params.id}`, {
      template_id: data,
    });
  }

  const onChangeTextFont = async (data) => {
    setTextFont(data)
    await axios.put(`/api/cv/update-text-font/${params.id}`, {
      text_font: data,
    });
  }

  const leftOffsetSubjects = offsets.filter((_, index) => index % 2 !== 0); // Chỉ số lẻ
  const rightOffsetSubjects = offsets.filter((_, index) => index % 2 === 0); // Chỉ số chẵn

  // toggle show cv avatar
  const toggleAvatarVisibility =  async () => {
    setIsShowingAvatar(!isShowingAvatar);
    await axios.put(`/api/cv/update-showing-avatar/${params.id}`, {
      is_showing_avatar: !isShowingAvatar,
    });
  };

  const Cv1Content = (
    <>
      <ToastContainer  className="toast-position" />
      <div className="cv-1 jp_tittle_main_wrapper cv-section">
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
                <Link className="" to="/my-list-cv">
                  Quản lý CV
                </Link>
              </div>
              <div
                className="toolbar-item template"
              >
                <i class="fa-solid fa-floppy-disk toolbar-icon"></i>
                <button onClick={handleSave}>Lưu</button>
              </div>

              <ToolbarDropDown
                isOpen={dropdownOpen}
                onClose={handleDropdownClose}
                dropdownType={dropdownType}
                onChangeColor={onChangeColor}
                selectedColor={themeColor}
                onChangeTemplate={onChangeTemplate}
                selectedTemplate={template}
                onChangeTextFont={onChangeTextFont}
                selectedTextFont={textFont}
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
                <div className="basic-info"
                  style={{ backgroundColor: Color[themeColor] }}
                >
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
                        <span>SĐT</span>
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
                        <span>Ngày sinh</span>
                        <input
                          type="text"
                          id="birthday"
                          value={birthday}
                          onChange={handleChange}
                          onBlur={() => handleBlur("birthday", birthday)}
                        />
                      </div>
                      <div className="info-field col-6">
                        <span>Địa chỉ</span>
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
                    <UploadCVAvatar avatar={avatar} setAvatar={setAvatar} isShowingAvatar={isShowingAvatar}
                      cvId={params.id} toggleAvatarVisibility={toggleAvatarVisibility}
                    />
                  </div>
                </div>
                {offsets.map((offset) => {
                  return (
                    <Subject
                      key={offset}
                      id={offset}
                      moveOffsetSubject={moveOffsetSubject}
                      addSubject={addSubject}
                      deleteSubject={deleteSubject}
                      themeColor={themeColor}
                      template={template}
                      textFont={textFont}
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

  const Cv2Content = (
    <>
      <ToastContainer  className="toast-position" />
      <div className="cv-2 jp_tittle_main_wrapper cv-section">
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
                <Link className="" to="/my-list-cv">
                  Quản lý CV
                </Link>
              </div>
              <div
                className="toolbar-item template"
              >
                <i class="fa-solid fa-floppy-disk toolbar-icon"></i>
                <button onClick={handleSave}>Lưu</button>
              </div>

              <ToolbarDropDown
                isOpen={dropdownOpen}
                onClose={handleDropdownClose}
                dropdownType={dropdownType}
                onChangeColor={onChangeColor}
                selectedColor={themeColor}
                onChangeTemplate={onChangeTemplate}
                selectedTemplate={template}
                onChangeTextFont={onChangeTextFont}
                selectedTextFont={textFont}
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
                <div className="basic-info"
                >
                  <div className="info">
                    <div className="name-position">
                      {candidateName && (
                        <TextEditor
                          data={candidateName}
                          id="name"
                          handleOnChangeName={handleOnChangeName}
                          handleBlurData={handleBlurName}
                          themeColor={themeColor}
                        />
                      )}
                      <div className="position-container" style={{ textAlign: "center" }}>
                        <input
                          type="text"
                          id="position"
                          value={position}
                          onChange={handleChange}
                          onBlur={() => handleBlur("position", position)}
                        />
                      </div>
                    </div>
                    <div className="list-info-title">
                      <p className="list-info-title-content" style={{ color: Color[themeColor] }}>Thông tin liên hệ</p>
                    </div>
                    <div className="list-info-avatar">
                    <div className="list-info col-8">
                      <div className="info-field">
                        <span>Email</span>
                        <input
                          type="text"
                          id="email"
                          value={email}
                          onChange={handleChange}
                          onBlur={() => handleBlur("email", email)}
                        />
                      </div>
                      <div className="info-field">
                        <span>SĐT</span>
                        <input
                          type="text"
                          id="phone"
                          value={phone}
                          onChange={handleChange}
                          onBlur={() => handleBlur("phone", phone)}
                        />
                      </div>
                      <div className="info-field">
                        <span>Ngày sinh</span>
                        <input
                          type="text"
                          id="birthday"
                          value={birthday}
                          onChange={handleChange}
                          onBlur={() => handleBlur("birthday", birthday)}
                        />
                      </div>
                      <div className="info-field">
                        <span>Địa chỉ</span>
                        <input
                          type="text"
                          id="address"
                          value={address}
                          onChange={handleChange}
                          onBlur={() => handleBlur("address", address)}
                        />
                      </div>
                    </div>
                      <div className="cv-avatar col-4">
                        <UploadCVAvatar avatar={avatar} setAvatar={setAvatar} isShowingAvatar={isShowingAvatar}
                          cvId={params.id} toggleAvatarVisibility={toggleAvatarVisibility}
                        />
                      </div>
                  </div>
                    </div>
                </div>
                {offsets.map((offset) => {
                  return (
                    <Subject
                      key={offset}
                      id={offset}
                      moveOffsetSubject={moveOffsetSubject}
                      addSubject={addSubject}
                      deleteSubject={deleteSubject}
                      themeColor={themeColor}
                      template={template}
                      textFont={textFont}
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

  const Cv3Content = (
    <>
      <ToastContainer  className="toast-position" />
      <div className="cv-3 jp_tittle_main_wrapper cv-section">
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
                <Link className="" to="/my-list-cv">
                  Quản lý CV
                </Link>
              </div>
              <div
                className="toolbar-item template"
              >
                <i class="fa-solid fa-floppy-disk toolbar-icon"></i>
                <button onClick={handleSave}>Lưu</button>
              </div>

              <ToolbarDropDown
                isOpen={dropdownOpen}
                onClose={handleDropdownClose}
                dropdownType={dropdownType}
                onChangeColor={onChangeColor}
                selectedColor={themeColor}
                onChangeTemplate={onChangeTemplate}
                selectedTemplate={template}
                onChangeTextFont={onChangeTextFont}
                selectedTextFont={textFont}
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
                <div className="basic-info"
                >
                  <div className="info">
                    <div className="name-position">
                      {candidateName && (
                        <TextEditor
                          data={candidateName}
                          id="name"
                          handleOnChangeName={handleOnChangeName}
                          handleBlurData={handleBlurName}
                          themeColor={themeColor}
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
                        <span>SĐT</span>
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
                        <span>Ngày sinh</span>
                        <input
                          type="text"
                          id="birthday"
                          value={birthday}
                          onChange={handleChange}
                          onBlur={() => handleBlur("birthday", birthday)}
                        />
                      </div>
                      <div className="info-field col-6">
                        <span>Địa chỉ</span>
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
                    <UploadCVAvatar avatar={avatar} setAvatar={setAvatar} isShowingAvatar={isShowingAvatar}
                      cvId={params.id} toggleAvatarVisibility={toggleAvatarVisibility}
                    />
                  </div>
                </div>
                {offsets.map((offset) => {
                  return (
                    <Subject
                      key={offset}
                      id={offset}
                      moveOffsetSubject={moveOffsetSubject}
                      addSubject={addSubject}
                      deleteSubject={deleteSubject}
                      themeColor={themeColor}
                      template={template}
                      textFont={textFont}
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

  const Cv4Content = (
    <>
      <ToastContainer  className="toast-position" />
      <div className="cv-4 jp_tittle_main_wrapper cv-section">
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
                <Link className="" to="/my-list-cv">
                  Quản lý CV
                </Link>
              </div>
              <div
                className="toolbar-item template"
              >
                <i class="fa-solid fa-floppy-disk toolbar-icon"></i>
                <button onClick={handleSave}>Lưu</button>
              </div>

              <ToolbarDropDown
                isOpen={dropdownOpen}
                onClose={handleDropdownClose}
                dropdownType={dropdownType}
                onChangeColor={onChangeColor}
                selectedColor={themeColor}
                onChangeTemplate={onChangeTemplate}
                selectedTemplate={template}
                onChangeTextFont={onChangeTextFont}
                selectedTextFont={textFont}
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
                <div className="basic-info"
                >
                  <div className="cv-avatar">
                    <UploadCVAvatar avatar={avatar} setAvatar={setAvatar} isShowingAvatar={isShowingAvatar}
                      cvId={params.id} toggleAvatarVisibility={toggleAvatarVisibility}
                    />
                  </div>
                  <div className="info">
                    <div className="name-position">
                      {candidateName && (
                        <TextEditor
                          data={candidateName}
                          id="name"
                          handleOnChangeName={handleOnChangeName}
                          handleBlurData={handleBlurName}
                          themeColor={themeColor}
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
                        <span>SĐT</span>
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
                        <span>Ngày sinh</span>
                        <input
                          type="text"
                          id="birthday"
                          value={birthday}
                          onChange={handleChange}
                          onBlur={() => handleBlur("birthday", birthday)}
                        />
                      </div>
                      <div className="info-field col-6">
                        <span>Địa chỉ</span>
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

                </div>
                {offsets.map((offset) => {
                  return (
                    <Subject
                      key={offset}
                      id={offset}
                      moveOffsetSubject={moveOffsetSubject}
                      addSubject={addSubject}
                      deleteSubject={deleteSubject}
                      themeColor={themeColor}
                      template={template}
                      textFont={textFont}
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

  const Cv5Content = (
    <>
      <ToastContainer  className="toast-position" />
      <div className="cv-5 jp_tittle_main_wrapper cv-section">
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
                <Link className="" to="/my-list-cv">
                  Quản lý CV
                </Link>
              </div>
              <div
                className="toolbar-item template"
              >
                <i class="fa-solid fa-floppy-disk toolbar-icon"></i>
                <button onClick={handleSave}>Lưu</button>
              </div>

              <ToolbarDropDown
                isOpen={dropdownOpen}
                onClose={handleDropdownClose}
                dropdownType={dropdownType}
                onChangeColor={onChangeColor}
                selectedColor={themeColor}
                onChangeTemplate={onChangeTemplate}
                selectedTemplate={template}
                onChangeTextFont={onChangeTextFont}
                selectedTextFont={textFont}
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
                <div className="name-position-contact-info">
                  <div className="col-5 name-position" style={{ backgroundColor: Color[themeColor] }}>
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
                  <div className="col-8 contact-info">
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
                        <span>SĐT</span>
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
                        <span>Ngày sinh</span>
                        <input
                          type="text"
                          id="birthday"
                          value={birthday}
                          onChange={handleChange}
                          onBlur={() => handleBlur("birthday", birthday)}
                        />
                      </div>
                      <div className="info-field col-6">
                        <span>Địa chỉ</span>
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
                </div>

                <div className="subject-list">
                  <div className="subject-left col-5" style={{ backgroundColor: Color[themeColor] }}>
                    {leftOffsetSubjects.map((offset) => {
                      return (
                        <Subject
                          key={offset}
                          id={offset}
                          moveOffsetSubject={moveOffsetSubject}
                          addSubject={addSubject}
                          deleteSubject={deleteSubject}
                          themeColor={themeColor}
                          template={template}
                          textFont={textFont}
                        />
                      );
                    })}
                    </div>
                    <div className="subject-right col-8">
                    {rightOffsetSubjects.map((offset) => {
                      return (
                        <Subject
                          key={offset}
                          id={offset}
                          moveOffsetSubject={moveOffsetSubject}
                          addSubject={addSubject}
                          deleteSubject={deleteSubject}
                          themeColor={themeColor}
                          textFont={textFont}
                        />
                      );
                    })}
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );

  if (template && template === 1 ) {
    return <Layout page={Cv1Content} />;
  } 
  else if (template && template === 2 ) {
    return <Layout page={Cv2Content}/>;
  }
  else if (template && template === 3 ) {
    return <Layout page={Cv3Content}/>;
  }
  else if (template && template === 4 ) {
    return <Layout page={Cv4Content}/>;
  } 
  else if (template && template === 5 ) {
    return <Layout page={Cv5Content} />;
  }

}
