import React,{useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import { Pie } from "react-chartjs-2";
import { toast } from "react-toastify";
import dataa from '../../data.mjs';


import './Statistics.css'
import "chart.js/auto"


const Statistics = () => {
  const [blurpage, setBlurpage] = useState("blur(10px)")
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(userAccess,1000)
          //eslint-disable-next-line
      }, [])

      const userAccess = ()=>{
        if(!localStorage.getItem("token")){
          toast.warn("Login to continue")
          navigate('/login')
        }
        else{
          userDetailspremium();
          }
      }
    
  const [selectedYear, setSelectedYear] = useState("Dec-2022");
  const [selectedSubject, setSelectedSubject] = useState("IP");

  const userDetailspremium=async ()=>{
    const response = await fetch(dataa.userdata, {
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
            toast.warn("Not a premium user. Get Premium for accessing statistics")
            navigate('/getPrepPro');
          }
      }
      else{
        toast.error("Invalid Credentials")
        navigate('/');
      }
}


  // Filter the data based on the selected year and subject
  const filteredModuleWeightageData = moduleWeightageData.filter(
    (item) =>{
      return (
        (selectedYear === "All" || item.year === selectedYear) &&
      (selectedSubject === "All" || item.subject === selectedSubject)
      );
    }
      
  );

  // Calculate module weightage based on marks from the filtered data
  const moduleWeightage = filteredModuleWeightageData.reduce((acc, item) => {
    const moduleKey = `${item.subject} - Module ${item.module}`;
    acc[moduleKey] = (acc[moduleKey] || 0) + item.marks;
    return acc;
  }, {});

   // Find the module with the highest weightage
   let highestWeightageModule = "";
   let highestWeightage = 0;
   Object.entries(moduleWeightage).forEach(([module, weightage]) => {
     if (weightage > highestWeightage) {
       highestWeightage = weightage;
       highestWeightageModule = module;
     }
   });

  // Create the pie chart data based on the module weightage
  const moduleLabels = Object.keys(moduleWeightage);
  const moduleData = moduleLabels.map((module) => moduleWeightage[module]);

  const pieChartData = {
    labels: moduleLabels,
    datasets: [
      {
        data: moduleData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };

  // Custom CSS styling for the pie chart container
  const pieChartStyle = {
    width: "40%", // Adjust the width to make it smaller
    margin: "0 auto", // Center the chart
  };


  return (
    <>
    <div style={{filter:`${blurpage}`}} className='stat-parent'>
     
      <div className="stat-select" >
    <h1 >Get Weightage Insight </h1>

        <div className="stat-select-in">
          <h1>Statistics<br />{selectedYear} - {selectedSubject} </h1>
        
          <div className="stat-select-in1">
            <span> Year : </span>
            <select
              name="Branch"
              id="Branch"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="Dec-2022" selected>Dec-2022</option>
              <option value="May-2022">May-2022</option>
              <option value="Dec-2019">Dec-2019</option>
              <option value="May-2019">May-2019</option>
              <option value="Dec-2018">Dec-2018</option>
              <option value="May-2018">May-2018</option>
              <option value="Dec-2017">Dec-2017</option>
              <option value="May-2017">May-2017</option>
              <option value="Dec-2016">Dec-2016</option>
              <option value="May-2016">May-2016</option>
              <option value="Dec-2015">Dec-2015</option>
              <option value="May-2015">May-2015</option>
            </select>
          </div>
          <div className="stat-select-in2">
            <span> Subject : </span>
            <select
              name="Subject"
              id="Subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="IP">IP</option>
              <option value="CNS">CNS</option>
              <option value="ADSA">ADSA</option>
              <option value="SE" selected>SE</option>
              <option value="EEB">EEB</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pie-chart" style={pieChartStyle}>
        {selectedYear !== "All" && (
          <div>
            <h2 style={{contentVisibility:"hidden"}}> 
              Module Weightage for {selectedYear} - {selectedSubject}
            </h2>
            <Pie data={pieChartData} options={{
              plugins: {
                legend: {
                  position: 'right',
                },
              },
            }} />
          </div>
        )}
      </div>
    </div>
    </>
  )

  
}

export default Statistics
  // Sample data for module weightage (replace with your actual data)
  const moduleWeightageData = [
    {
      module: "1",
      year: "Dec-2022",
      subject: "IP",
      marks: 40,
    },
    {
      module: "2",
      year: "Dec-2022",
      subject: "IP",
      marks: 10,
    },
    {
      module: "3",
      year: "Dec-2022",
      subject: "IP",
      marks: 15,
    },
    {
      module: "4",
      year: "Dec-2022",
      subject: "IP",
      marks: 10,
    },
    {
      module: "5",
      year: "Dec-2022",
      subject: "IP",
      marks: 35,
    },
    {
      module: "6",
      year: "Dec-2022",
      subject: "IP",
      marks: 10,
    },
    {
      module: "1",
      year: "May-2022",
      subject: "IP",
      marks: 20,
    },
    {
      module: "2",
      year: "May-2022",
      subject: "IP",
      marks: 15,
    },
    {
      module: "3",
      year: "May-2022",
      subject: "IP",
      marks: 20,
    },
    {
      module: "4",
      year: "May-2022",
      subject: "IP",
      marks: 5,
    },
    {
      module: "5",
      year: "May-2022",
      subject: "IP",
      marks: 15,
    },
    {
      module: "6",
      year: "May-2022",
      subject: "IP",
      marks: 5,
    },
    {
      module: "1",
      year: "Dec-2022",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "2",
      year: "Dec-2022",
      subject: "CNS",
      marks: 45,
    },
    {
      module: "3",
      year: "Dec-2022",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "4",
      year: "Dec-2022",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "5",
      year: "Dec-2022",
      subject: "CNS",
      marks: 20,
    },
    {
      module: "6",
      year: "Dec-2022",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "1",
      year: "May-2019",
      subject: "CNS",
      marks: 10,
    },
    {
      module: "2",
      year: "May-2019",
      subject: "CNS",
      marks: 40,
    },
    {
      module: "3",
      year: "May-2019",
      subject: "CNS",
      marks: 10,
    },
    {
      module: "4",
      year: "May-2019",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "5",
      year: "May-2019",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "6",
      year: "May-2019",
      subject: "CNS",
      marks: 20,
    },
    {
      module: "1",
      year: "Dec-2019",
      subject: "CNS",
      marks: 20,
    },
    {
      module: "2",
      year: "Dec-2019",
      subject: "CNS",
      marks: 45,
    },
    {
      module: "3",
      year: "Dec-2019",
      subject: "CNS",
      marks: 20,
    },
    {
      module: "4",
      year: "Dec-2019",
      subject: "CNS",
      marks: 20,
    },
    {
      module: "5",
      year: "Dec-2019",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "6",
      year: "Dec-2019",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "1",
      year: "Dec-2018",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "2",
      year: "Dec-2018",
      subject: "CNS",
      marks: 50,
    },
    {
      module: "3",
      year: "Dec-2018",
      subject: "CNS",
      marks: 10,
    },
    {
      module: "4",
      year: "Dec-2018",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "5",
      year: "Dec-2018",
      subject: "CNS",
      marks: 15,
    },
    {
      module: "6",
      year: "Dec-2018",
      subject: "CNS",
      marks: 20,
    }, 
    {
      module: "1",
      year: "Dec-2018",
      subject: "ADSA",
      marks: 10,
    }, 
    {
      module: "2",
      year: "Dec-2018",
      subject: "ADSA",
      marks: 15,
    }, 
    {
      module: "3",
      year: "Dec-2018",
      subject: "ADSA",
      marks: 55,
    },
    {
      module: "4",
      year: "Dec-2018",
      subject: "ADSA",
      marks: 10,
    }, 
    {
      module: "5",
      year: "Dec-2018",
      subject: "ADSA",
      marks: 30,
    }, 
    {
      module: "6",
      year: "Dec-2018",
      subject: "ADSA",
      marks: 10,
    },  
    {
      module: "1",
      year: "May-2019",
      subject: "ADSA",
      marks: 10,
    }, 
    {
      module: "2",
      year: "May-2019",
      subject: "ADSA",
      marks: 40,
    }, 
    {
      module: "3",
      year: "May-2019",
      subject: "ADSA",
      marks: 45,
    }, 
    {
      module: "4",
      year: "May-2019",
      subject: "ADSA",
      marks: 30,
    }, 
    {
      module: "5",
      year: "May-2019",
      subject: "ADSA",
      marks: 15,
    }, 
    {
      module: "6",
      year: "May-2019",
      subject: "ADSA",
      marks: 10,
    }, 
    {
      module: "1",
      year: "Dec-2019",
      subject: "ADSA",
      marks: 10,
    }, 
    {
      module: "2",
      year: "Dec-2019",
      subject: "ADSA",
      marks: 5,
    }, 
    {
      module: "3",
      year: "Dec-2019",
      subject: "ADSA",
      marks: 25,
    }, 
    {
      module: "4",
      year: "Dec-2019",
      subject: "ADSA",
      marks: 15,
    }, 
    {
      module: "5",
      year: "Dec-2019",
      subject: "ADSA",
      marks: 25,
    }, 
    {
      module: "6",
      year: "Dec-2019",
      subject: "ADSA",
      marks: 5,
    }, 
    {
      module: "1",
      year: "May-2022",
      subject: "ADSA",
      marks: 10,
    }, 
    {
      module: "2",
      year: "May-2022",
      subject: "ADSA",
      marks: 10,
    }, 
    {
      module: "3",
      year: "May-2022",
      subject: "ADSA",
      marks: 20,
    }, 
    {
      module: "4",
      year: "May-2022",
      subject: "ADSA",
      marks: 25,
    }, 
    {
      module: "5",
      year: "May-2022",
      subject: "ADSA",
      marks: 20,
    }, 
    {
      module: "6",
      year: "May-2022",
      subject: "ADSA",
      marks: 10,
    }, 
    {
      module: "1",
      year: "May-2022",
      subject: "EEB",
      marks: 5,
    }, 
    {
      module: "2",
      year: "May-2022",
      subject: "EEB",
      marks: 20,
    }, 
    {
      module: "3",
      year: "May-2022",
      subject: "EEB",
      marks: 10,
    }, 
    {
      module: "4",
      year: "May-2022",
      subject: "EEB",
      marks: 5,
    }, 
    {
      module: "5",
      year: "May-2022",
      subject: "EEB",
      marks: 15,
    }, 
    {
      module: "6",
      year: "May-2022",
      subject: "EEB",
      marks: 20,
    }, 
    {
      module: "1",
      year: "Dec-2022",
      subject: "EEB",
      marks: 25,
    }, 
    {
      module: "2",
      year: "Dec-2022",
      subject: "EEB",
      marks: 15,
    }, 
    {
      module: "3",
      year: "Dec-2022",
      subject: "EEB",
      marks: 25,
    }, 
    {
      module: "4",
      year: "Dec-2022",
      subject: "EEB",
      marks: 20,
    }, 
    {
      module: "5",
      year: "Dec-2022",
      subject: "EEB",
      marks: 15,
    }, 
    {
      module: "6",
      year: "Dec-2022",
      subject: "EEB",
      marks: 25,
    }, 
    {
      module: "1",
      year: "Dec-2015",
      subject: "SE",
      marks: 20,
    }, 
    {
      module: "2",
      year: "Dec-2015",
      subject: "SE",
      marks: 10,
    }, 
    {
      module: "3",
      year: "Dec-2015",
      subject: "SE",
      marks: 30,
    }, 
    {
      module: "4",
      year: "Dec-2015",
      subject: "SE",
      marks: 10,
    }, 
    {
      module: "1",
      year: "Dec-2015",
      subject: "SE",
      marks: 10,
    }, 
    {
      module: "1",
      year: "Dec-2015",
      subject: "SE",
      marks: 20,
    }, 
    {
      module: "1",
      year: "May-2015",
      subject: "SE",
      marks: 20,
    }, 
    {
      module: "2",
      year: "May-2015",
      subject: "SE",
      marks: 20,
    }, 
    {
      module: "3",
      year: "May-2015",
      subject: "SE",
      marks: 10,
    }, 
    {
      module: "4",
      year: "May-2015",
      subject: "SE",
      marks: 10,
    }, 
    {
      module: "5",
      year: "May-2015",
      subject: "SE",
      marks: 35,
    }, 
    {
      module: "6",
      year: "May-2015",
      subject: "SE",
      marks: 25,
    }, 
    {
      module: "1",
      year: "Dec-2016",
      subject: "SE",
      marks: 35,
    }, 
    {
      module: "2",
      year: "Dec-2016",
      subject: "SE",
      marks: 5,
    }, 
    {
      module: "3",
      year: "Dec-2016",
      subject: "SE",
      marks: 5,
    }, 
    {
      module: "4",
      year: "Dec-2016",
      subject: "SE",
      marks: 30,
    }, 
    {
      module: "5",
      year: "Dec-2016",
      subject: "SE",
      marks: 5,
    }, 
    {
      module: "6",
      year: "Dec-2016",
      subject: "SE",
      marks: 35,
    }, 
    {
      module: "1",
      year: "May-2016",
      subject: "SE",
      marks: 30,
    }, 
    {
      module: "2",
      year: "May-2016",
      subject: "SE",
      marks: 10,
    }, 
    {
      module: "3",
      year: "May-2016",
      subject: "SE",
      marks: 5,
    }, 
    {
      module: "4",
      year: "May-2016",
      subject: "SE",
      marks: 35,
    }, 
    {
      module: "5",
      year: "May-2016",
      subject: "SE",
      marks: 25,
    }, 
    {
      module: "6",
      year: "May-2016",
      subject: "SE",
      marks: 10,
    }, 
    {
      module: "1",
      year: "Dec-2017",
      subject: "SE",
      marks: 55,
    }, 
    {
      module: "2",
      year: "Dec-2017",
      subject: "SE",
      marks: 5,
    },
    {
      module: "3",
      year: "Dec-2017",
      subject: "SE",
      marks: 5,
    },
    {
      module: "4",
      year: "Dec-2017",
      subject: "SE",
      marks: 15,
    },
    {
      module: "5",
      year: "Dec-2017",
      subject: "SE",
      marks: 10,
    },
    {
      module: "6",
      year: "Dec-2017",
      subject: "SE",
      marks: 20,
    },
    {
      module: "1",
      year: "May-2017",
      subject: "SE",
      marks: 40,
    },
    {
      module: "2",
      year: "May-2017",
      subject: "SE",
      marks: 10,
    },
    {
      module: "3",
      year: "May-2017",
      subject: "SE",
      marks: 5,
    },
    {
      module: "4",
      year: "May-2017",
      subject: "SE",
      marks: 10,
    },
    {
      module: "5",
      year: "May-2017",
      subject: "SE",
      marks: 10,
    },
    {
      module: "6",
      year: "May-2017",
      subject: "SE",
      marks: 20,
    },
    {
      module: "1",
      year: "Dec-2018",
      subject: "SE",
      marks: 25,
    },
    {
      module: "2",
      year: "Dec-2018",
      subject: "SE",
      marks: 15,
    },
    {
      module: "3",
      year: "Dec-2018",
      subject: "SE",
      marks: 10,
    },
    {
      module: "4",
      year: "Dec-2018",
      subject: "SE",
      marks: 15,
    },
    {
      module: "5",
      year: "Dec-2018",
      subject: "SE",
      marks: 20,
    },
    {
      module: "6",
      year: "Dec-2018",
      subject: "SE",
      marks: 25,
    },
    {
      module: "1",
      year: "May-2018",
      subject: "SE",
      marks: 40,
    },
    {
      module: "2",
      year: "May-2018",
      subject: "SE",
      marks: 5,
    },
    {
      module: "3",
      year: "May-2018",
      subject: "SE",
      marks: 10,
    },
    {
      module: "4",
      year: "May-2018",
      subject: "SE",
      marks: 10,
    },
    {
      module: "5",
      year: "May-2018",
      subject: "SE",
      marks: 10,
    },
    {
      module: "6",
      year: "May-2018",
      subject: "SE",
      marks: 10,
    },
    {
      module: "1",
      year: "May-2019",
      subject: "SE",
      marks: 20,
    },
    {
      module: "2",
      year: "May-2019",
      subject: "SE",
      marks: 10,
    },
    {
      module: "3",
      year: "May-2019",
      subject: "SE",
      marks: 5,
    },
    {
      module: "4",
      year: "May-2019",
      subject: "SE",
      marks: 10,
    },
    {
      module: "5",
      year: "May-2019",
      subject: "SE",
      marks: 20,
    },
    {
      module: "6",
      year: "May-2019",
      subject: "SE",
      marks: 30,
    },
    {
      module: "1",
      year: "Dec-2022",
      subject: "SE",
      marks: 20,
    },
    {
      module: "2",
      year: "Dec-2022",
      subject: "SE",
      marks: 10,
    },
    {
      module: "3",
      year: "Dec-2022",
      subject: "SE",
      marks: 25,
    },
    {
      module: "4",
      year: "Dec-2022",
      subject: "SE",
      marks: 10,
    },
    {
      module: "5",
      year: "Dec-2022",
      subject: "SE",
      marks: 20,
    },
    {
      module: "6",
      year: "Dec-2022",
      subject: "SE",
      marks: 35,
    },
  ];