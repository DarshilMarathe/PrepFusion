import React from "react";

import "./GetPremium.css";

export default function GetPremium() {
  return (
    <div className="PrepPro">
      <p className="pp-heading">Become a Premium Student</p>
      <div className="pp-subheading-container">
        <p>Join now and experience learning like never before!</p>
        <p>
          Elevate your academic journey with PrepFusion Premium for only Rs.199
          /- a month.
        </p>
      </div>
      <div className="pp-info-container">
        <div className="pp-free-info">
          <div className="pp-dark-section1">
            <p className="pp-plan-heading1">PrepFusion Free</p>
            <p className="pp-plan-heading2">Enjoy Free Access to PrepFusion</p>
            <p className="pp-plan-subheading1">
              Rs. 0 /-<span>per month</span>
            </p>
          </div>
          <div className="pp-features">
            <p>No ChatBot Access</p>
            <p>Access to Question Classification sessions</p>
            <p>Limited access to Previous Year Question's</p>
            <p>No access to Frequently Asked Questions</p>
            <p>No access to statistics</p>
            <p>Ad-supported Experience</p>
          </div>
          <button>Go Free</button>
        </div>
        <div className="pp-paid-info">
          <div className="pp-dark-section2">
            <p className="pp-plan-heading1">PrepFusion Premium</p>
            <p className="pp-plan-heading2">
              Unlock Pro Learning with PrepFusion
            </p>
            <p className="pp-plan-subheading2">
              Rs. 199 /-<span>per month</span>
            </p>
          </div>
          <div className="pp-features">
            <p>Complete ChatBot Access</p>
            <p>Access to Question Classification sessions</p>
            <p>Complete access to Previous Year Question's</p>
            <p>Access to Frequently Asked Questions</p>
            <p>Access to statistics</p>
            <p>Ad-free Experience</p>
          </div>
          <button>Get Premium</button>
        </div>
      </div>
    </div>
  );
}
