import React,{useState} from "react";
import "./Signin.css";
import { Link,useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import loginimage from "./loginimage.png";

export default function Signin() {
  const [credentials, setCredentials] = useState({name : "",email : "" , password : "",cpassword : ""})

      
      let navigate = useNavigate();
  
      const onChange=(e)=>{
          setCredentials({
              ...credentials,[e.target.name] : e.target.value,
          })
      }
  

  const handleSubmit=async (e)=>{
    if(credentials.password !== credentials.cpassword)
    {
      return alert("Password doesnt match")
    }
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/auth/createuser`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name : credentials.name , email : credentials.email,password:credentials.password}),
        });
        const json =  await response.json();
        console.log(json);
        if(json.success){
          //save auth token and redirect
          localStorage.setItem('token',json.authtoken);

          //Can use alert bootstrap
          alert("Successfully Signed In")
           navigate("/");

        }
        else{
          alert("Invalid Credentials")
        }
  }


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
          <form action="" onSubmit={handleSubmit}>
            <input
              className="sign-up-username"
              type="text"
              placeholder="Username" name="name" id="name" onChange={onChange} value={credentials.name}
            />
            <input className="sign-up-password" type="email" placeholder="Email" name="email" id="email" onChange={onChange} value={credentials.email}/>
            <input
              className="sign-up-password"
              type="password"
              placeholder="Password" name="password" id="password" onChange={onChange} value={credentials.password}
            />
            <input
              className="sign-up-password"
              type="password"
              placeholder="Confirm Password" name="cpassword" id="cpassword" onChange={onChange} value={credentials.cpassword}
            />
            <button className="sign-up-submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
