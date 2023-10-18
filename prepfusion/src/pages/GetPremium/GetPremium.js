import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


import "./GetPremium.css";

export default function GetPremium() {
	const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    ispremium: "",
    date: "",
  });

  const [premiumprice, setPremiumprice] = useState(199);

  const user_nameemail = async () => {
    const response = await fetch(`http://localhost:5000/auth/getuser`, {
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
      // toast.error("Invalid Credentials");
      // navigate("/");
    }
    };


  const handlePayment = async () => {
		try {

			if(!localStorage.getItem("token")){
				toast.warn("You have not logged in.");
				return navigate("/login");
			}
            // console.log("Hanlde")
			const orderUrl = "http://localhost:5000/payment/orders";
			const { data } = await axios.post(
				orderUrl,
				{ amount: premiumprice },
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
						'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
					},
				}
			);
            console.log("2nd")
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

  const initPayment = (data) => {
    console.log("In init")
    const options = {
      key: "rzp_test_zkRk5Km3mrtYWp",
      amount: data.amount,
      currency: data.currency,
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/payment/verify";
          const { data } = await axios.post(verifyUrl, response, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
              'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
            },
          });
          console.log(data);
          if(data.status){
            toast.success("Purchased PrepPro Succesfully");
            //Update in DB
            //fetch user id
            userDetails(); 

            // navigate("") --> to a page to show order and pay id 
            navigate("/user")
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    console.log(options)
    const rzp1 = new window.Razorpay(options);


    rzp1.open();
  };

const userDetails = async () => {
  const response = await fetch(`http://localhost:5000/auth/getuser`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("token"),
    },
  });
  let json = await response.json();
  console.log(json);
  if (json.success) {
    updatepremium(json.user._id);
  } else {
    toast.error("Invalid Credentials");
    navigate("/");
  }
  };

  //update a note
  const updatepremium = async (id)=>{

    //API CALL   -- searched fetch with headers
    const response = await fetch(`http://localhost:5000/payment/status/${id}`, {
      method: "PUT", 
     
      headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({}), 
    });
    const json =  await response.json();

    console.log(json);
    toast.info("Payment details have been mailed to your registered Email Id")
     
    }
    
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
          <button  onClick={handlePayment}>Get Premium</button>
        </div>
      </div>
    </div>
  );
}
