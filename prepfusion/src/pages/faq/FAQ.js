import React from "react";
import { useState,useEffect} from "react";
// import "./Problemset.css";
import { useNavigate } from "react-router-dom";

import solImage from "../../images/solution-image.png";
import './FAQ.css'

export default function FAQ() {

    const [blurpage, setBlurpage] = useState("blur(10px)")
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(userAccess,1000)
          //eslint-disable-next-line
      }, [])

      const userAccess = ()=>{
        if(!localStorage.getItem("token")){
          alert("Login to continue")
          navigate('/login')
        }
        else{
          userDetailspremium();
          }
      }
    
  const [selectedYear, setSelectedYear] = useState("Dec-2022");
  const [selectedSubject, setSelectedSubject] = useState("IP");

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
            setBlurpage("");
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




   
    const [showData, setShowData] = useState(IP);

    const [selectedname, setSelectedname] = useState("HTMLcode")

    const [ipselected, setIpselected] = useState("hidden")
    const [adsaselected, setAdsaselected] = useState("hidden")
    const [cnsselected, setCnsselected] = useState("hidden")
    
    const IPclick = (e)=>{
        setIpselected("");
        setCnsselected("hidden");
        setAdsaselected("hidden");

        setShowData(IP);
        setSelectedname("HTMLcode")
    }
    const ADSAclick = (e)=>{
        setIpselected("hidden");
        setCnsselected("hidden");
        setAdsaselected("");

        setShowData(ADSA);
        setSelectedname("Knapsack")

    }
    const CNSclick = (e)=>{
        setAdsaselected("hidden");
        setIpselected("hidden");
        setCnsselected("");

        setShowData(CNS);
        setSelectedname("RSA")

    }

  return (
    <>
    <div style={{filter:`${blurpage}`}}>


      <div className="headerPS">
        <h1 className="headfaq">Frequently Asked Questions</h1>
      </div>


      <div className="selctionPS">

        <div className="selection1 center_faqs">
          <div className="faqpageselect" onClick={()=>{IPclick("IP")}}>
            <div>
                <p>Internet Programming</p>
            </div>
          </div>
          <div className="faqpageselect" onClick={()=>{CNSclick("CNS")}}>
            <div>
                <p>Computer Network Security</p>
            </div>
          </div>
          <div className="faqpageselect" onClick={()=>{ADSAclick("ADSA")}}>
            <div>
                <p>Adv. Data Structures</p>
            </div>
          </div>
        </div>

      </div>

      <div className="selctionPS mardfaq-2" style={{"contentVisibility" : ipselected}}>

        <div className="selection1 center_faqs">
     
            {IP.map((item, i) => (
                <div className="faqpageselect" onClick={()=>{setSelectedname(item.name)}}>
                    <div>
                        <p>{item.name}</p>
                    </div>
                </div>
            ))} 
 
        </div>
        </div>

        <div className="selctionPS mardfaq-2" style={{"contentVisibility" : cnsselected}}>

<div className="selection1 center_faqs">

    {CNS.map((item, i) => (
        <div className="faqpageselect" onClick={()=>{setSelectedname(item.name)}}>
            <div>
                <p>{item.name}</p>
            </div>
        </div>
    ))} 

</div>
</div>
<div className="selctionPS mardfaq-2" style={{"contentVisibility" : adsaselected}}>

<div className="selection1 center_faqs ">

    {ADSA.map((item, i) => (
        <div className="faqpageselect" onClick={()=>{setSelectedname(item.name)}}>
            <div>
                <p>{item.name}</p>
            </div>
        </div>
    ))} 

</div>
</div>



      {/* Table  */}
      <div className="tablePS">
      <table>
        <tr className="prob_row ">
          <th style={{width:"10%"}}>Sr. No</th>
          <th style={{width:"50vw"}}>Question</th>
          <th style={{width:"10%"}}>Solution</th>
          <th style={{width:"10%"}}>Marks</th>
          <th style={{width:"10%"}}>Year</th>
        </tr>

        {showData.find(item => item.name === selectedname).questions.map((question, j) => (
        <tr key={j}>
            <td className="table_center">{j + 1}</td>
            <td>{question.Question}</td>
            <td className="table_center">
            <img src={solImage} width="18px" alt="" />
            </td>
            <td className="table_center">{question.Marks}</td>
            <td className="table_center">{question.Year}</td>
        </tr>
        ))}

      </table>
      </div>

      <div>

    </div>
    </div>
      
    </>
  );
}




