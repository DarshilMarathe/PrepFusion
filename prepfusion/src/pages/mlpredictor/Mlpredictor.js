import React from "react";
import "./Mlpredictor.css";
import image from "./upload-page-image.png";

export default function mlpredictor() {
  return (
    <div>
      <div className="ML_section">
        <p className="heading">Upload image to predict module</p>
        <div className="ML_sub-container">
          <div className="MLimage-container">
            <img src={image} alt="Image" />
          </div>
          <div className="drag-drop-contain">
            <div className="drag-drop-area" id="dropzone">
              <button className="upload-image-button">Upload image</button>
              <p className="ML_info">or drop a file</p>
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
          <div contenteditable="true">Your question....</div>
          <button>Enter text</button>
        </div>
      </div>

      <div className="predictions_section">
        <div className="label-flex-ml">
          <label for="extracttextarea">Extracted Text:</label>
          <div readonly className="extracttextarea" name="extracttextarea">
            This is some text with an <a href="">Extracted Text</a>
          </div>
        </div>
        <div className="label-flex-ml">
          <label for="extracttextarea">Predicted Subject:</label>
          <div readonly className="extracttextarea" name="extracttextarea">
            This is some text with an <a href="">Copy</a>
          </div>
        </div>
        <div className="label-flex-ml">
          <label for="extracttextarea">Predicted Module:</label>
          <div readonly className="extracttextarea" name="extracttextarea">
            This is some text with an <a href="">Copy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
