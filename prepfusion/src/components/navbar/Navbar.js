import React,{useState,useEffect} from "react";
import "./Navbar.css";
import { Link,useNavigate} from "react-router-dom";
import logo from "../../images/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout =()=>{
    localStorage.removeItem('token');
    alert("Logged Out Successfully")
    navigate("/");
  }

  const chatbotclick =()=>{
    if(!localStorage.getItem("token")){
      alert("Login to continue")
      navigate('/login')
    }
    else{
      userDetailspremium();
      }
  }

  const userDetailspremium=async ()=>{
    const response = await fetch(`http://localhost:5000/auth/getuser`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem("token")            
        },
      });
      let json =  await response.json();
      console.log(json);
      if(json.success){
          const ispremium = json.user.isPremium;
          if(ispremium){
            //redirect to chatbot
            window.location.href = '';
          }
          else{
            alert("Not a premium user. Get Premium for accessing statistics")
            navigate('/getPrepPro');
          }
      }
      else{
        alert("Invalid Credentials")
        navigate('/');
      }
}




  return (
    <div  className="navbar">
      <Link to="/" className="navbar-no-underline">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
          <span>
            Prep<span id="fusion">Fusion</span>
          </span>
        </div>
      </Link>
      <ul>

        {!localStorage.getItem("token") &&
        <li>
        <Link to="/" className="navbar-no-underline">
          Home
        </Link>
      </li>
        }
        <li>
          <Link to="/" className="navbar-no-underline" onClick={chatbotclick}>
            Chatbot
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
        
        {localStorage.getItem("token") &&
        <li>
        <Link to="/frequentQuestions" className="navbar-no-underline">
          FAQ
        </Link>
      </li>
        }
        <li>
          <Link to="/statistics" className="navbar-no-underline">
            Statistics
          </Link>
        </li>
        <li>
          <Link to="/resources" className="navbar-no-underline">
            Resources
          </Link>
        </li>
      </ul>

      {!localStorage.getItem('token') ?
      <button>
         <Link className="login-button-no-underline" to="/login">
           Login
         </Link>
      </button>
       :
       <div>
        <button style={{marginRight:"1vw"}}>
       <Link className="login-button-no-underline"  to="/user" > 
      {/* //  onClick={handleLogout}> */}
         Profile
       </Link>
    </button>
    <button>
       <Link className="login-button-no-underline"   onClick={handleLogout}>
         Logout
       </Link>
    </button>
       </div>
       
    
      }
      
    </div>

    // {/* <ul>
    //   <li><Link to='/'>Homepage</Link></li>
    //   <li><Link to='/mlpredictor'>Mlpage</Link></li>
    //   <li><Link to='/problemset'>Problemset</Link></li>
    // </ul> */}
  );
}
