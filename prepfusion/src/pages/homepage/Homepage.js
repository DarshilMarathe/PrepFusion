import React from 'react';
import './Homepage.css';
import image from './image 9.png';
import image1 from './darn1.png'
import image2 from './boat-storm-lighthouse.4bdddec0.png.png'
import image3 from './heart-speech-bubble-asterisk-graphic.6eb0678f.svg.png';
import image4 from './image10.png'

export default function Homepage() {
  return (
    
      <div>
        <div className="homepage_color-div">
          <div className="adv">Advanced & Smart</div>
          <div className="learn">Learning Fusion</div>
          <p className="homepage_para">A straightforward solution built for online prep to</p>
          <p className="homepage_para2">ace tests and exams, effortlessly.</p>
          <div className="homepage_horizontal_flex">
            <button className="homepage_psbutton">Problem Set</button>
            <p className="or">OR</p>
            <input type="text" placeholder="Enter your question here..." className="homepage_textbox"/>
            <button className="homepage_get_ans">Get Answer</button>
          </div>
        </div>
        <div className="homepage_color-div">
          <div className="homepage_left-section">
            <img src={image} alt="Image"/>
          </div>
          <div className="homepage_right-section">
            <h2 className="homepage_h2">Predict Question Info.</h2>
            <p className="homepage_2_p">Learn with AI-powered model which predicts question subject & module.</p>
            <button className="homepage_learn_more">Learn More</button>
          </div>
        </div>
        <div className="homepage_color-div">
          <div>
            <h1 className="homepage_h1">Lets Get Started</h1>
          </div>
          <div className="homepage_frame3_container">
            <div className="homepage_card">
              <img src={image1} alt="Card 1" className="img"/>
              <div className="homepage_card-content">
                <h2 className="homepage_content3head">Filter PYQ</h2>
                <p className="homepage_content3p">Filter and Learn from the Previous Year Question (PYQs).</p>
                <a href="#" className="anchor">Learn More</a>
              </div>
            </div>
            <br />
            <div className="homepage_card">
              <img src={image2} alt="Card 2" className="img" />
              <div className="homepage_card-content">
                <h2 className="homepage_content3head">Predict Chapter</h2>
                <p className="homepage_content3p">Learn with AI-powered model which predicts question subject & module.</p>
                <a href="#" className="anchor">Learn More</a>
              </div>
            </div>
            <br />
            <div className="homepage_card">
              <img src={image3} alt="Card 3" className="img" />
              <div className="homepage_card-content">
                <h2 className="homepage_content3head">Chatbot</h2>
                <p className="homepage_content3p">Get your answer from textbook. Let the AI do it for you.</p>
                <a href="#" className="anchor">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage_color-div">
          <div className="feature-container">
            <div className="homepage_feature-text">
              <h2>Upcoming features</h2>
              <p className="homepage_bp">The best part?<span class="homepage_si">Smoothly integrating</span></p>
              {/* <p className="homepage_si">Smoothly integrating</p> */}
              <div className="homepage_feature-image">
                <img src={image4} className="homepage_image10" alt="Feature Image" />
              </div>
              <p className="homepage_opt">Online Proctored tests<span className="homepage_lep">Launching Exam Portals</span></p>
              {/* <p className="homepage_lep">Launching Exam Portals</p> */}
            </div>
          </div>
        </div>
      </div>
   
  );
}
