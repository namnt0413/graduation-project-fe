import { useState } from "react"
import AuthUser from '../components/AuthUser';
import { Link } from 'react-router-dom';
import '../styles/Login.scss' ;
import { useDispatch } from "react-redux";
import { setUser } from "../slices/user";

export default function Login() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const dispatch = useDispatch();

    const submitForm = async () =>{
        // call api login
        try {
            await  http.post('/login',{email:email,password:password}).then((res)=>{
                console.log(res.data);
                dispatch(setUser(res.data.user));
                setToken(res.data.user,res.data.access_token);
            })
        } catch (error) {
            console.log(error)   
        }
    }

    return(
        <>
            {/* <div classNameName="row justify-content-center pt-5">
                <div classNameName="col-sm-6">
                    <div classNameName="card p-4">
                        <h1 classNameName="text-center mb-3">Login </h1>
                        <div classNameName="form-group">
                            <label>Email address:</label>
                            <input type="email" classNameName="form-control" placeholder="Enter email"
                                onChange={e=>setEmail(e.target.value)}
                            id="email" />
                        </div>
                        <div classNameName="form-group mt-3">
                            <label>Password:</label>
                            <input type="password" classNameName="form-control" placeholder="Enter password"
                                onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                        </div>
                        <div></div>
                        <button type="button" onClick={submitForm} classNameName="btn btn-primary mt-4">Login</button>
                    </div>
                </div>
            </div> */}

            <div className="limiter">
                <div className="container-login100" 
                    // style="backgroundImage: url('images/bg-01.jpg');"
                    style={{  
                      backgroundImage: "url(" + "/images/bg-01.jpg" + ")",
 
                    }}
                >
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54" >
                        <div className="login100-form validate-form">
                            <span className="login100-form-title p-b-49">
                                Login
                            </span>

                            <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                                <span className="label-input100 input-field">Email</span>
                                <input className="input100" type="email" name="email" placeholder="Type your email" 
                                    onChange={e=>setEmail(e.target.value)} id="email"
                                />
                                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100 input-field">Password</span>
                                <input  className="input100" type="password" name="password" placeholder="Type your password" 
                                    onChange={e => setPassword(e.target.value)} id="pwd"
                                />
                                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                            </div>

                            <div className="text-right p-t-8 p-b-31">
                                <a href="#">
                                    Forgot password?
                                </a>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn" onClick={submitForm} >
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div className="txt1 text-center p-t-54 p-b-20">
                                <span>
                                    Or Sign Up Using
                                </span>
                            </div>

                            <div className="flex-c-m">
                                <a href="#" className="login100-social-item bg1">
                                    <i className="fa fa-facebook"></i>
                                </a>

                                <a href="#" className="login100-social-item bg2">
                                    <i className="fa fa-twitter"></i>
                                </a>

                                <a href="#" className="login100-social-item bg3">
                                    <i className="fa fa-google"></i>
                                </a>
                            </div>

                            <div className="flex-col-c p-t-55 signup">
                                <span className="txt1 p-b-17">
                                    Or
                                </span>
                                <Link className="nav-link" to="/register">Sign Up</Link>
                                <span className="txt1 p-b-17">
                                    With Us
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	        <div id="dropDownSelect1"></div>
        </>


    )
}

	

	


