import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthUser from "../components/AuthUser";
import "../styles/pages/Register.css";

export default function Register() {
  const navigate = useNavigate();
  const { http, setToken } = AuthUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = async () => {
    // api register
    try {
      await http
        .post("/register", { email: email, password: password, name: name })
        .then((res) => {
          console.log(res);
          navigate("/login");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="register_section">
        <div className="register_tab_wrapper">
          <div className="container">
            <div className="row">
              <h1 className="register-title">ĐĂNG KÝ TÀI KHOẢN MỚI</h1>
              <div className="col-md-10 col-md-offset-1">
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

                  <div className="tab-content">
                    <div
                      className="tab-pane fade in active register_left_form"
                      id="contentOne-1"
                    >
                      <div className="row">
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <label htmlFor="">Họ và tên</label>
                          <input
                            className="field-name"
                            id="name"
                            type="text"
                            placeholder="Username*"
                            required
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <label htmlFor="">Email</label>
                          <input
                            className="field-name"
                            id="email"
                            type="email"
                            placeholder="Email*"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <label htmlFor="">Mật khẩu</label>
                          <input
                            className="field-name"
                            id="password"
                            type="password"
                            placeholder=" password*"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <label htmlFor="">Xác nhận mật khẩu</label>
                          <input
                            className="field-name"
                            type="password"
                            name="confirm"
                            placeholder="re-enter password*"
                            required
                          />
                        </div>
                        <div className="login_btn_wrapper register_btn_wrapper login_wrapper ">
                          <button
                            type="submit"
                            className="btn btn-primary login_btn"
                            onClick={submitForm}
                          >
                            Đăng ký
                          </button>
                        </div>
                      </div>
                      <div className="login_message">
                        <p>
                          Đã có tài khoản ?
                          <Link className="nav-link" to="/login">
                            Đăng nhập ngay
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade register_left_form"
                      id="contentOne-2"
                    >
                      <div className="row clearfix">
                        <form action="#" data-toggle="validator">
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <input
                              className="field-name"
                              type="text"
                              name="field-name"
                              placeholder="Company Name"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <input
                              className="field-name"
                              type="email"
                              name="field-name"
                              placeholder="Email*"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <input
                              className="field-name"
                              type="password"
                              name="password"
                              placeholder="password*"
                              required
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <input
                              className="field-name"
                              type="password"
                              name="confirm"
                              placeholder="re-enter password*"
                              required
                            />
                          </div>
                          <div className="login_btn_wrapper register_btn_wrapper login_wrapper">
                            <button
                              type="submit"
                              className="btn btn-primary login_btn"
                            >
                              register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="login_message">
                        <p>
                          Already a member?
                          <Link className="nav-link" to="/login">
                            Login Here
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