const IP = [
    {
        name:"HTMLcode",
        questions:[
            {
              "Question": "Write an HTML code to process placement registration form which accepts the student details like name, address, email-id, contact-number, date of birth, percentage, branch (must be selected using radio button) and technology-preferred (using checkbox). Write the JavaScript code to validate the following: i. valid email id (“@” and “.”)). ii. all the fields must be filled before submission of the form. iii. percentage validation is minimum first class (= > 60 %)",
              "Year": "Dec-2019",
              "Marks": 10
            },
            {
              "Question": "Write a HTML5 code for embedding audio & video elements in web page.",
              "Year": "Dec-2019",
              "Marks": 10
            },
            {
              "Question": "Write an external stylesheet and link it with HTML code. The stylesheet should include the following: i. The web page will have the background image �img1.jpg�. ii. The table headings will have red background color. iii. Background color of alternate paragraphs are different. iv. The hyperlinks on the web page will not have underline.",
              "Year": "May-2019",
              "Marks": 10
            },
            {
              "Question": "Write code to process online Alumni information for your college. Create forms to get name, address, date of birth, and email id. Use check boxes for taking hobbies and radio buttons for selecting branch. Write JavaScript code to validate the following: i. User has filled all the fields prior to form submission. ii. Valid email-id (with �@� and �.�). iii. Age validation using DOB (>=22 years).",
              "Year": "May-2019",
              "Marks": 10
            },
            {
              "Question": "Write HTML5 code for embedding the audio and video elements in the web page.",
              "Year": "May-2019",
              "Marks": 10
            },
            {
              "Question": "Create a HTML page Showing a message \"I use media query\". Write media query such that the text color changes to light gray when browser window is 600px wide or less and otherwise it is black.",
              "Year": "May-2019",
              "Marks": 5
            },
            {
              "Question": "Create a HTML form that accepts first name, last name, department and designation from user.",
              "Year": "Dec-2018",
              "Marks": 5
            },
            {
              "Question": "Create a HTML form to accept name (TextField), address (TextArea), gender (Radio), and Country (DropDown) fields from user",
              "Year": "Dec-2018",
              "Marks": 5
            }
          ]
    },
    {
        name:"XML",
        questions:[
            {
              "Question": "Differentiate between XML & HTML.",
              "Year": "Dec-2019",
              "Marks": 5
            },
            {
              "Question": "Explain XML & DTD with example.",
              "Year": "Dec-2019",
              "Marks": 10
            },
            {
              "Question": "Differentiate between XML & HTML.",
              "Year": "May-2022",
              "Marks": 5
            },
            {
              "Question": "Explain XML schema in detail",
              "Year": "May-2022",
              "Marks": 5
            },
            {
              "Question": "Compare XML and JSON",
              "Year": "Dec-2022",
              "Marks": 10
            },
            {
              "Question": "Create a HTML page Showing a message \"I use media query\". Write media query such that the text color changes to light gray when browser window is 600px wide or less and otherwise it is black.",
              "Year": "May-19",
              "Marks": 5
            },
            {
              "Question": "Create a HTML form that accepts first name, last name, department and designation from user.",
              "Year": "Dec-18",
              "Marks": 5
            },
            {
              "Question": "Create a HTML form to accept name (TextField), address (TextArea), gender (Radio), and Country (DropDown) fields from user",
              "Year": "Dec-18",
              "Marks": 5
            }
          ]
    },
    {
        name:"Nodejs",
        questions:[
            {
              "Question": "Explain features of Nodejs",
              "Year": "May-2022",
              "Marks": 5
            },
            {
              "Question": "Explain event loop in Nodejs",
              "Year": "May-2022",
              "Marks": 5
            },
            {
              "Question": "What are Buffers and Streams in NodeJs?",
              "Year": "May-2022",
              "Marks": 5
            },
            {
              "Question": "What are Buffers and Streams in NodeJs? Explain with example.",
              "Year": "Dec-2022",
              "Marks": 10
            },
            {
              "Question": "What is NodeJs? Explain features of NodeJs. State different types of NodeJs Modules.",
              "Year": "Dec-2022",
              "Marks": 10
            },
            {
              "Question": "Create a HTML page Showing a message \"I use media query\". Write media query such that the text color changes to light gray when browser window is 600px wide or less and otherwise it is black.",
              "Year": "May-19",
              "Marks": 5
            },
            {
              "Question": "Create a HTML form that accepts first name, last name, department and designation from user.",
              "Year": "Dec-18",
              "Marks": 5
            },
            {
              "Question": "Create a HTML form to accept name (TextField), address (TextArea), gender (Radio), and Country (DropDown) fields from user",
              "Year": "Dec-18",
              "Marks": 5
            }
          ]
    },
    
    {
        name:"ES6",
        questions:[
            {
              "Question": "Explain Promises in ES6.",
              "Year": "May-2022",
              "Marks": 5
            },
            {
              "Question": "Differentiate between ES5 and ES6.",
              "Year": "May-2022",
              "Marks": 5
            },
            {
              "Question": "Explain Arrow function in ES6 with an example.",
              "Year": "May-2022",
              "Marks": 5
            },
            {
              "Question": "Explain Arrow function in ES6 with an example.",
              "Year": "Dec-2022",
              "Marks": 10
            }
          ]
    },
    
    {
        name:"Javascript",
        questions:[
            {
              "Question": "Write code to process online Alumni information for your college. Create forms to get name, address, date of birth, and email id. Use check boxes for taking hobbies and radio buttons for selecting branch. Write JavaScript code to validate the following: i. User has filled all the fields prior to form submission. ii. Valid email-id (with �@� and �.�). iii. Age validation using DOB (>=22 years).",
              "Year": "",
              "Marks": "May-19"
            },
            {
              "Question": "Write an HTML code to process placement registration form which accepts the student details like name, address, email-id, contact-number, date of birth, percentage, branch (must be selected using radio button) and technology-preferred (using checkbox). Write the JavaScript code to validate the following: i. valid email id (�@� and �.�). ii. all the fields must be filled before submission of the form. iii. percentage validation is minimum first class (= > 60 %)",
              "Year": "",
              "Marks": "Dec-2019"
            },
            {
              "Question": "What are events in Javascript? Explain different types of events.",
              "Year": "",
              "Marks": "May-2022"
            },
            {
              "Question": "Explain built-in objects in JavaScript.",
              "Year": "",
              "Marks": "May-2022"
            }
          ]
    }
]
const CNS = [
    {
        name:"RSA",
        questions:[
            {
              "Question": "In an RSA system, given N = 91e = 5 Calculate O(n),p, q and private key d. What is the cipher text when you encrypt \nmessage m = 25 using the public key. Also perform decryption.",
              "Year": "Nov-2022",
              "Marks": 10
            },
            {
              "Question": "Perform encryption and decryption using RSA algorithm with p=7,q-11,e-17 and M=8.",
              "Year": "Dec-2019",
              "Marks": 10
            },
            {
              "Question": "Given modulus n=221 and public key, e-7, find the values of p, q, phi(n), and d using RSA. Encrypt M-5.",
              "Year": "May-2019",
              "Marks": 10
            },
            {
              "Question": "Given modulus n = 91 and public key, e = 5 find the values of p, q, phi(n), and d using RSA. Encrypt M = 25 Also perform decryption.",
              "Year": "Nov-2018",
              "Marks": 10
            },
            {
              "Question": "Elaborate the steps of key generation using the RSA algorithm. In RSA system the public key (E, N) of user A is defined as (7,187). \nCalculate fi(N) and private key 'D'. What is the cipher text for M-10 using the public key",
              "Year": "",
              "Marks": ""
            }
          ]
    },
    {
        name:"IPSEC",
        questions:[
            {
              "Question": "How is security achieved in the transport and tunnel modes of IPSEC? Describe the role of AH and ESP.",
              "Year": "Nov-2022",
              "Marks": 10
            },
            {
              "Question": "How does IPSec help to achieve authentication and confidentiality? Justify the noad of AL and ESD",
              "Year": "May-2019",
              "Marks": 5
            },
            {
              "Question": "Write short notes on IPSec",
              "Year": "Nov-2018",
              "Marks": 5
            }
          ]
    },
    {
        name:"Network Access Control",
        questions:[
            {
              "Question": "Explain principle elements of NAC",
              "Year": "Nov-2022",
              "Marks": 5
            },
            {
              "Question": "Explain the need of Network Access Control in Enterprise Networks. Explain the major NAC enforcement methods.",
              "Year": "Nov-2022",
              "Marks": 10
            },
            {
              "Question": "Write Short Notes on: Use cases for NAC",
              "Year": "Nov-2022",
              "Marks": 5
            }
          ]
    }
]

