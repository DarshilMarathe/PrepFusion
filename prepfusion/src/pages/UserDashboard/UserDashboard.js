import React from 'react'
import './UserDashboard.css'

export default function UserDashboard() {
  // <script>
  //     // Add event listeners to the tabs
  //     document.querySelectorAll(".db-tab").forEach((tab) => {
  //       tab.addEventListener("click", () => {
  //         // Get the section ID
  //         const sectionId = tab.getAttribute("href").substring(1);

  //         // Scroll to the section
  //         document.querySelector(`#${sectionId}`).scrollIntoView();

  //         // Remove the active class from all tabs
  //         document.querySelectorAll(".tab").forEach((tab) => {
  //           tab.classList.remove("active-tab");
  //         });

  //         // Add the active class to the current tab
  //         tab.classList.add("active-tab");
  //       });
  //     });
  //   </script>
  return (
    <div className="db-main">
      <div className="db-left-div">
        <div className="db-profile-pic">RK</div>
        <p>Rutvik</p>
        <div className="db-tabs">
          <a className="db-tab db-tab-active" href="#">
            Profile
          </a>
          <a className="db-tab" href="#">
            Subscriptions
          </a>
          <a className="db-tab" href="#">
            Bookmarks
          </a>
        </div>
      </div>
      <div className="db-dummy" />
      <div className="db-right-div">
        <div className="db-profile" id="profile-section">
          <p className="db-section-heading">My profile</p>
          <div className="db-details">
            <p className="db-details-subheading">Your details</p>
            <form action>
              <input
                className="db-username"
                type="text"
                placeholder="First name"
              />
              <input
                className="db-password"
                type="text"
                placeholder="Last name"
              />
              <input
                className="db-password"
                type="text"
                placeholder="Username"
              />
              <input className="db-password" type="text" placeholder="Email" />
              <button className="db-submit-button">Save</button>
            </form>
          </div>
        </div>
        <div className="db-subcription" id="subscriptions-section">
          <p className="db-section-heading">Your Subscription</p>
          <div className="db-plans">
            <div className="db-free">
              <img src alt="target" />
              <p className="db-plan-heading">Free</p>
              <p className="db-plan-subheading">
                Rs. 0 <span>per month</span>
              </p>
              <hr />
              <div className="db-features">
                <p>Chatbot (3 trials )</p>
                <p>QClass</p>
                <p>PYQ's</p>
                <p>Ads</p>
              </div>
              <button>Get started</button>
            </div>
            <div className="db-paid">
              <img src alt="target" />
              <p className="db-plan-heading">Premium</p>
              <p className="db-plan-subheading">
                Rs. 199 <span>per month</span>
              </p>
              <hr />
              <div className="db-features">
                <p>Chatbot</p>
                <p>QClass</p>
                <p>PYQ's</p>
                <p>FAQ's</p>
              </div>
              <button>Get started</button>
            </div>
          </div>
        </div>
        <div className="db-bookmark" id="bookmarks-section">
          <p className="db-section-heading">Your Bookmark's</p>
          <div className="db-plans">
            <div className="db-free">
              <img src alt="target" />
              <p className="db-plan-heading">Free</p>
              <p className="db-plan-subheading">
                Rs. 0 <span>per month</span>
              </p>
              <hr />
              <div className="db-features">
                <p>Chatbot (3 trials )</p>
                <p>QClass</p>
                <p>PYQ's</p>
                <p>Ads</p>
              </div>
              <button>Get started</button>
            </div>
            <div className="db-paid">
              <img src alt="target" />
              <p className="db-plan-heading">Premium</p>
              <p className="db-plan-subheading">
                Rs. 199 <span>per month</span>
              </p>
              <hr />
              <div className="db-features">
                <p>Chatbot</p>
                <p>QClass</p>
                <p>PYQ's</p>
                <p>FAQ's</p>
              </div>
              <button>Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
