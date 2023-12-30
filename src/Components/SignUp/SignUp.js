import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ReactDOM from "react-dom"
import Toaster from "../../Assets/Toster"
import { SignUpFunction } from "../../Data/ApiFunctions"
import "../SignUp/SignUp.css"
import logo from "../../Assets/logo.png"

const SignUp = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMessageShown, setIsMessageShown] = useState(false);
  const [toast, setToast] = useState({
    status: "",
    message: "",
  });

  async function AmazonMusicSingUP() {
    try {
      const response = await SignUpFunction({name, email, password});
      console.log(response);
      if (response.status === "success") {
        setToast({
          status: "success",
          message: "You are SignIn in Successfully!",
        });
        setIsMessageShown(true);
        setName("");
        setEmail("");
        setPassword("");
        setTimeout (() => {
          navigate("/signIn");
        }, 1200);
      } else {
        setIsMessageShown(true);
        setToast({
          status: "error",
          message: response.message,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  return ReactDOM.createPortal(
    <div className="signup-container">
      <div className="signup-form">
        <img src={logo} alt="Amazon Logo" className="amazon-logo" />
        <h1 className="signUp-heading">Create Account</h1>
        <div className="form-group">
          <label className="signUp-name">Your Name</label>
          <input
            type="text"
            placeholder="Your name"
            onChange={(e) => { setIsMessageShown(false), setName(e.target.value) }}
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="signUp-email">Email</label>
          <input
            type="email"
            placeholder="Your email"
            onChange={(e) => {setIsMessageShown(false), setEmail(e.target.value)}}
            value={email}
          />
        </div>
        <div className="form-group">
          <label className="signUp-password">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            onChange={(e) => {setIsMessageShown(false), setPassword(e.target.value)}}
            value={password}
          />
        </div>
        <button className="signup-button" onClick={AmazonMusicSingUP}>
          Create your Amazon account
        </button>
        <Link to="/signIn">
        <p className="login-info">
          Already have an account? <a href="/signin">Sign in</a>
        </p>
        </Link>
      </div>
      {isMessageShown ? (
        <Toaster status={toast.status} message={toast.message} />
      ) : (
        ""
      )}
    </div>,
    document.getElementById("SignUp")
  );
};

export default SignUp;
