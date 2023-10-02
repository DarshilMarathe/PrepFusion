import React from "react";
import "./Resources.css";

export default function Resources() {
  return (
    <div className="resources">
  <p className="resources-heading">Learning Resources</p>
  <div className="resources-subheading-container">
    <p>
      Supercharge your learning with our YouTube playlists and PDF books.
    </p>
    <p>
      Need a boost? Our AI chatbot, trained on these resources, is at your
      service.
    </p>
  </div>
  <div className="resources-subjects-container">
    <div className="resources-subject-subcontainer">
      <p className="resources-subject">Internet Programming</p>
      <div className="resources-subject-dropdown-content">
        <div className="resources-yt">
          <p>YouTube Playlist</p>
          <a href="#">Item 1</a>
        </div>
        <div className="resources-book">
          <p>Book PDF</p>
          <a href="#">Item 1</a>
        </div>
      </div>
    </div>
    <div className="resources-subject-subcontainer">
      <p className="resources-subject">Computer Network Security</p>
      <div className="resources-subject-dropdown-content">
        <div className="resources-yt">
          <p>YouTube Playlist</p>
          <a href="#">Item 1</a>
        </div>
        <div className="resources-book">
          <p>Book PDF</p>
          <a href="#">Item 1</a>
        </div>
      </div>
    </div>
    <div className="resources-subject-subcontainer">
      <p className="resources-subject">Advanced Data Structure and Algorithm</p>
      <div className="resources-subject-dropdown-content">
        <div className="resources-yt">
          <p>YouTube Playlist</p>
          <a href="#">Item 1</a>
        </div>
        <div className="resources-book">
          <p>Book PDF</p>
          <a href="#">Item 1</a>
        </div>
      </div>
    </div>
    <div className="resources-subject-subcontainer">
      <p className="resources-subject">Enterpreneurship and E-business</p>
      <div className="resources-subject-dropdown-content">
        <div className="resources-yt">
          <p>YouTube Playlist</p>
          <a href="#">Item 1</a>
        </div>
        <div className="resources-book">
          <p>Book PDF</p>
          <a href="#">Item 1</a>
        </div>
      </div>
    </div>
    <div className="resources-subject-subcontainer">
      <p className="resources-subject">Software Engineering</p>
      <div className="resources-subject-dropdown-content">
        <div className="resources-yt">
          <p>YouTube Playlist</p>
          <a href="#">Item 1</a>
        </div>
        <div className="resources-book">
          <p>Book PDF</p>
          <a href="#">Item 1</a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
