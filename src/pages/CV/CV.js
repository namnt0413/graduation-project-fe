import React from "react";
import { useState } from "react";
import "../../styles/CV.scss";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import TextEditor from "../../components/TextEditor";

export default function CV() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState("<p>Ha Noi, Viet Nam</p>");

  const CvContent = (
    <>
      <div className="cv-background">
        <div className="cv-container">
          <div className="top-toolbar"></div>
          <div className="cv-title">Nguyen Van A - Fullstack Developer</div>
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
                    <TextEditor data="<p>nguyenvana@gmail.com</p>" id="email" />
                  </div>
                  <div className="info-field col-6">
                    <span>Address</span>
                    <TextEditor data={address} id="address" />
                  </div>
                  <div className="info-field col-6">
                    <span>Phone</span>
                    <TextEditor data="<p>+84 1234567890</p>" id="phone" />
                  </div>
                  <div className="info-field col-6">
                    <span>Birthday</span>
                    <TextEditor data="<p>01/01/2000</p>" id="birthday" />
                  </div>
                  <div className="info-field col-6">
                    <span>Gender</span>
                    <TextEditor data="<p>Male</p>" id="gender" />
                  </div>
                </div>
              </div>
              <div className="avatar col-4">
                <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" />
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
                    <a href="https://goo.gl/BVP5kE">https://goo.gl/BVP5kE</a>
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
                    <a href="https://goo.gl/86ULiw">https://goo.gl/86ULiw</a>
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
                          Backend: PHP (Laravel, Lumen), NodeJS, Apache Kafka,
                          Websocket, Mongodb, MariaDB, Redis, Docker, AWS EC2,
                          AWS S3
                        </li>
                        <li>
                          Architecture: Microservice - Event driven (deploy with
                          K8S), Websocket, SSO
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
                          Backend: PHP (Laravel, Lumen), NodeJS, Apache Kafka,
                          Websocket, Mongodb, MariaDB, Redis, Docker, AWS EC2,
                          AWS S3
                        </li>
                        <li>
                          Architecture: Microservice - Event driven (deploy with
                          K8S), Websocket, SSO
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
    </>
  );

  return <Layout page={CvContent} />;
}
