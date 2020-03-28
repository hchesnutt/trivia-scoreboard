import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ResponsiveLineCanvas } from '@nivo/line';

import './scoreboard.scss';
import data from './scores.json';

const propTypes = {};

const defaultProps = {};

class Scoreboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ResponsiveLineCanvas
        data={data}
        curve="natural"
        lineWidth={1}
        enableArea
        enablePoints={false}
        axisBottom={{
          orient: 'bottom',
          legend: 'question',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        colors={{ scheme: 'category10' }}
        pointSize={1}
        pointColor={{ theme: 'background' }}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableGridX={false}
        enableGridY={false}
      />
    );
  }
}

Scoreboard.propTypes = propTypes;
Scoreboard.defaultProps = defaultProps;

export default Scoreboard;