import React, { useRef, useState,useEffect } from "react";
import "./Mlpredictor.css";
import Tesseract from "tesseract.js";
import initialimage from "./upload-page-image.png";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import svgimg from './SVG.png'

function Mlpredictor() {

   const navigate = useNavigate();
   useEffect(() => {
     userAccess();
       //eslint-disable-next-line
   }, [])
 
   const userAccess = ()=>{
     if(!localStorage.getItem("token")){
       alert("Must be login to access problemset")
       navigate('/login');
     }
   }

   const fileInputRef = useRef(null);
   const [imageSrc, setImageSrc] = useState(null);
   const [extractedText, setExtractedText] = useState("");
   const [predictionModule, setPredictionModule] = useState("")
   const [predictionSubject, setPredictionSubject] = useState("")
   const [userQuestion, setUserQuestion] = useState("");

   const[visibilty1,setVisibilty1] = useState("hidden");
   const[visibilty2,setVisibilty2] = useState("hidden");

   const handleImageUpload = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click();
      }
      console.log("hello")
      handlePredict()
      setVisibilty1("");
      console.log(1)
   };

   const handleFileInputChange = async (e) => {
      const file = e.target.files[0];

      if (file) {
         setImageSrc(URL.createObjectURL(file));

         const { data: { text } } = await Tesseract.recognize(file, "eng");
         setExtractedText(text);
      } else {
         setImageSrc(null);
         setExtractedText("");
      }
   };

   const handlePredict = async () => {
      try {
         const response = await axios.post('http://127.0.0.1:5000/predict', { extractedText });
         setPredictionModule(response.data.module);
         setPredictionSubject(response.data.subject);
         
         setVisibilty2("");

      } catch (error) {
         console.error(error);
      }
   };



   return (
      <div>
         <div className="ML_section">
            <p className="heading">Upload image to predict module</p>
            <div className="ML_sub-container">
               <div className="MLimage-container">
                  <img
                     src={initialimage}
                     alt="UploadImage"
                  />
               </div>
               <div className="drag-drop-contain">
                  <div className="drag-drop-area" id="dropzone">
                     
                     <img src={svgimg} alt="" />

                     <button className="upload-image-button" onClick={handleImageUpload}>
                        Upload image
                     </button>
                     <p className="ML_info">or drop a file</p>
                     <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={handleFileInputChange}
                     />
                  </div>
                  <p className="ML_info">No image ?</p>
                  <p className="ML_info">Type the question</p>
               </div>
            </div>
         </div>
         <div className="enter-textML">
            <div className="header2">
               <p>Recognized text is incorrect?</p>
               <h3>Type question</h3>
            </div>
            <div className="enter-text-areaML">
               <input
                  type="text"
                  value={extractedText}
                  placeholder="Your question...."
                  onChange={(e) => setExtractedText(e.target.value)}
               />
               <button onClick={handlePredict}>Enter text</button>
            </div>
         </div>

         <div style={{contentVisibility : visibilty1}} className="enter-textML">
            <div className="header2">
               <h3>Uploaded Image</h3>
            </div>
            <div className="enter-text-areaML">
               {imageSrc && (
                  <div className="image-container">
                     <img
                        id="uploaded-image"
                        src={imageSrc}
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                     />
                  </div>
               )}
            </div>
         </div>

         <div  style={{contentVisibility : visibilty2}} className="predictions_section">
            <div className="label-flex-ml">
               <label htmlFor="extracttextarea">Extracted Text:</label>
               <div className="extracttextarea" name="extracttextarea">
                  {extractedText}
               </div>
            </div>
            <div className="label-flex-ml">
               <label for="extracttextarea">Predicted Subject:</label>
               <div readonly className="extracttextarea" name="extracttextarea">
                  {predictionModule}<a href="">copy</a>
               </div>
            </div>
            <div className="label-flex-ml">
               <label for="extracttextarea">Predicted Module:</label>
               <div readonly className="extracttextarea" name="extracttextarea">
                  {predictionSubject} <a href="">Copy</a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Mlpredictor;