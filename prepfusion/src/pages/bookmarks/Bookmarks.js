import React from "react";
import { useState,useEffect} from "react";
// import "./Problemset.css";

import del from './del.png';

export default function Problemset() {

  const [bookmarks, setBookmarks] = useState(data);

  useEffect(() => {
    getBookmarks();
      //eslint-disable-next-line
  }, [])
   
      //Get all Notes
      const getBookmarks = async()=>{
        //API
        const response = await fetch(`http://localhost:5000/question/fetchallbookmarks`, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token'),
          },
        });
        const json =  await response.json();
        // console.log(json);
        setBookmarks(json);
      
      }
    

  return (
    <>

        <div className="ML_section">
            <p className="heading">Bookmarked Questions!</p>
        </div>


      {/* Table  */}
      <div className="tablePS">
      <table>
        <tr className="prob_row ">
          <th style={{width:"10%"}}>Sr. No</th>
          <th style={{width:"50vw"}}>Question</th>
          {/* <th style={{width:"10%"}}>Solution</th> */}
          <th style={{width:"10%"}}>Subject</th>
          <th style={{width:"10%"}}>Marks</th>
          <th style={{width:"10%"}}>Year</th>
        </tr>
        {/* {data.map((item, i) => (
        // {(data.filter(item => (item.Marks === 5  && item.Year === 'Dec-19' && item.Subject === 'ADSA'  ))).map((item, i) => (
          <tr > */}
           {bookmarks.map((item, i) => (
            <tr key={i}>
            <td className="table_center">{i + 1}</td>
            <td>{item.quest}</td>
            {/* <td className="table_center imd_table">
              <img src={del} width="30px" alt="" />
            </td> */}
            <td className="table_center">{item.subject}</td>
            <td className="table_center">{item.marks}</td>
            <td className="table_center">{item.year}</td>
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
  }
]
 