import React from 'react';
import './home.scss';

function Home() {
  return (
    <div className="home">
      <div className="nav-bar">
        <div className="title-text">Project Paich</div>
        <div className="actions-container">
          <div className="action-option">scoreboard</div>
          <div className="action-option">super cool chart</div>
        </div>
      </div>
      <div className="content-container">
        <span>
          content here!
        </span>
      </div>
      <div className="img-container">
        <img 
          className="armadillo-image"
          src="https://trivia-scoreboard.s3-us-west-1.amazonaws.com/aldo-hernandez-vCvLfnvUGJw-unsplash.jpg"
          alt="Sly armadillo in the shadows"
        />
      </div>
    </div>
  );
}

export default Home;