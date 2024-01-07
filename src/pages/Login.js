import { useState } from "react";
import AuthUser from "../components/AuthUser";
import { Link } from "react-router-dom";
// import "../styles/Login.scss";
import "../styles/pages/Login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/user";

export default function Login() {
  const { http, setToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

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
    }
  };

  return (
    <>
      <div className="login_section">
        <div className="login_form_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1>LOGIN TO YOUR ACCOUNT</h1>
                <div className="login_wrapper">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                      <a href="#" className="btn btn-primary">
                        {" "}
                        <span>Login with Facebook</span>{" "}
                        <i className="fa fa-facebook"></i>{" "}
                      </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                      <a href="#" className="btn btn-primary google-plus">
                        {" "}
                        Login with Google <i className="fa fa-google-plus"></i>{" "}
                      </a>
                    </div>
                  </div>
                  <h2>or</h2>
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
                      Remember me
                      <input type="checkbox" />
                      <span className="control__indicator"></span>
                    </label>
                    <a href="#" className="forget_password">
                      Forgot Password
                    </a>
                  </div>
                  <div className="login_btn_wrapper">
                    <button href="#" className="btn btn-primary login_btn" onClick={submitForm}>
                      {" "}
                      Login{" "}
                    </button>
                  </div>
                  <div className="login_message">
                    <p>
                        Don’t have an account ? 
                        <Link className="nav-link" to="/register">
                            Register Now
                        </Link>
                    </p>
                  </div>
                </div>
                <p>
                  In case you are using a public/shared computer we recommend
                  that you logout to prevent any un-authorized access to your
                  account
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
