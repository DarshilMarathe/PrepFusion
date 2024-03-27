import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import dataa from '../../data.mjs';


import "./UserDashboard.css";

export default function UserDashboard() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    ispremium: "",
    date: "",
  });

  useEffect(() => {

      if(localStorage.getItem("token")){
        userDetails();
      }
      else{
        toast.error("Login to Continue")
        navigate('/login')
      }
        //eslint-disable-next-line
    }, [])

  const userDetails = async () => {
    const response = await fetch(dataa.userdata, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    let json = await response.json();
    console.log(json);
    if (json.success) {
      setUserData({
        name: json.user.name,
        email: json.user.email,
        ispremium: json.user.isPremium,
        date: json.user.date,
      });
    } else {
      toast.warn("Invalid Credentials");
      navigate("/");
    }
  };
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
          <div className="db-profile-pic">{userData.name.substring(0,1)}</div>
          <p>{userData.name}</p>
          <div className="db-tabs">
            <a className="db-tab db-tab-active" href="#">
              Profile
            </a>
            <a className="db-tab" href="#">
              Subscriptions
            </a>
            <Link to='/bookmarks' className="db-tab" >
              Bookmarks
            </Link>
          </div>
        </div>
        <div className="db-dummy" />
        <div className="db-right-div">
          <div className="db-profile" id="profile-section">
            <p className="db-section-heading">Welcome {userData.name}</p>
            <div className="db-details">
              <p className="db-details-subheading">Profile details</p>
              <div>
                <div className="db-username"> Username : {userData.name} </div>
                <div className="db-username"> Email    : {userData.email}</div>
                <div className="db-username"> Premium  : {userData.ispremium ? "Premium User" : "Not Premium"}</div>
                <div className="db-username"> Account Created on : {userData.date.substring(0,10)}</div>
              </div>
            </div>
          </div>

           {/* Table  */}
      <div className="tablePS">
      <table>
        <tr className="prob_row ">
          <th style={{width:"10%"}}>Sr. No</th>
          <th style={{width:"50vw"}}>Question</th>
          <th style={{width:"10%"}}>Solution</th>
          <th style={{width:"10%"}}>Subject</th>
          <th style={{width:"10%"}}>Marks</th>
          <th style={{width:"10%"}}>Year</th>
        </tr>
        {/* {data.map((item, i) => (
        // {(data.filter(item => (item.Marks === 5  && item.Year === 'Dec-19' && item.Subject === 'ADSA'  ))).map((item, i) => (
          <tr > */}
           {data.map((item, i) => (
            <tr key={i}>
            <td className="table_center">{i + 1}</td>
            <td>{item.Questions}</td>
            <td className="table_center imd_table">
              {/* <img src={solImage} width="18px" alt="" /> */}
              {/* <img src={solImage} width="18px" alt="" /> */}
              {/* <div className="dropdown-content">
        Content to display in the dropdown 
        <p>Dropdown content goes here.</p>
      </div> */}
            </td>
            <td className="table_center">{item.Subject}</td>
            <td className="table_center">{item.Marks}</td>
            <td className="table_center">{item.Year}</td>
          </tr>
        ))}
      </table>
      </div>
    
          {/* <div className="db-subcription" id="subscriptions-section">
            <p className="db-section-heading">Your Subscription</p>
            <div className="db-plans">
              <div className="db-free">
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
          </div> */}
        </div>

    </div>
  );
}



const data = [
  {
    "Questions": "A secure e-voting system is to be designed. Discuss the security goals that must met and enlist mechanisms for the same.",
    "Marks": 5,
    "Year": "Nov-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain principle elements of NAC",
    "Marks": 5,
    "Year": "Nov-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Enlist properties and application of hash function.",
    "Marks": 5,
    "Year": "Nov-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Describe different types of Denial of service attacks",
    "Marks": 5,
    "Year": "Nov-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain the need of Network Access Control in Enterprise Networks. Explain the major NAC enforcement methods.",
    "Marks": 10,
    "Year": "Nov-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain in detail with diagram, How Kerberos can be used for authentication.",
    "Marks": 10,
    "Year": "Nov-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  }
]