const ADSA = [
    {
        name:"Knapsack",
        questions:[
            {
              "Question": "Compare greedy and dynamic programming approach for an algorithm design. Explain how  both can be used to solve knapsack problem",
              "Year": "Dec 2018",
              "Marks": 10
            },
            {
              "Question": "Consider knapsack problem where n=6 m= 15 and profits are (p1,p2,p3,p4,p5,p6) = (1,2,4,4,7,2) and weights are (w1,w2,w3,w4,w5,w6) = 10,5,4,2,7,3. Find maximum profit using fractional knapsack",
              "Year": "Mar 2019",
              "Marks": 10
            },
            {
              "Question": "Explain Knapsack Problem with an example.",
              "Year": "Dec 2019",
              "Marks": 10
            },
            {
              "Question": "Write algorithm for greedy knapsack and Obtain the solution to following knapsack problem where n=7,m=15 (pl,p2.....p7) = (10,5,15,7,6,18,3), (wl,w2......,w7) (2,3,5,7,1,4,1).",
              "Year": "May 2022",
              "Marks": 10
            },
            {
              "Question": "Write algorithm programming N-4, M-21 for 0/1 knapsack problem using dynamic the following example. Also solve the following- (pl,p2,p3,p4)-(2,5,8,1),(w1w2,w3,w4)=(10,15,6,9)",
              "Year": "May 2022",
              "Marks": 10
            }
          ]
    },
    {
        name:"Longest Common Subsequence",
        questions:[
            {
              "Question": "What is common longest subsequence problem? Find LCS for following string X=ACBAED Y= ABCABE",
              "Year": "Dec 2018",
              "Marks": 10
            },
            {
              "Question": "What is longest common subsequence problem? Find LCS for the following string: String X: ABCDGH String Y: AEDFHR",
              "Year": "Dec 2019",
              "Marks": 10
            },
            {
              "Question": "Determine the LCS of the following sequences: X: {A, B, C, B, D, A, B} Y: (B, D. C, A, B, A)",
              "Year": "May 2022",
              "Marks": 5
            },
            {
              "Question": "Find longest common subsequence String x= ACBAED String y =ABCABE",
              "Year": "Mar 2019",
              "Marks": 5
            }
          ]
    },
    {
        name:"Rabin Karp",
        questions:[
            {
              "Question": "Short note on : Rabin Karp Algorithm",
              "Year": "Dec 2018",
              "Marks": 10
            },
            {
              "Question": "Explain Rabin Karp Algorithm",
              "Year": "Mar 2019",
              "Marks": 10
            },
            {
              "Question": "Explain Rabin Karp Algorithm�in�detail",
              "Year": "Dec 2019",
              "Marks": 10
            },
            {
              "Question": "Rewrite and Compare Rabin Karp and Knuth Morris Pratt Algorithms Give the pseudo code for the KMP String Matching Algorithm.",
              "Year": "May 2022",
              "Marks": 10
            }
          ]
    },
    {
        name:"Greedy and Dynamic",
        questions:[
            {
              "Question": "Compare greedy and dynamic programming approach for an algorithm design. Explain how  both can be used to solve knapsack problem",
              "Year": "Dec 2018",
              "Marks": 10
            },
            {
              "Question": "Differentiate between greedy method and dynamic programming.",
              "Year": "Mar 2019",
              "Marks": 5
            },
            {
              "Question": "Differentiate between Greedy method and Dynamic Programming.",
              "Year": "Dec 2019",
              "Marks": 5
            }
          ]
    }
]

