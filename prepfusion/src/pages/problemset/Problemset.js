import React from "react";
import { useState} from "react";
import "./Problemset.css";
import { toast } from "react-toastify";


import solImage from "../../images/solution-image.png";
import top from "../../images/top.png";
import top1 from "../../images/top1.png";
import top2 from "../../images/top2.png";

export default function Problemset() {

    const [selectedSubject, setSelectedSubject] = useState("All");
    const [selectedMarks, setSelectedMarks] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");
    const[selectedStudentYear,setSelectedStudentYear] = useState("All");
    const[selectedBranch,setSelectedBranch] = useState("All");
    const[selectedModule,setSelectedModule]  = useState("All");
    // Filter the data based on user selections
    const filteredData = data.filter((item) => {
      return (
        (selectedSubject === "All" || item.Subject === selectedSubject) &&
        (selectedMarks === "All" || item.Marks.toString() === selectedMarks) &&
        (selectedYear === "All" || item.Year2.toString() === selectedYear) &&
        (selectedStudentYear ==="All" || item.Student_year === selectedStudentYear) &&
        (selectedBranch === "All" || item.Branch === selectedBranch) &&
        (selectedModule === "All" || item.Module.toString() === selectedModule)
      );
    });

    const clickbookmark = async (item)=>{
      console.log("Clicked item = " + item.Questions + item.Module + item.Marks + item.Year);
      const {Questions,Subject,Marks,Year} = item;

        //API
        const response = await fetch(`http://127.0.0.1:5000/question/bookmark`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token'),
          },
          body: JSON.stringify({quest : Questions,subject : Subject,marks : Marks, year : Year}), 
        });
        const note =  await response.json();
        toast.success("Bookmarked Successfully");
        // setNotes(notes.push(note));   --> updates array 
        // setNotes(notes.concat(note)); //--> returns array
      }


    

  return (
    <>
      <div className="headerPS">
        <div className="header0 header1">
          <img src={top} alt="top_img" />
          <div className="txt">
            <p className="txt1">Top Questions for Each Subject</p>
            <p className="txt2">Currated by PrepFusion Team</p>
          </div>
        </div>

        <div className="header0 header1">
          <img src={top1} alt="top_img" />
          <div className="txt">
            <p className="txt1">Study Material</p>
            <p className="txt2">Ace better with resources</p>
          </div>
        </div>

        <div className="header0 header1">
          <img src={top2} alt="top_img" />
          <div className="txt">
            <p className="txt1">Viva Specific</p>
            <p className="txt2">Strong Foundational Plan</p>
          </div>
        </div>
      </div>


      <div className="selctionPS">

        <div className="selection1">

          <div className="select s1">
            <span> Select Your Year : </span>
            <select name="studentYear" id="studentYear" onChange={(e)=>{setSelectedStudentYear(e.target.value)}}>
              <option value="All" selected>Select Year</option>
              <option value="F.E">First Year</option>
              <option value="S.E">Second Year</option>
              <option value="T.E">Third Year</option>
              <option value="B.E">Fouth Year</option>
            </select>
          </div>

          <div className="select s2">
           <span> Branch : </span>
            <select name="Branch" id="Branch" onChange={(e) => {setSelectedBranch(e.target.value)}}>
              <option value="All" slected>All</option>
              <option value="Comps">CS</option>
              <option value="IT">IT</option>
              <option value="AIDS">AIDS</option>
              <option value="EXTC">EXTC</option>
            </select>
          </div>
        </div>

        <div className="selection2">

          <div className="select2 s21">
            <span> Subject : </span>
            <select name="subject" id="subject" value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
         >
              <option value="All" selected>All</option>
              <option value="ADSA">ADSA</option>
              <option value="CNS">CNS</option>
              <option value="IP">IP</option>
              <option value="SE">SE</option>
              <option value="EEB">EEB</option>
            </select>
          </div>

          <div className="select2 s22">
           <span> Year : </span>
            <select name="Branch" id="Branch" value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
              <option value="All" slected>All</option>
              <option value="2022">2022</option>
              {/* <option value="2021">2021</option> */}
              {/* <option value="2020">2020</option> */}
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>
          </div>

          
          <div className="select2 s22">
           <span> Module : </span>
            <select name="Branch" id="Branch" value={selectedYear}
            onChange={(e) => setSelectedModule(e.target.value)}
          >
              <option value="All" selected>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>


          <div className="select2 s23">
           <span> Marks : </span>
            {/* <select name="Branch" id="Branch" onChange={handleMarks}> */}
            <select name="Branch" id="Branch"  value={selectedMarks}
            onChange={(e) => setSelectedMarks(e.target.value)}
         >
              <option value="All" slected>All</option>
              <option value="10">10</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="select2 s24">
            <input type="text" placeholder="Type your question" />
           <span className="colorblue"> Search </span>
          </div>

        </div>

      </div>

      {/* Table  */}
      <div className="tablePS">
      <table>
        <tr className="prob_row ">
          <th style={{width:"10%"}}>Sr. No</th>
          <th style={{width:"50vw"}}>Question</th>
          <th style={{width:"10%"}}>Bookmark</th>
          <th style={{width:"10%"}}>Subject</th>
          <th style={{width:"10%"}}>Marks</th>
          <th style={{width:"10%"}}>Year</th>
        </tr>
        {/* {data.map((item, i) => (
        // {(data.filter(item => (item.Marks === 5  && item.Year === 'Dec-19' && item.Subject === 'ADSA'  ))).map((item, i) => (
          <tr > */}
           {filteredData.map((item, i) => (
            <tr key={i}>
            <td className="table_center">{i + 1}</td>
            <td>{item.Questions}</td>
            <td className="table_center imd_table">
              <img src={solImage} width="18px" alt="" onClick={()=>{clickbookmark(item)}} />
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
      
    </>
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
  },
  {
    "Questions": "How is security achieved in the transport and tunnel modes of IPSEC? Describe the role of AH and ESP.",
    "Marks": 10,
    "Year": "Nov-22",
    "Module": 4,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Define Malware. Explain its types in detail",
    "Marks": 10,
    "Year": "Nov-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain Firewall & its types along with advantages and disadvantages.",
    "Marks": 10,
    "Year": "Nov-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain different modes of operation of Block ciphers",
    "Marks": 10,
    "Year": "Nov-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain classical encryption techniques with example.",
    "Marks": 10,
    "Year": "Nov-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "In an RSA system, given N = 91e = 5 Calculate O(n),p, q and private key d. What is the cipher text when you encrypt \nmessage m = 25 using the public key. Also perform decryption.",
    "Marks": 10,
    "Year": "Nov-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write Short Notes on: SSL protocol stack",
    "Marks": 5,
    "Year": "Nov-22",
    "Module": 4,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write Short Notes on: Compare and contrast AES and DES",
    "Marks": 5,
    "Year": "Nov-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write Short Notes on: IDS and its types",
    "Marks": 5,
    "Year": "Nov-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write Short Notes on: Use cases for NAC",
    "Marks": 5,
    "Year": "Nov-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write Short Notes on: Digital Signature",
    "Marks": 5,
    "Year": "Nov-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What is the drawback of Double DES algorithm? How is it overcome by Triple DES?",
    "Marks": 5,
    "Year": "May-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Define ARP spoofing with an example. Compare with IP spoofing.",
    "Marks": 5,
    "Year": "May-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "What is the significance of a digital signature on a certificate? Justify",
    "Marks": 5,
    "Year": "May-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Encrypt \"This is the final exam\" with Playfair cipher using key \"Guidance\". Explain the steps involved.",
    "Marks": 10,
    "Year": "May-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Two uses wish to establish a secure communication channel and exchange a session key after mutual authentication. \nShow how this can be done with the help of a KDC.",
    "Marks": 10,
    "Year": "May-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Given modulus n=221 and public key, e-7, find the values of p, q, phi(n), and d using RSA. Encrypt M-5.",
    "Marks": 10,
    "Year": "May-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Define DOS attack. Show the different ways by which this attack can be mounted at various layers",
    "Marks": 10,
    "Year": "May-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Show how Kerberous protocol can be used to achieve single sing-on oindistributed system",
    "Marks": 10,
    "Year": "May-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "User wishes to do online transactions with Amazon.com. Discuss a protocol which can be used to set up a secure \ncommunication channel and provide server side and client side authentication. Show the steps involved in the handshake process.",
    "Marks": 10,
    "Year": "May-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short notes on: Email security",
    "Marks": 5,
    "Year": "May-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short notes on: Diffie Hellman algorithm",
    "Marks": 5,
    "Year": "May-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short notes on: El-Gamal Algorithm",
    "Marks": 5,
    "Year": "May-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "How does IPSec help to achieve authentication and confidentiality? Justify the noad of AL and ESD",
    "Marks": 5,
    "Year": "May-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short note on Stenography.",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write a short note on Blowfish.",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "List S/MIME services",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Transposition Ciphers with illustrative Example.",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Perform encryption and decryption using RSA algorithm with p=7,q-11,e-17 and M=8.",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Describe the Block Cipher Modes in detail",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "What Is PKI. Explain different PKI architectures in detail",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Diffie Hellman Key Exchange with suitable Example",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Needham-Schroeder protocol for secret key distribution with suitable diagram",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short notes on HMAC vs CMAC",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short notes on ARP Spoofing",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short notes on Port Scanning",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short notes on Honeypot",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short notes on El-Gamal Algorithm",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write short notes on Session Hijacking",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Enlist security goals. Discuss their significance.",
    "Marks": 5,
    "Year": "Nov-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Compare and contrast HMAC and CMAC.",
    "Marks": 5,
    "Year": "Nov-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "SHA provides better security than MD. Justify.",
    "Marks": 5,
    "Year": "Nov-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Design Sample Digital Certificate and explain each field of it.",
    "Marks": 5,
    "Year": "Nov-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain Transposition Ciphers with illustrative examples.",
    "Marks": 10,
    "Year": "Nov-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Given modulus n = 91 and public key, e = 5 find the values of p, q, phi(n), and d using RSA. Encrypt M = 25 Also perform decryption.",
    "Marks": 10,
    "Year": "Nov-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What are Block Cipher Modes. Describe any two in detail.",
    "Marks": 10,
    "Year": "Nov-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Using Affine cipher, encrypt the Plaintext 'SECURITY' with key pair (5, 2).",
    "Marks": 10,
    "Year": "Nov-18",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Given generator g = 2 and n = 11 Using Diffie Hellman algorithm solve the following: \n1. Show that 2 is primitive root of 11 \n2. If A's public key is 9, what is A's private key? \n3. If B's public key is 3, what is B's private key? \n4. Calculate the shared secret key.",
    "Marks": 10,
    "Year": "Nov-18",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain different types of Denial of Service attacks.",
    "Marks": 10,
    "Year": "Nov-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is Authentication? Explain Needham Schroeder Authentication protocol.",
    "Marks": 10,
    "Year": "Nov-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is a firewall? Explain different types of firewall.",
    "Marks": 10,
    "Year": "Nov-18",
    "Module": 6,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Write short notes on Email Security",
    "Marks": 5,
    "Year": "Nov-18",
    "Module": 4,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Write short notes on SSL/TLS",
    "Marks": 5,
    "Year": "Nov-18",
    "Module": 4,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Write short notes on IPSec",
    "Marks": 5,
    "Year": "Nov-18",
    "Module": 4,
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Write short notes on Port Scanning.",
    "Marks": 5,
    "Year": "Nov-18",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Write short notes on Honey pots",
    "Marks": 5,
    "Year": "Nov-18",
    "Module": "--",
    "Branch": "IT",
    "Subject": "CNS",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain with example how divide and conquer strategy is in Binary Search?",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain flow shop scheduling technique",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Write a note on AVL tree",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Write an algorithm for finding maximum and minimum number from given set",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is common longest subsequence problem? Find LCS for following string \nX=ACBAED,\nY= ABCABE",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 5,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Which are the different methods of solving recurrences? Explain with examples",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Compare greedy and dynamic programming approach for an algorithm design. Explain how both can be used to solve knapsack problem",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 4,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain Huffman algorithm. Construct Huffman tree for MAHARASHTRA with its optimal code",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain job sequencing with deadlines. Let n = 4, (p1,p2,p3,p4) = (100,10,15,27) and (d1,d2,d3,d4) = (2,1,2,1). Find optimal solution.",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Sort the following number using quick sort. Also derive time complexity of quick sort. 27 10 36 18 25 45",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Given a chain of four matrices A1,A2,A3,A4 with P0=5, P1=4, P2=6, P3=2, P4 = 7. Find m[1,4] using matrix chain multiplication.",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Short note on : Rabin Karp Algorithm",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 5,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Short note on : Topological Sort",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Short note on : Knuth-Morrie-Pratt Algorithm",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 5,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Short note on : Red Black Tree",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Compute worst case complexity for \nvoid fun(int n, int arr[]){ \nint i = 0, j = 0; \nfor(; i < n; ++i) \nwhile(j < n && arr[i] < arr[j]) \nj++; \n}",
    "Marks": 5,
    "Year": "Mar-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Differentiate between greedy method and dynamic programming.",
    "Marks": 5,
    "Year": "Mar-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "What is optimal huffman code for the frequencies a:1 b:1 c:2 d:3 e:5 f:8 g:13 h:21",
    "Marks": 5,
    "Year": "Mar-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Find longest common subsequence \nString x= ACBAED\nString y =ABCABE",
    "Marks": 5,
    "Year": "Mar-19",
    "Module": 5,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Consider knapsack problem where n=6 m= 15 and profits are (p1,p2,p3,p4,p5,p6) = (1,2,4,4,7,2) and weights are (w1,w2,w3,w4,w5,w6) = 10,5,4,2,7,3. Find maximum profit using fractional knapsack",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain divide and conquer approach. Write a recursive algorithm to determine the max and min from given elements.",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Define AVL tree. Construct AVL tree for the following : 21,26,30,9,4,14,28,18,15,10,2,3,7",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "What is optimal binary search tree? Explain with the help of example.",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Give asymptotic upper bound for T(n) for the following recurrences and verify your answer using Masters theorem:\nT (n) = T (n-1)+ n",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Given a set of 9 jobs (J1,J2,J3,J4,J5,J6,J7,J8,J9) where each job has a deadline (5,4,3,3,4,5,2,3,7) and profit (85,25,16,40,55,19,92,80,15) associated to it Each job takes I unit of time to complete and only one job can be scheduled at a time. We earn the profit if and only if the job is completed by its deadline. The task is to find the maximum profit and the number of jobs done.",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Rabin Karp Algorithm",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 5,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Genetic Algorithm",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 6,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Minimum Cost Spanning Tree",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Red Black Trees",
    "Marks": 10,
    "Year": "Mar-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Differentiate between Greedy method and Dynamic Programming.",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write an algorithm for finding minimum and maximum number from a given set",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain coin changing problem",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Flow Shop Scheduling Technique",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Define AVL tree. Construct an AVL tree for the following data.\n63, 9, 19, 27, 18, 108, 99, 81",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write an algorithm for implementing Quick sort. Also, comment on its complexity.",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "What is longest common subsequence problem? Find LCS for the following string:\n\nString X: ABCDGH\n\nString Y: AEDFHR",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 5,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Rabin Karp Algorithm in detail",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 5,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Which are the different methods of solving recurrences? Explain with suitable examples",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Travelling Salesman Problem with an example.",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Huffman Algorithm. Construct a Huffman Tree and find Huffman code for the message: KARNATAKA",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Knapsack Problem with an example.",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write Short note on Genetic Algorithm",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 6,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write Short note on Red and Black Tree",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write Short note on Merge Sort",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write Short note on Knuth Morris Pratt Algorithm",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 5,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write Short note on Optimal Binary Search Tree (OBST)",
    "Marks": 5,
    "Year": "Dec-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write and Explain binary search algorithm.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 3,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write a short note on job sequencing with deadline",
    "Marks": 5,
    "Year": "May-22",
    "Module": 3,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Determine the LCS of the following sequences:\nX: {A, B, C, B, D, A, B}\nY: (B, D. C, A, B, A)",
    "Marks": 5,
    "Year": "May-22",
    "Module": 5,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Solve the sum of subsets problem for the following: n=4, m=15, w={3,5,6,7)",
    "Marks": 5,
    "Year": "May-22",
    "Module": 3,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Give the algorithm for the N-Queen's problem and give any two solutions to the 8-Queen's problem",
    "Marks": 5,
    "Year": "May-22",
    "Module": 4,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain and apply Naïve string matching on following strings\nString1: COMPANION\n\nString2: PANI",
    "Marks": 5,
    "Year": "May-22",
    "Module": 5,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write algorithm for greedy knapsack and Obtain the solution to following knapsack problem where n=7,m=15 (pl,p2.....p7) = (10,5,15,7,6,18,3), (wl,w2......,w7) (2,3,5,7,1,4,1).",
    "Marks": 10,
    "Year": "May-22",
    "Module": 3,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain Dijkstra's Single source shortest path algorithm. Explain how it is different from Bellman Ford algorithm. Explain 15-puzzle problem using LC search technique.",
    "Marks": 10,
    "Year": "May-22",
    "Module": 4,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Rewrite and Compare Rabin Karp and Knuth Morris Pratt Algorithms Give the pseudo code for the KMP String Matching Algorithm.",
    "Marks": 10,
    "Year": "May-22",
    "Module": 5,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write algorithm for quick sort and sort the following elements [40,11,4,72,17,2,49]",
    "Marks": 10,
    "Year": "May-22",
    "Module": 2,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write algorithm programming N-4, M-21 for 0/1 knapsack problem using dynamic the following example. Also solve the following- (pl,p2,p3,p4)-(2,5,8,1),(w1w2,w3,w4)=(10,15,6,9)",
    "Marks": 10,
    "Year": "May-22",
    "Module": 4,
    "Branch": "Comps",
    "Subject": "ADSA",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Compare Enterpreneur and Manager",
    "Marks": 5,
    "Year": "May-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Why an enterpreneur is unwilling to delegeate work ? Give 5 reasons",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain business plan and its drivers",
    "Marks": 5,
    "Year": "May-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Wrat is CRM ? What are functional areas of CRM .",
    "Marks": 5,
    "Year": "May-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What is technology adaptation ? Explan steps to be taken for technology adaptation .",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Which are three principles of enterpreneurial leadership?",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What are disadvantaegs of acquisition of establshed business venture ?",
    "Marks": 5,
    "Year": "May-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What is differenece between incubators and accelerators ? Give examples .",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Why ERP system is important for organization nowadays?",
    "Marks": 5,
    "Year": "May-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "List types of E commerce . Explain any two with example .",
    "Marks": 5,
    "Year": "May-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What are micro , small and medium enterprises ?",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain the forms of business ownership .",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Discuss the following terms : seed funding , crowdfunding , venture capital , private equity , public equity .",
    "Marks": 5,
    "Year": "May-22",
    "Module": 4,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Use of E business technologies result in better and more timely decisions across all channels of supply chain . Justify",
    "Marks": 10,
    "Year": "May-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Elaborate on Information management . What are advantages of well-managed information ?",
    "Marks": 10,
    "Year": "May-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "List different types of E commerce models",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Define term 'enterpreneur' and list 4 roles .",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain term supply chain management",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain steps to be analysed to plan out a new venture",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "List various techniques employed by enterpreneur to motivate employees .",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Enlist different types of enterpreneur with examples",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Prepare detailed step by step report for planning out new venture , it should include place of business",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "machinery , raw material , human resource procurement , production , marketing and sales",
    "Marks": "",
    "Year": "",
    "Module": "",
    "Branch": "",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Describe evolution , function and current trends of Customer Relationship Management",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain different types of enterprises based on Ownsership structure",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain different non financial motivational techniques that can be used to motivate employees",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 4,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain different stages when business can require financing",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 4,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "List benefits of e-procurement and discuss e-procurement chain",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain E commerce and M commerce trype of businesses .",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain the term acquisation and different types of acquisition",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain features of good business plan",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "EEB",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Is agile process suitable for large scale projects? Mention few issues.",
    "Marks": 5,
    "Year": "Dec-15",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain process framework. Mention SQA activities.",
    "Marks": 5,
    "Year": "Dec-15",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain SQA activities",
    "Marks": 5,
    "Year": "Dec-15",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain CMM level 4 and level 5",
    "Marks": 5,
    "Year": "Dec-15",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Mention the reasons for project delay. What are the risks associated with project delay?",
    "Marks": 10,
    "Year": "Dec-15",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Estimate the effort using function point method to design a user interface for the public to report about damaged pothole. Assume suitable input complexity and justify your assumptions.",
    "Marks": 10,
    "Year": "Dec-15",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain in detail Spiral model and compare it with component model.",
    "Marks": 10,
    "Year": "Dec-15",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Prepare SRS for the Course Management Systein.",
    "Marks": 10,
    "Year": "Dec-15",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "List down the activities requited for scheduling and tracking software projects",
    "Marks": 10,
    "Year": "Dec-15",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Draw use case, sequence diagram (withdrawal) for ATM banking system",
    "Marks": 10,
    "Year": "Dec-15",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Describe in detail white box techniques",
    "Marks": 10,
    "Year": "Dec-15",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "In a car service station, complaints are taken and an estimate of the work is given immediately Resources re assigned to the job. Once repaired a bill is prepared for actual cost. Prepare a DFD up to level 2 dictionary for each and make a sample entry in data",
    "Marks": 10,
    "Year": "Dec-15",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Difference between prescriptive and evolutionary models.",
    "Marks": 5,
    "Year": "May-15",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain SCRUM.",
    "Marks": 5,
    "Year": "May-15",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain the need for system testing.",
    "Marks": 5,
    "Year": "May-15",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Mention SQA activities.",
    "Marks": 5,
    "Year": "May-15",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "What are the risks associated with software projects? How do project managers manage such risks",
    "Marks": 10,
    "Year": "May-15",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Draw the use case diagram and activity diagram for course registration system explained below:\nStudents may login to the system to register courses or retrieve all the courses they have already registered. Instructors may login to the system to add courses or retrieve all the courses they have already added.A student cannot register a course if:) he/she doesn't meet the prerequisites, ii) the students registered in the course exceed the capacity of the classroom, iii) the course has a time conflict with other courses in the same term.",
    "Marks": 10,
    "Year": "May-15",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain in detail Spiral model and compare it with component model.",
    "Marks": 10,
    "Year": "May-15",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain architectural design for e-Commerce System",
    "Marks": 10,
    "Year": "May-15",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Prepare SRS for railway reservation system.",
    "Marks": 10,
    "Year": "May-15",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Describe in detail white box techniques",
    "Marks": 10,
    "Year": "May-15",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain how change control and version control are carried out in SCM.",
    "Marks": 10,
    "Year": "May-15",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Draw DFD up to level 2 for order processing system.",
    "Marks": 10,
    "Year": "May-15",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Short note on Aspect oriented development",
    "Marks": 5,
    "Year": "May-15",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Short note on OO testing",
    "Marks": 5,
    "Year": "May-15",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Short note on Process and project metrics",
    "Marks": 5,
    "Year": "May-15",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2015
  },
  {
    "Questions": "Explain CMM",
    "Marks": 5,
    "Year": "Dec-16",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Give difference between Waterfall and Prototype Model",
    "Marks": 5,
    "Year": "Dec-16",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "List Software Engineering Practice core Principles.",
    "Marks": 5,
    "Year": "Dec-16",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Explain following design concepts: Abstraction, Modularity",
    "Marks": 5,
    "Year": "Dec-16",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "What is agility? Explain XP",
    "Marks": 10,
    "Year": "Dec-16",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "What is Design? Explain Design Principles",
    "Marks": 10,
    "Year": "Dec-16",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Explain testing strategies",
    "Marks": 10,
    "Year": "Dec-16",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "How important is requirement analysis. Elaborate on different requirement for engineering tasks",
    "Marks": 10,
    "Year": "Dec-16",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Explain Refinement, Refactoring and design classes.",
    "Marks": 10,
    "Year": "Dec-16",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Explain Coupling and Cohesion. What is preferred in the component? Why?",
    "Marks": 10,
    "Year": "Dec-16",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Identity risk of completing graduation with good marks but without knowledge",
    "Marks": 10,
    "Year": "Dec-16",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Explain software quality attributes Explain change management process",
    "Marks": 10,
    "Year": "Dec-16",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "For the given Order processing system scenario draw DFD level 9, 1and 2. The 10 customer can place order ancel order, do modification in the placed order before it is delivered The order is delivered to the customer address by the courier company. Customer can make payment for the placed order using credit card or net banking. If customer is not satisfied by the product he can return the product within 15 days from the delivery date. The refund is deposited back to the customer account within 10 days from the date of product return.",
    "Marks": 10,
    "Year": "Dec-16",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "What are the different levels of Capability Maturity Model (CMM)?",
    "Marks": 5,
    "Year": "May-16",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Compare agile and traditional Software Development models.",
    "Marks": 5,
    "Year": "May-16",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "What are the different probable Origins of changes that are requested for software",
    "Marks": 5,
    "Year": "May-16",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "With suitable examples, explain the differences between 'known risks' and predictable",
    "Marks": 5,
    "Year": "May-16",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Explain waterfall model give its advantage and disadvantages",
    "Marks": 10,
    "Year": "May-16",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "List evolutionary models and explain any one in detall",
    "Marks": 10,
    "Year": "May-16",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Draw the DFD up to Level 2 for a Restaurant Management System which has food ordering, food delivering, invoice creation, and payments subsystems. b) Prepare a sample risk table and explain the RMMM plan for the same.",
    "Marks": 10,
    "Year": "May-16",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "What are different requirements engineering tasks? Why identifying software requirements difficult",
    "Marks": 10,
    "Year": "May-16",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Explain software design concepts",
    "Marks": 10,
    "Year": "May-16",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "What are different attributes of software quality?",
    "Marks": 10,
    "Year": "May-16",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "identify any risks for your exam. Perform risk assessment and prepare the RMMM plan.",
    "Marks": 10,
    "Year": "May-16",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Write note on Component Based Development",
    "Marks": 5,
    "Year": "May-16",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Write note on Software Reliability measurements",
    "Marks": 5,
    "Year": "May-16",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Write note on SQA activities",
    "Marks": 5,
    "Year": "May-16",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Write note on Deployment-Level design elements",
    "Marks": 5,
    "Year": "May-16",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2016
  },
  {
    "Questions": "Define Software Engineering and explain Software Process Framework",
    "Marks": 5,
    "Year": "Dec-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "What is CMM? Explain its different levels",
    "Marks": 5,
    "Year": "Dec-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "What is agile development? What are its advantages",
    "Marks": 5,
    "Year": "Dec-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "What is the role of analysis and design in software development",
    "Marks": 5,
    "Year": "Dec-17",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "What is Prescriptive Model? Explain Waterfall and Incremental Model, How are they different",
    "Marks": 10,
    "Year": "Dec-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Explain Component based model and formal methods model",
    "Marks": 10,
    "Year": "Dec-17",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "What is agility? Explain its principles",
    "Marks": 10,
    "Year": "Dec-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Explain XP",
    "Marks": 10,
    "Year": "Dec-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Explain core principles of Software Engineering Practice",
    "Marks": 10,
    "Year": "Dec-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Explain design concepts in brief",
    "Marks": 10,
    "Year": "Dec-17",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Explain quality guidelines and quality attributes of software design",
    "Marks": 10,
    "Year": "Dec-17",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Define Risk. Identify two risks for your final year examination and prepare RMMM plan",
    "Marks": 10,
    "Year": "Dec-17",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Explain software process framework",
    "Marks": 5,
    "Year": "May-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Elaborate on principles that guide process and practice",
    "Marks": 5,
    "Year": "May-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "What is metric? Exlain project and process metrics",
    "Marks": 5,
    "Year": "May-17",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "What is evolutionary model? Compare prototype and spiral model",
    "Marks": 10,
    "Year": "May-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Explain agility principles. Explain XP agile development proces",
    "Marks": 10,
    "Year": "May-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "What is the need of creating models? Explain mod",
    "Marks": 10,
    "Year": "May-17",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Explain requirements engineering activities.",
    "Marks": 10,
    "Year": "May-17",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "What is quality? Explain McCall's Quality Factors.",
    "Marks": 10,
    "Year": "May-17",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "List six quality attributes for ISO 9126",
    "Marks": 10,
    "Year": "May-17",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Identify three risks associated with your final year project. Perform risk assessment and prepare RMMM plan.",
    "Marks": 10,
    "Year": "May-17",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "List any five configuration items produced during SDLC. Explain change control process",
    "Marks": 10,
    "Year": "May-17",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2017
  },
  {
    "Questions": "Explain Capability Maturity Model.",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is Process Pattern? Create process pattern for approach that may be stakeholders have general idea of what must be done but unclear software requirements",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is Alpha testing and Beta testing? Explain.",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What are the different design principles?",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What are the different categories of testing under strategy for testing conventional software. Explain all in detail.",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "List design concepts in software engineering. Explain Coupling and Cohesion. What is Preffered in the Component and why?",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "How agile methodology is different than traditional software development approach?",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain SCRUM in detail.",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What are the different requirement e eering tasks? Why identifying software requirements is difficult?",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Draw Use Case Diagram for Restaurant Management System.",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Draw DFD upto Level 1 for coltse enrollment system which has marks verification, course eligibility check & students detail verification eligibility check & students detail verification",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Mention reasons for project delay. What are the risks associated with project delay? Perform Risk assessment",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is the need of SCM in software engineering? Explain SCM Process.",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is the difference between Prescriptive & Evolutionary model?",
    "Marks": 5,
    "Year": "May-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "List & Elaborate Software Engineering Practice core principles.",
    "Marks": 5,
    "Year": "May-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain following design Concepts: Abstraction & Modularity.",
    "Marks": 10,
    "Year": "May-18",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain different metrics for size estimation with their advantages and disadvantages",
    "Marks": 10,
    "Year": "May-18",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain Agile methodology with XP Agile Development Process.",
    "Marks": 10,
    "Year": "May-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is the importance of Requirement Analysis? Explain different Requirement Engineering tasks",
    "Marks": 10,
    "Year": "May-18",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain how Change Control & Version Control are carried out in Software Configuration",
    "Marks": 10,
    "Year": "May-18",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is Evolutionary model? p among scope, schedule and budget. volutionary models. Explain any one in detail.",
    "Marks": 10,
    "Year": "May-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Risks? with software Projects? How do Project Managers manage such question",
    "Marks": 10,
    "Year": "May-18",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is CMMI?How it is different from CMM. Explain all levels of CMML",
    "Marks": 10,
    "Year": "May-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain Capability Maturity Model.",
    "Marks": 5,
    "Year": "May-19",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain layered structured of software Engineering? How quality of software can be affected by wrong selection of Process, method and tool",
    "Marks": 5,
    "Year": "May-19",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "What is agility? How agile development help develop quality software",
    "Marks": 5,
    "Year": "May-19",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "What are the different design principles?",
    "Marks": 5,
    "Year": "May-19",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Spiral model. How protyping is used in spiral model",
    "Marks": 10,
    "Year": "May-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Scrum agile development model",
    "Marks": 10,
    "Year": "May-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Defference between Alpha and Beta Testing, Verification and Validation, White box and Black Box testing",
    "Marks": 10,
    "Year": "May-19",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Draw CFG and calculate cyclomatic complexity for the given PDL",
    "Marks": 10,
    "Year": "May-19",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "What are the different requirement engineering tasks? Why identifying software requirements is difficult?",
    "Marks": 10,
    "Year": "May-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain risk management process. Prepare RMMM plan for the identified risk \"Team members will leave the project in between the schedule",
    "Marks": 10,
    "Year": "May-19",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "What is the need of SCM in software engineering? Explain change control",
    "Marks": 10,
    "Year": "May-19",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Explain Evolutionary process model?",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Discuss about the principles of user interface design steps?",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain Mc Calls Quality factors?",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Short note on Process Metrics and project metrics.",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What is agility? Explain Kanban model",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain feasibility studies in detail.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain different architectural styles?",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 4,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain Risk assessment and Risk Projection.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain in details Reengineering and reverse engineering",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What is SCM? Explain SCM Repositories.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain requirement elicitation in detai",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain different types of coupling and cohesion.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain in detail software testing strategies.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Compute the function point value for a project with the following information domain characteristics: Number of user inputs: 32 \nNumber of user output: 60, Number of user enquiries: 24, Number of files: 8, Number of external interfaces: 2. Assume that all complexity adjustment value are average and Σ fi = 40",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "SE",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain REST API in detail.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Compare XML and JSON.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain React component life cycle.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What are Buffers and Streams in NodeJs? Explain with example.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain asynchronous programming in detail.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What is DNS? Explain working of DNS.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What is NodeJs? Explain features of NodeJs. State different types of NodeJs Modules.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain Arrow function in ES6 with an example.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What are Refs? When to use Refs and when not to use Refs?",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 4,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain routing in ExpressJS along with an example.",
    "Marks": 10,
    "Year": "Dec-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Short note: REPL",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Short note: DOM",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Short note: JSX",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Short note: URL",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Short note: NPM",
    "Marks": 5,
    "Year": "Dec-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain Promises in ES6.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Compare MVC and Flux.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 4,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain XML Schema in detail.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain Redux architecture in detail.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Differentiate between ES5 and ES6.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain Event Loop in NodeJs",
    "Marks": 5,
    "Year": "May-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write a note on ExpressJs.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 6,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What are events in Javascript? Explain different types of events.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Differentiate between HTML and XML.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Write an HTML code to process placement registration form which accepts the student details like name, address, email-id, contact-number, date of birth, percentage, branch (must be selected using radio button) and technology-preferred (using checkbox). Write the JavaScript code to validate the following: i. valid email id (“@” and “.”). ii. all the fields must be filled before submission of the form. iii. percentage validation is minimum first class (= > 60 %)",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 3,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write a HTML5 code for embedding audio & video elements in web page.",
    "Marks": 10,
    "Year": "Dec-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write an external stylesheet and link it with HTML code. The stylesheet should include the following: i. The web page will have the background image “img1.jpg”. ii. The table headings will have red background color. iii. Background color of alternate paragraphs are different. iv. The hyperlinks on the web page will not have underline.",
    "Marks": 10,
    "Year": "May-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write code to process online Alumni information for your college. Create forms to get name, address, date of birth, and email id. Use check boxes for taking hobbies and radio buttons for selecting branch. Write JavaScript code to validate the following: i. User has filled all the fields prior to form submission. ii. Valid email-id (with ‘@’ and ‘.’). iii. Age validation using DOB (>=22 years).",
    "Marks": 10,
    "Year": "May-19",
    "Module": 2,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Write HTML5 code for embedding the audio and video elements in the web page.",
    "Marks": 10,
    "Year": "May-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2019
  },
  {
    "Questions": "Create a HTML page Showing a message \"I use media query\". Write media query such that the text color changes to light gray when browser window is 600px wide or less and otherwise it is black.",
    "Marks": 5,
    "Year": "May-19",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": ""
  },
  {
    "Questions": "Create a HTML form that accepts first name, last name, department and designation from user.",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Explain with proper syntax and example how to use different types of CSS selectors.",
    "Marks": 10,
    "Year": "Dec-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "Create a HTML form to accept name (TextField), address (TextArea), gender (Radio), and Country (DropDown) fields from user",
    "Marks": 5,
    "Year": "Dec-18",
    "Module": 1,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2018
  },
  {
    "Questions": "What is the difference between class selector and ID selector.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 1,
    "Branch": "Comps",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Explain built-in objects in JavaScript.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 2,
    "Branch": "Comps",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What are the benefits of using JSON over XML data?",
    "Marks": 5,
    "Year": "May-22",
    "Module": 1,
    "Branch": "Comps",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "List and explain different features of React.",
    "Marks": 5,
    "Year": "May-22",
    "Module": 3,
    "Branch": "Comps",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "Short note: JSX",
    "Marks": 5,
    "Year": "May-22",
    "Module": 3,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  },
  {
    "Questions": "What is NodeJs? Explain features of NodeJs. State different types of NodeJs Modules.",
    "Marks": 10,
    "Year": "May-22",
    "Module": 5,
    "Branch": "IT",
    "Subject": "IP",
    "Student_year": "T.E",
    "Year2": 2022
  }
]
