import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './scoreboard.scss';

const propTypes = {};

const defaultProps = {};

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: 'old news'
    };
  }

  render() {
    return (
      <div>
        {this.state.news}
      </div>
    );
  }
}

Scoreboard.propTypes = propTypes;
Scoreboard.defaultProps = defaultProps;

export default Scoreboard;