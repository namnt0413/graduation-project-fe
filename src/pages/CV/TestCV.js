import React from "react";
import { useState, useRef } from "react";
import "../../styles/pages/CV/TestCV.css";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import TextEditor from "../../components/TextEditor";
// import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import ToolbarDropDown from "../../components/dropdown/ToolbarDropdown"

export default function TestCV() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState("<p>Ha Noi, Viet Nam</p>");

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

  const cvRef = useRef();
  const handleDownload = () => {
    // const input = cvRef.current;
    // html2canvas(input).then((canvas) => {
    //     const imgData = canvas.toDataURL("image/png");
    //     const pdf = new jsPDF('p','mm','a4',true)
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = pdf.internal.pageSize.getHeight();
    //     const imgWidth = canvas.width;
    //     const imgHeight = canvas.height;
    //     const ratio = Math.min(pdfWidth / imgWidth , pdfHeight / imgHeight);
    //     const imgX = (pdfWidth - imgWidth * ratio) / 2;
    //     const imgY = 30;
    //     pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    //     pdf.save('my_cv.pdf');
    // })

    // const element = cvRef.current;
    // element.classList.add('pdf-mode');
    // // Thêm class 'pdf-mode' tạm thời

    // const opt = {
    //   margin: 0,
    //   filename: "my_cv.pdf",
    //   image: { type: "jpeg", quality: 0.98 },
    //   html2canvas: {
    //     scale: 2,
    //     useCORS: true, // Enable CORS
    //     allowTaint: true, // Allow cross-origin images to be used
    //     logging: true, // Enable logging for debugging
    //   },
    //   jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    // };

    // // Xóa class 'pdf-mode' sau khi tạo PDF
    // html2pdf().from(element).set(opt).save().then(() => {
    //     element.classList.remove('pdf-mode');
    // });

    const element = cvRef.current;
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const scale = 2; // Tăng scale để có chất lượng tốt hơn

    html2canvas(element, {
        scale: scale,
        useCORS: true,
        allowTaint: true
    }).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 0.8);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgProps = pdf.getImageProperties(imgData);
        const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight, null, 'FAST'); // Thêm tùy chọn 'FAST' cho nén nhanh hơn
        heightLeft -= pdfHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight, null, 'FAST');
            heightLeft -= pdfHeight;
        }

        pdf.save('my_cv.pdf');
    });
  };

  const TestCvContent = (
    <>
      <div className="jp_tittle_main_wrapper cv-section">
        <div className="cv-background">
          <div className="cv-container">
            <div className="top-toolbar">
              <div className="toolbar-item text-font" onClick={handleOpenFontDropdown}>
                <i class="fa-solid fa-a toolbar-icon"></i>
                Phông chữ
              </div>
              <div className="toolbar-item theme-color" onClick={handleOpenColorDropdown}>
                <i class="fa-solid fa-palette toolbar-icon"></i>
                Màu sắc
              </div>
              <div className="toolbar-item template" onClick={handleOpenTemplateDropdown}>
              <i class="fa-solid fa-file toolbar-icon"></i>
                Mẫu CV
              </div>
              <div className="download">
                <button onClick={handleDownload} className="download-btn">
                  <i class="toolbar-icon fa-solid fa-download"></i>
                  Tải xuống
                </button>
              </div>
              <div className="toolbar-item manage-cv">
                <i class="fa-solid fa-id-badge toolbar-icon"></i>
                Quản lý CV
              </div>
              <ToolbarDropDown isOpen={dropdownOpen} onClose={handleDropdownClose} dropdownType={dropdownType} />
            </div>
            <div className="cv-title">
                <input
                  type="text"
                  id="cv-title-input"
                  className="cv-title-input"
                  value={"Nguyen Van A - Fullstack Developer"}
                  // onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="cv-ref" ref={cvRef} id="content">
                <div className="cv-content">
                  <div className="basic-info row">
                    <div className="info col-8">
                      <div className="name-position">
                        <TextEditor data="<p>Nguyen Van A</p>" id="name" />
                        <TextEditor
                          data="<p>Full-stack developer</p>"
                          id="position"
                        />
                      </div>
                      <div className="list-info row">
                        <div className="info-field col-6">
                          <span>Email</span>
                          <TextEditor
                            data="<p>nguyenvana@gmail.com</p>"
                            id="email"
                          />
                        </div>
                        <div className="info-field col-6">
                          <span>Address</span>
                          <TextEditor data={address} id="address" />
                        </div>
                    </div>
                      <div className="list-info row">
                        <div className="info-field col-6">
                          <span>Phone</span>
                          <TextEditor data="<p>+84 1234567890</p>" id="phone" />
                        </div>
                        <div className="info-field col-6">
                          <span>Birthday</span>
                          <TextEditor data="<p>01/01/2000</p>" id="birthday" />
                        </div>
                    </div>
                    <div className="list-info row">
                        <div className="info-field col-6">
                          <span>Gender</span>
                          <TextEditor data="<p>Male</p>" id="gender" />
                        </div>
                    </div>
                      </div>
                    <div className="cv-avatar col-4">
                      <img src="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM=" />
                    </div>
                  </div>

                  <div className="education">
                    <div className="education-title">Education</div>
                    <div className="education-content row">
                      <div className="time col-3">
                        <TextEditor
                          data="<p><b>2011/10 – 2014/09</b></p>"
                          id="education-time"
                        />
                      </div>
                      <div className="school col-9">
                        <TextEditor
                          data="<p><b>FPT Polytechnic - Ha Noi</b></p>"
                          id="school-name"
                        />
                        <div className="description">
                          <TextEditor
                            data="
                                            <ul>
                                                <li>Bằng tốt nghiệp: Loại giỏi</li>
                                                <li>Điểm tích luỹ: 8.5</li>
                                                <li>Hệ chính quy</li>
                                            </ul>"
                            id="school-description"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="education-content row">
                      <div className="time col-3">
                        <TextEditor
                          data="<p><b>2013/10 – 2015/09</b></p>"
                          id="education-time"
                        />
                      </div>
                      <div className="school col-9">
                        <TextEditor
                          data="<p><b>Trường ĐH MyCV</b></p>"
                          id="school-name"
                        />
                        <div className="description">
                          <TextEditor
                            data="
                                            <p>Cử nhân công nghệ thông tin</p>
                                            <ul >
                                                <li>Bằng tốt nghiệp: Loại giỏi</li>
                                                <li>Điểm tích luỹ: 1</li>
                                                <li>Hệ chính quy</li>
                                            </ul>"
                            id="school-description"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="work-exp">
                    <div className="work-exp-title">Work experience</div>
                    <div className="work-exp-content row">
                      <div className="time col-3">
                        <TextEditor
                          data="<p><b>2013/05 – 2013/09</b></p>"
                          id="work-exp-time"
                        />
                      </div>
                      <div className="work col-9">
                        <div className="name">
                          <TextEditor
                            data="<p><b>Công ty cổ phần MyCV</b></p>"
                            id="work-exp-name"
                          />
                        </div>
                        <div className="description">
                          <TextEditor
                            data="
                                            <i>Full-stack Developer</i>
                                            <ul >
                                                <li>Đăng bài giới thiệu sản phẩm trên các trang mạng xã hội, diễn đàn...</li>
                                                <li>Gọi điện tư vấn, chăm sóc & nhận phản hồi từ khách hàng</li>
                                            </ul>
                                            "
                            id="work-exp-description"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="work-exp-content row">
                      <div className="time col-3">
                        <TextEditor
                          data="<p><b>07/2015 - 03/2018</b></p>"
                          id="work-exp-time"
                        />
                      </div>
                      <div className="work col-9">
                        <div className="name">
                          <TextEditor
                            data="<p><b>AI&T JSC</b></p>"
                            id="work-exp-name"
                          />
                        </div>
                        <div className="description">
                          <TextEditor
                            data="
                                            <i>Full-stack Developer</i>
                                            <ul >
                                                <li>Develop web module on given projects.</li>
                                                <li>Create coding frames and design database based on project descriptions</li>
                                            </ul>
                                            "
                            id="work-exp-description"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="work-exp-content row">
                      <div className="time col-3">
                        <TextEditor
                          data="<p><b>01/2018 – Present</b></p>"
                          id="work-exp-time"
                        />
                      </div>
                      <div className="work col-9">
                        <div className="name">
                          <TextEditor
                            data="<p><b>F8 TECHNOLOGY EDUCATION.,JSC</b></p>"
                            id="work-exp-name"
                          />
                        </div>
                        <div className="description">
                          <TextEditor
                            data="
                                            <i>Full-stack Developer</i>
                                            <ul >
                                                <li>Programme outsourcing projects</li>
                                                <li>Create coding frames and design database based on project descriptions</li>
                                            </ul>
                                            "
                            id="work-exp-description"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills">
                    <div className="skills-title">Skills</div>
                    <div className="skills-content row">
                      <div className="skills-field col-4">
                        <p>
                          <b>Main</b>
                        </p>
                      </div>
                      <div className="skills-list col-8">
                        <ul>
                          <li className="skill">
                            HTML, CSS, JavaScript (ReactJS, React-Native, Lit){" "}
                          </li>
                          <li className="skill">
                            PHP (Laravel, Symfony, Codeigniter, Yii)
                          </li>
                          <li className="skill">Node (ExpressJS)</li>
                          <li className="skill">RESTful API, GraphQL</li>
                          <li className="skill">
                            MySQL, PostgreSQL, NoSQL (MongoDB)
                          </li>
                          <li className="skill">
                            Server (Apache, Nginx, Redis, Memcached, Queue, Log,
                            Crontjob...), Rancher, K8S, Docker
                          </li>
                          <li className="skill">
                            AWS (Load balancing, EC2, ECS, Router 53, RDS, S3)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="skills-content row">
                      <div className="skills-field col-4">
                        <p>
                          <b>Other</b>
                        </p>
                      </div>
                      <div className="skills-list col-8">
                        <ul>
                          <li className="skill">Ruby (Ruby on Rails)</li>
                          <li className="skill">SVN, GIT</li>
                          <li className="skill">
                            Python (selenium automation test, crawler)
                          </li>
                          <li className="skill">Elasticsearch</li>
                          <li className="skill">Tensorflow</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="awards">
                    <div className="award-title">Awards</div>
                    <div className="award-content row">
                      <div className="time col-3">
                        <b>06/2016</b>
                      </div>
                      <div className="award col-9">
                        <div className="name">
                          <b>Poly Creative Competition 2016</b>
                        </div>
                        <div className="description">
                          Poly creation contest:{" "}
                          <a href="https://goo.gl/BVP5kE">
                            https://goo.gl/BVP5kE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="award-content row">
                      <div className="time col-3">
                        <b>08/2016</b>
                      </div>
                      <div className="award col-9">
                        <div className="name">
                          <b>FE Creative Competition 2016</b>
                        </div>
                        <div className="description">
                          FE creation contest:{" "}
                          <a href="https://goo.gl/86ULiw">
                            https://goo.gl/86ULiw
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="projects">
                    <div className="projects-title">Projects</div>
                    <div className="projects-content">
                      <div className="project row">
                        <div className="project-name">
                          <strong>FULLSTACK.EDU.VN</strong>
                        </div>
                        <div className="project-time">(01/2019 - Present)</div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Client</strong>
                          </div>
                          <div className="project-content col-9">
                            F8 TECHNOLOGY EDUCATION.,JSC
                          </div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Descriptions</strong>
                          </div>
                          <div className="project-content col-9">
                            Learn programming online (https://f8.edu.vn)
                          </div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Number of members</strong>
                          </div>
                          <div className="project-content col-9">1</div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Position</strong>
                          </div>
                          <div className="project-content col-9">
                            Product Owner, BA, Developer, Tester, Video Editor
                          </div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Responsibility</strong>
                          </div>
                          <div className="project-content col-9">
                            <ul>
                              <li>Developer</li>
                              <li>Solution architect</li>
                            </ul>
                          </div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Technology in use</strong>
                          </div>
                          <div className="project-content col-9">
                            <ul>
                              <li>Frontend: ReactJS</li>
                              <li>
                                Backend: PHP (Laravel, Lumen), NodeJS, Apache
                                Kafka, Websocket, Mongodb, MariaDB, Redis,
                                Docker, AWS EC2, AWS S3
                              </li>
                              <li>
                                Architecture: Microservice - Event driven
                                (deploy with K8S), Websocket, SSO
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="project row">
                        <div className="project-name">
                          <strong>FULLSTACK.EDU.VN</strong>
                        </div>
                        <div className="project-time">(01/2019 - Present)</div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Client</strong>
                          </div>
                          <div className="project-content col-9">
                            F8 TECHNOLOGY EDUCATION.,JSC
                          </div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Descriptions</strong>
                          </div>
                          <div className="project-content col-9">
                            Learn programming online (https://f8.edu.vn)
                          </div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Number of members</strong>
                          </div>
                          <div className="project-content col-9">1</div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Position</strong>
                          </div>
                          <div className="project-content col-9">
                            Product Owner, BA, Developer, Tester, Video Editor
                          </div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Responsibility</strong>
                          </div>
                          <div className="project-content col-9">
                            <ul>
                              <li>Developer</li>
                              <li>Solution architect</li>
                            </ul>
                          </div>
                        </div>
                        <div className="project-detail row">
                          <div className="project-field col-3">
                            <strong>Technology in use</strong>
                          </div>
                          <div className="project-content col-9">
                            <ul>
                              <li>Frontend: ReactJS</li>
                              <li>
                                Backend: PHP (Laravel, Lumen), NodeJS, Apache
                                Kafka, Websocket, Mongodb, MariaDB, Redis,
                                Docker, AWS EC2, AWS S3
                              </li>
                              <li>
                                Architecture: Microservice - Event driven
                                (deploy with K8S), Websocket, SSO
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="certificate"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );

  return <Layout page={TestCvContent} />;
}
