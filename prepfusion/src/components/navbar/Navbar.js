import React from "react";
import "./Navbar.css";
import { Link,useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout =()=>{
    localStorage.removeItem('token');
    alert("Logged Out Successfully")
    navigate("/");
  }


  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
        <span>
          Prep<span id="fusion">Fusion</span>
        </span>
      </div>
      <ul>
        <li>
          <Link to="/" className="navbar-no-underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/upload" className="navbar-no-underline">
            Upload
          </Link>
        </li>
        <li>
          <Link to="/problemset" className="navbar-no-underline">
            PYQ's
          </Link>
        </li>
        <li>Statistics</li>
        <li>About</li>
      </ul>

      {!localStorage.getItem('token') ?
      <button>
         <Link className="login-button-no-underline" to="/login">
           Login
         </Link>
      </button>
       :
       <button>
       <Link className="login-button-no-underline" onClick={handleLogout}>
         Logout
       </Link>
    </button>
      }
      
    </div>

    // {/* <ul>
    //   <li><Link to='/'>Homepage</Link></li>
    //   <li><Link to='/mlpredictor'>Mlpage</Link></li>
    //   <li><Link to='/problemset'>Problemset</Link></li>
    // </ul> */}
  );
}
