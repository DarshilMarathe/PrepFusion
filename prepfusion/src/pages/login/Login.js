import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import loginimage from "./loginimage.png";

export default function login() {
  return (
    <div>
      <div class="sign-in-container">
        <div class="sign-in-img">
          <img src={loginimage} alt="sign-in-img" />
        </div>
        <div class="sign-in-info">
          <div class="sign-in-logo-and-toggle">
            <div class="sign-in-logo-name">
              <img src={logo} alt="Company Logo" />
              <p>
                Prep<span id="fusion">Fusion</span>
              </p>
            </div>
            <div class="sign-in-toggle">
              <button class="sign-in-button">Sign In</button>
              <button class="sign-up-button">
                <Link className="sign-in-no-underline" to="/signup">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>

          <p>Welcome</p>
          <form action="">
            <input
              class="sign-in-username"
              type="text"
              placeholder="Username or Email"
            />
            <input
              class="sign-in-password"
              type="password"
              placeholder="Password"
            />
            <a class="sign-in-forgot-pwd" href="">
              Forgot password?
            </a>
            <div>
              <input
                class="sign-in-checkbox"
                type="checkbox"
                id="myCheckbox"
                name="myCheckbox"
              />
              <label class="sign-in-checkbox-label" for="myCheckbox">
                Remember Password
              </label>
            </div>
            <button class="sign-in-submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
