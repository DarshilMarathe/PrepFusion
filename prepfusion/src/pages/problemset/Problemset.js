import React from "react";
import { useState ,useEffect} from "react";
import "./Problemset.css";

import solImage from "../../images/solution-image.png";
import top from "../../images/top.png";
import top1 from "../../images/top1.png";
import top2 from "../../images/top2.png";

export default function Problemset() {

    const [selectedSubject, setSelectedSubject] = useState("All");
    const [selectedMarks, setSelectedMarks] = useState("All");
    const [selectedYear, setSelectedYear] = useState("All");
  
    // Filter the data based on user selections
    const filteredData = data.filter((item) => {
      return (
        (selectedSubject === "All" || item.Subject === selectedSubject) &&
        (selectedMarks === "All" || item.Marks.toString() === selectedMarks) &&
        (selectedYear === "All" || item.Year === selectedYear)
      );
    });

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
            <select name="studentYear" id="studentYear">
              <option value="All" selected>Select Year</option>
              <option value="F.E">First Year</option>
              <option value="S.E">Second Year</option>
              <option value="T.E">Third Year</option>
              <option value="B.E">Fouth Year</option>
            </select>
          </div>

          <div className="select s2">
           <span> Branch : </span>
            <select name="Branch" id="Branch">
              <option value="All" slected>All</option>
              <option value="CS">CS</option>
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
              <option value="S.E">IP</option>
              <option value="T.E">SE</option>
              <option value="B.E">EEB</option>
            </select>
          </div>

          <div className="select2 s22">
           <span> Year : </span>
            <select name="Branch" id="Branch" value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
              <option value="All" slected>All</option>
              <option value="CS">2020</option>
              <option value="CS">2019</option>
              <option value="IT">2018</option>
              <option value="AIDS">2017</option>
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
              <option value="2">2</option>
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
        <tr className="prob_row">
          <th style={{width:"10%"}}>Sr. No</th>
          <th style={{width:"50%"}} >Question</th>
          <th style={{width:"10%"}}>Solution</th>
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
            <td className="table_center">
              <img src={solImage} width="18px" alt="" />
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
    Questions:
      "Explain with example how divide and conquer strategy is in Binary Search?",
    Marks: 5,
    Year: "Dec-18",
    Module: 3,
    Subject: "CNS",
  },
  {
    Questions: "Explain flow shop scheduling technique",
    Marks: 5,
    Year: "Dec-18",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions: "Write a note on AVL tree",
    Marks: 5,
    Year: "Dec-18",
    Module: 2,
    Subject: "ADSA",
  },
  {
    Questions:
      "Write an algorithm for finding maximum and minimum number from given set",
    Marks: 5,
    Year: "Dec-18",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "What is common longest subsequence problem? Find LCS for following string \nX=ACBAED,\nY= ABCABE",
    Marks: 10,
    Year: "Dec-18",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions:
      "Which are the different methods of solving recurrences?  Explain with examples",
    Marks: 10,
    Year: "Dec-18",
    Module: 1,
    Subject: "ADSA",
  },
  {
    Questions:
      "Compare greedy and dynamic programming approach for an algorithm design. Explain how  both can be used to solve knapsack problem",
    Marks: 10,
    Year: "Dec-18",
    Module: 4,
    Subject: "ADSA",
  },
  {
    Questions:
      "Explain Huffman algorithm. Construct Huffman tree for MAHARASHTRA with its optimal code",
    Marks: 10,
    Year: "Dec-18",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Explain job sequencing with deadlines. Let n = 4, (p1,p2,p3,p4) = (100,10,15,27) and (d1,d2,d3,d4) = (2,1,2,1). Find optimal solution.",
    Marks: 10,
    Year: "Dec-18",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Sort the following number using quick sort. Also derive time complexity of quick sort. 27 10 36 18 25 45",
    Marks: 10,
    Year: "Dec-18",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Given a chain of four matrices A1,A2,A3,A4 with P0=5, P1=4, P2=6, P3=2, P4 = 7. Find m[1,4] using matrix chain multiplication.",
    Marks: 10,
    Year: "Dec-18",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions: "Short note on : Rabin Karp Algorithm",
    Marks: 10,
    Year: "Dec-18",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions: "Short note on : Topological Sort",
    Marks: 10,
    Year: "Dec-18",
    Module: 2,
    Subject: "ADSA",
  },
  {
    Questions: "Short note on : Knuth-Morrie-Pratt Algorithm",
    Marks: 10,
    Year: "Dec-18",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions: "Short note on : Red Black Tree",
    Marks: 10,
    Year: "Dec-18",
    Module: 2,
    Subject: "ADSA",
  },
  {
    Questions:
      "Compute worst case complexity for \nvoid fun(int n, int arr[]){\nint i = 0, j = 0;\nfor(; i < n; ++i)\nwhile(j < n && arr[i] < arr[j])\nj++;\n}",
    Marks: 5,
    Year: "Mar-19",
    Module: 1,
    Subject: "ADSA",
  },
  {
    Questions: "Differentiate between greedy method and dynamic programming.",
    Marks: 5,
    Year: "Mar-19",
    Module: 4,
    Subject: "ADSA",
  },
  {
    Questions:
      "What is optimal huffman code for the frequencies a:1 b:1 c:2 d:3 e:5 f:8 g:13 h:21",
    Marks: 5,
    Year: "Mar-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Find longest common subsequence \nString x= ACBAED\nString y =ABCABE",
    Marks: 5,
    Year: "Mar-19",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions:
      "Consider knapsack problem where n=6 m= 15 and profits are (p1,p2,p3,p4,p5,p6) = (1,2,4,4,7,2) and weights are (w1,w2,w3,w4,w5,w6) = 10,5,4,2,7,3. Find maximum profit using fractional knapsack",
    Marks: 10,
    Year: "Mar-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Explain divide and conquer approach. Write a recursive algorithm to determine the max and min from given elements.",
    Marks: 10,
    Year: "Mar-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Define AVL tree. Construct AVL tree for the following : 21,26,30,9,4,14,28,18,15,10,2,3,7",
    Marks: 10,
    Year: "Mar-19",
    Module: 2,
    Subject: "ADSA",
  },
  {
    Questions:
      "What is optimal binary search tree? Explain with the help of example.",
    Marks: 10,
    Year: "Mar-19",
    Module: 4,
    Subject: "ADSA",
  },
  {
    Questions:
      "Give asymptotic upper bound for T(n) for the following recurrences and verify your answer using Masters theorem:\nT (n) = T (n-1)+ n",
    Marks: 10,
    Year: "Mar-19",
    Module: 1,
    Subject: "ADSA",
  },
  {
    Questions:
      "Given a set of 9 jobs (J1,J2,J3,J4,J5,J6,J7,J8,J9) where each job has a deadline (5,4,3,3,4,5,2,3,7) and profit (85,25,16,40,55,19,92,80,15) associated to it Each job takes I unit of time to complete and only one job can be scheduled at a time. We earn the profit if and only if the job is completed by its deadline. The task is to find the maximum profit and the number of jobs done.",
    Marks: 10,
    Year: "Mar-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions: "Explain Rabin Karp Algorithm",
    Marks: 10,
    Year: "Mar-19",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions: "Explain Genetic Algorithm",
    Marks: 10,
    Year: "Mar-19",
    Module: 6,
    Subject: "ADSA",
  },
  {
    Questions: "Explain Minimum Cost Spanning Tree",
    Marks: 10,
    Year: "Mar-19",
    Module: 4,
    Subject: "ADSA",
  },
  {
    Questions: "Explain Red Black Trees",
    Marks: 10,
    Year: "Mar-19",
    Module: 2,
    Subject: "ADSA",
  },
  {
    Questions: "Differentiate between Greedy method and Dynamic Programming.",
    Marks: 5,
    Year: "Dec-19",
    Module: 4,
    Subject: "ADSA",
  },
  {
    Questions:
      "Write an algorithm for finding minimum and maximum number from a given set",
    Marks: 5,
    Year: "Dec-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions: "Explain coin changing problem",
    Marks: 5,
    Year: "Dec-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions: "Explain Flow Shop Scheduling Technique",
    Marks: 5,
    Year: "Dec-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Define AVL tree. Construct an AVL tree for the following data.\n63, 9, 19, 27, 18, 108, 99, 81",
    Marks: 10,
    Year: "Dec-19",
    Module: 2,
    Subject: "ADSA",
  },
  {
    Questions:
      "Write an algorithm for implementing Quick sort. Also, comment on its complexity.",
    Marks: 10,
    Year: "Dec-19",
    Module: 2,
    Subject: "ADSA",
  },
  {
    Questions:
      "What is longest common subsequence problem? Find LCS for the following string:\n\nString X: ABCDGH\n\nString Y: AEDFHR",
    Marks: 10,
    Year: "Dec-19",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions: "Explain Rabin Karp Algorithm in detail",
    Marks: 10,
    Year: "Dec-19",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions:
      "Which are the different methods of solving recurrences? Explain with suitable examples",
    Marks: 10,
    Year: "Dec-19",
    Module: 1,
    Subject: "ADSA",
  },
  {
    Questions: "Explain Travelling Salesman Problem with an example.",
    Marks: 10,
    Year: "Dec-19",
    Module: 4,
    Subject: "ADSA",
  },
  {
    Questions:
      "Explain Huffman Algorithm. Construct a Huffman Tree and find Huffman code for the message: KARNATAKA",
    Marks: 10,
    Year: "Dec-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions: "Explain Knapsack Problem with an example.",
    Marks: 10,
    Year: "Dec-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions: "Write Short note on Genetic Algorithm",
    Marks: 5,
    Year: "Dec-19",
    Module: 6,
    Subject: "ADSA",
  },
  {
    Questions: "Write Short note on Red and Black Tree",
    Marks: 5,
    Year: "Dec-19",
    Module: 2,
    Subject: "ADSA",
  },
  {
    Questions: "Write Short note on Merge Sort",
    Marks: 5,
    Year: "Dec-19",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions: "Write Short note on Knuth Morris Pratt Algorithm",
    Marks: 5,
    Year: "Dec-19",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions: "Write Short note on Optimal Binary Search Tree (OBST)",
    Marks: 5,
    Year: "Dec-19",
    Module: 4,
    Subject: "ADSA",
  },
  {
    Questions: "Write and Explain binary search algorithm.",
    Marks: 5,
    Year: "May-22",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions: "Write a short note on job sequencing with deadline",
    Marks: 5,
    Year: "May-22",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Determine the LCS of the following sequences:\nX: {A, B, C, B, D, A, B}\nY: (B, D. C, A, B, A)",
    Marks: 5,
    Year: "May-22",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions:
      "Solve the sum of subsets problem for the following: n=4, m=15, w={3,5,6,7)",
    Marks: 5,
    Year: "May-22",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Give the algorithm for the N-Queen's problem and give any two solutions to the 8-Queen's problem",
    Marks: 5,
    Year: "May-22",
    Module: 4,
    Subject: "ADSA",
  },
  {
    Questions:
      "Explain and apply Naïve string matching on following strings\nString1: COMPANION\n\nString2: PANI",
    Marks: 5,
    Year: "May-22",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions:
      "Write algorithm for greedy knapsack and Obtain the solution to following knapsack problem where n=7,m=15 (pl,p2.....p7) = (10,5,15,7,6,18,3), (wl,w2......,w7) (2,3,5,7,1,4,1).",
    Marks: 10,
    Year: "May-22",
    Module: 3,
    Subject: "ADSA",
  },
  {
    Questions:
      "Explain Dijkstra's Single source shortest path algorithm. Explain how it is different from Bellman Ford algorithm. Explain 15-puzzle problem using LC search technique.",
    Marks: 10,
    Year: "May-22",
    Module: 4,
    Subject: "ADSA",
  },
  {
    Questions:
      "Rewrite and Compare Rabin Karp and Knuth Morris Pratt Algorithms Give the pseudo code for the KMP String Matching Algorithm.",
    Marks: 10,
    Year: "May-22",
    Module: 5,
    Subject: "ADSA",
  },
  {
    Questions:
      "Write algorithm for quick sort and sort the following elements [40,11,4,72,17,2,49]",
    Marks: 10,
    Year: "May-22",
    Module: 2,
    Subject: "ADSA",
  },
  {
    Questions:
      "Write algorithm programming N-4, M-21 for 0/1 knapsack problem using dynamic the following example. Also solve the following- (pl,p2,p3,p4)-(2,5,8,1),(w1w2,w3,w4)=(10,15,6,9)",
    Marks: 10,
    Year: "May-22",
    Module: 4,
    Subject: "ADSA",
  },
];
