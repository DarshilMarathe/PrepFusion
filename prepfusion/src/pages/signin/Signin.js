import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import loginimage from "./loginimage.png";

export default function Signin() {
  return (
    <div>
      <div className="sign-up-container">
        <div className="sign-up-img">
          <img src={loginimage} alt="sign-up-img" />
        </div>
        <div className="sign-up-info">
          <div className="sign-up-logo-and-toggle">
            <div className="sign-up-logo-name">
              <img src={logo} alt="Company Logo" />
              <p>
                Prep<span id="fusion">Fusion</span>
              </p>
            </div>
            <div className="sign-up-toggle">
              <button className="sign-in-button">
                <Link classNameName="sign-in-no-underline" to="/login">
                  Sign In
                </Link>
              </button>
              <button className="sign-up-button">Sign Up</button>
            </div>
          </div>

          <p>Welcome</p>
          <form action="">
            <input
              className="sign-up-username"
              type="text"
              placeholder="Username"
            />
            <input className="sign-up-password" type="text" placeholder="Email" />
            <input
              className="sign-up-password"
              type="password"
              placeholder="Password"
            />
            <input
              className="sign-up-password"
              type="password"
              placeholder="Confirm Password"
            />
            <button className="sign-up-submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
