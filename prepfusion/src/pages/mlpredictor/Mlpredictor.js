import React from "react";
import "./Mlpredictor.css";
import image from "./upload-page-image.png";

export default function mlpredictor() {
  return (
    <div>
      <div class="container">
        <p class="heading">Upload image to predict module</p>
        <div class="sub-container">
          <div class="image-container">
            <img src={image} alt="Image" />
          </div>
          <div class="drag-drop-container">
            <div class="drag-drop-area" id="dropzone">
              <button class="upload-image-button">Upload image</button>
              <p class="info">or drop a file</p>
            </div>
            <p class="info">No image ?</p>
            <p class="info">Type the question</p>
          </div>
        </div>
      </div>

      <div class="enter-text">
        <div class="header">
          <p>Recognized text is incorrect?</p>
          <h3>Type question</h3>
        </div>
        <div class="enter-text-area">
          <div contenteditable="true">Your question....</div>
          <button>Enter text</button>
        </div>
      </div>

      <div class="predictions">
        <div class="label-textarea">
          <label for="myTextarea">Extracted Text:</label>
          <div readonly class="myTextarea" name="myTextarea">
            This is some text with an <a href="">Extracted Text</a>
          </div>
        </div>
        <div class="label-textarea">
          <label for="myTextarea">Predicted Subject:</label>
          <div readonly class="myTextarea" name="myTextarea">
            This is some text with an <a href="">Copy</a>
          </div>
        </div>
        <div class="label-textarea">
          <label for="myTextarea">Predicted Module:</label>
          <div readonly class="myTextarea" name="myTextarea">
            This is some text with an <a href="">Copy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
