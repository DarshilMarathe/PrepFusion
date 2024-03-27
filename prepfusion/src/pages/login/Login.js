import React,{useState} from "react";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import loginimage from "./loginimage.png";
import { toast } from "react-toastify";
import dataa from '../../data.mjs';



export default function Login() {

  const [credentials, setCredentials] = useState({email:"",password:""})
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setCredentials({
      ...credentials,[e.target.name] : e.target.value,
  })
  console.log(credentials)
  }

  const handleSubmit =async (e)=>{
    console.log(credentials);
    e.preventDefault();

    const response = await fetch(dataa.loginuser, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email : credentials.email,password:credentials.password}),
    });
    const json =  await response.json();
    console.log(json);
    if(json.success){
      //save auth token and redirect
      localStorage.setItem('token',json.authtoken);
      // history.push("/");

      toast.success("Successfully Logged In")

      //TODO: Change navigation
      navigate("/");
    }
    else{
      toast.error("Invalid Credentials")
    }
  }

  return (
    <div>
      <div className="sign-in-container">
        <div className="sign-in-img">
          <img src={loginimage} alt="sign-in-img" />
        </div>
        <div className="sign-in-info">
          <div className="sign-in-logo-and-toggle">
            <div className="sign-in-logo-name">
              <img src={logo} alt="Company Logo" />
              <p>
                Prep<span id="fusion">Fusion</span>
              </p>
            </div>
            <div className="sign-in-toggle">
              <button className="sign-in-button">Sign In</button>
              <button className="sign-up-button">
                <Link className="sign-in-no-underline" to="/signup">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>

          <p>Welcome</p>
          <form action="" onSubmit={handleSubmit}>
            <input
              class="sign-in-username"
              type="text"
              placeholder="Enter email" name="email" id ="email" onChange={handleChange} value={credentials.email}
            />
            <input
              class="sign-in-password"
              type="password"
              placeholder="Password" name="password" id = "password" onChange={handleChange} value={credentials.password}
            />
            {/* <a class="sign-in-forgot-pwd" href="">
              Forgot password?
            </a> */}
            {/* <div>
              <input
                class="sign-in-checkbox"
                type="checkbox"
                id="myCheckbox"
                name="myCheckbox"
              />
              <label className="sign-in-checkbox-label" htmlFor="myCheckbox">
                Remember Password
              </label>
            </div> */}
            <button className="sign-in-submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
