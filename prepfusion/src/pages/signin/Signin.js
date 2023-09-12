import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import loginimage from "./loginimage.png";

export default function Signin() {
  return (
    <div>
      <div class="sign-up-container">
        <div class="sign-up-img">
          <img src={loginimage} alt="sign-up-img" />
        </div>
        <div class="sign-up-info">
          <div class="sign-up-logo-and-toggle">
            <div class="sign-up-logo-name">
              <img src={logo} alt="Company Logo" />
              <p>
                Prep<span id="fusion">Fusion</span>
              </p>
            </div>
            <div class="sign-up-toggle">
              <button class="sign-in-button">
                <Link className="sign-in-no-underline" to="/login">
                  Sign In
                </Link>
              </button>
              <button class="sign-up-button">Sign Up</button>
            </div>
          </div>

          <p>Welcome</p>
          <form action="">
            <input
              class="sign-up-username"
              type="text"
              placeholder="Username"
            />
            <input class="sign-up-password" type="text" placeholder="Email" />
            <input
              class="sign-up-password"
              type="password"
              placeholder="Password"
            />
            <input
              class="sign-up-password"
              type="password"
              placeholder="Confirm Password"
            />
            <button class="sign-up-submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
