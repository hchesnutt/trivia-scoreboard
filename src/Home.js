import React, { Component } from 'react';
import './home.scss';

import Scoreboard from './components/Scoreboard/Scoreboard';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.setTab = this.setTab.bind(this);
  }

  setTab(newTab) {
    this.setState({
      currentTab: newTab,
    })
  }

  render() {
    return (
      <div className="home">
        <div className="nav-bar">
          <div className="title-text">Project Paich</div>
          <div className="actions-container">
            <div className="action-option" onClick={() => this.setTab('scoreboard')}>scoreboard</div>
            <div className="action-option" onClick={() => this.setTab('cool chart')}>super cool chart</div>
          </div>
        </div>
        <div className="content-container">
          {this.state.currentTab === 'scoreboard' && <Scoreboard />}
          {this.state.currentTab === 'cool chart' && (
            <span>
              I'm watching you, Dave
            </span>
          )}
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
}

export default Home;