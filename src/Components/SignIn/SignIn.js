import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ReactDOM from "react-dom"
import Toaster from "../../Assets/Toster"
import { SignInFunction } from "../../Data/ApiFunctions"
import "../SignIn/SignIn.css"
import logo from "../../Assets/logo.png"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({
    status: "",
    message: "",
  });
  const navigate = useNavigate();
  const [isMessageShown, setIsMessageShown] = useState(false);


  async function AmazonMusicSingIn() {
    try {
      const response = await SignInFunction({email, password});
      console.log(response);
      if (response.status == "success") {
        setToast({
          status: "success",
          message: "You are Logging in Successfully!",
        });
        localStorage.setItem("user-info", JSON.stringify(response));
        setIsMessageShown(true);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        setIsMessageShown(true);
        setToast({
          status: "error",
          message: response.message,
        });
      }
    } 
    catch (e) {
      console.log(e);
    }
  }

  return ReactDOM.createPortal(
    <>
      <div className="signin-container">
        <div className="signin-form">
          <img src={logo} alt="Amazon Logo" className="amazon-logo" />
          <h1 className="signIn-heading">Sign-In</h1>
          <div className="form-group">
            <label className="signIn-email">Email or mobile phone number</label>
            <input
              type="text"
              placeholder="Enter your email or phone number"
              onChange={(e) => {setIsMessageShown(false), setEmail(e.target.value)}}
              value={email}
            />
          </div>
          <div className="form-group">
            <label className="signIn-password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {setIsMessageShown(false), setPassword(e.target.value)}}
              value={password}
            />
          </div>
          <button className="signin-button" onClick={AmazonMusicSingIn}>
            Sign-In
          </button>
          <div className="help-links">
            <a href="#">Forgot your password?</a>
            <span> | </span>
            <a href="#">Need help?</a>
          </div>
          <Link to="/signup">
            <div className="new-to-amazon">
              <small>New to Amazon?</small>
              <a href="#">Create your Amazon account</a>
            </div>
          </Link>
        </div>
      </div>
      { isMessageShown ? (
        <Toaster status={toast.status} message={toast.message} />
      ) : (
        ""
      )}
    </>,
    document.getElementById("SignIn")
  );
};
export default SignIn;