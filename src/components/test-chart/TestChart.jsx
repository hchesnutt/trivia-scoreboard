import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './testChart.scss';

const propTypes = {};

const defaultProps = {};

class TestChart extends Component {
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

TestChart.propTypes = propTypes;
TestChart.defaultProps = defaultProps;

export default TestChart;