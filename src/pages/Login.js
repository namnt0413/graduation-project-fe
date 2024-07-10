import { useState } from "react";
import AuthUser from "../components/AuthUser";
import AuthCompany from "../components/AuthCompany";
import { Link } from "react-router-dom";
// import "../styles/Login.scss";
import "../styles/pages/Login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/user";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
  const { http, setToken } = AuthUser();
  const { companyHttp, companySetToken } = AuthCompany();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [companyEmail, setCompanyEmail] = useState();
  const [companyPassword, setCompanyPassword] = useState();
  const dispatch = useDispatch();
  const notifyFailed = () => toast.error("Đăng nhập thất bại");

  const submitForm = async () => {
    // call api login
    try {
      await http
        .post("/login", { email: email, password: password })
        .then((res) => {
          console.log(res.data);
          dispatch(setUser(res.data.user));
          setToken(res.data.user, res.data.access_token);
        });
    } catch (error) {
      console.log(error);
      notifyFailed()
    }
  };

  const companySubmitForm = async () => {
    // call api login
    try {
      await companyHttp
        .post("/company-login", { email: companyEmail, password: companyPassword })
        .then((res) => {
          console.log(res.data);
          companySetToken(res.data.company, res.data.access_token);
        });
    } catch (error) {
      console.log(error);
      notifyFailed()
    }
  };

  return (
    <>
      <ToastContainer  className="toast-position" />
      <div className="login_section">
        <div className="login_form_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1>ĐĂNG NHẬP TÀI KHOẢN</h1>
                <div role="tabpanel">
                  {/* <!-- Nav tabs --> */}
                  <ul id="tabOne" className="nav register-tabs">
                    <li className="active">
                      <a href="#contentOne-1" data-toggle="tab">
                        Ứng viên <br />
                        <span>Tôi đang tìm kiếm công việc</span>
                      </a>
                    </li>
                    <li>
                      <a href="#contentOne-2" data-toggle="tab">
                        Công ty <br />{" "}
                        <span>Tôi đang tìm kiếm nhân lực</span>
                      </a>
                    </li>
                  </ul>
                  <div className="login_wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                        <a href="#" className="btn btn-primary">
                          {" "}
                          <span>Đăng nhập với Facebook</span>{" "}
                          <i className="fa fa-facebook"></i>{" "}
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                        <a href="#" className="btn btn-primary google-plus">
                          {" "}
                          Đăng nhập với Google{" "}
                          <i className="fa fa-google-plus"></i>{" "}
                        </a>
                      </div>
                    </div>
                    <h2>or</h2>
                    <div
                      className="tab-pane fade in active login_left_form"
                      id="contentOne-1"
                    >
                      <div className="formsix-pos">
                        <div className="form-group i-email">
                          <input
                            type="email"
                            className="form-control"
                            required=""
                            id="email2"
                            placeholder="Email*"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="formsix-e">
                        <div className="form-group i-password">
                          <input
                            type="password"
                            className="form-control"
                            required=""
                            id="password2"
                            placeholder="Password *"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="login_remember_box">
                        <label className="control control--checkbox">
                          Lưu thông tin đăng nhập
                          <input type="checkbox" />
                          <span className="control__indicator"></span>
                        </label>
                        <a href="#" className="forget_password">
                          Quên mật khẩu
                        </a>
                      </div>
                      <div className="login_btn_wrapper">
                        <button
                          href="#"
                          className="btn btn-primary login_btn"
                          onClick={submitForm}
                        >
                          {" "}
                          Đăng nhập{" "}
                        </button>
                      </div>
                      <div className="login_message">
                        <p>
                          Chưa có tài khoản ?
                          <Link className="nav-link" to="/register">
                            Đăng ký ngay
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade login_left_form"
                      id="contentOne-2"
                    >
                      <div className="formsix-pos">
                        <div className="form-group i-email">
                          <input
                            type="email"
                            className="form-control"
                            required=""
                            id="email3"
                            placeholder="Company Email*"
                            onChange={(e) => setCompanyEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="formsix-e">
                        <div className="form-group i-password">
                          <input
                            type="password"
                            className="form-control"
                            required=""
                            id="password3"
                            placeholder="Password *"
                            onChange={(e) => setCompanyPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="login_remember_box">
                        <label className="control control--checkbox">
                          Ghi nhớ đăng nhập
                          <input type="checkbox" />
                          <span className="control__indicator"></span>
                        </label>
                        <a href="#" className="company_forget_password" style={{ float: "right" }}>
                          Quên mật khẩu
                        </a>
                      </div>
                      <div className="login_btn_wrapper">
                        <button
                          href="#"
                          className="btn btn-primary login_btn"
                          onClick={companySubmitForm}
                        >
                          {" "}
                          ĐĂNG NHẬP{" "}
                        </button>
                      </div>
                      <div className="login_message">
                        <p>
                          Chưa có tài khoản ?
                          <Link className="nav-link" to="/register">
                            Đăng ký ngay
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
