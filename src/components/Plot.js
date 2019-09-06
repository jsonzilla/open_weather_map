import React from 'react';
import PropTypes from 'prop-types';
const Plotly = require('plotly.js/lib/core');

class Plot extends React.Component {
  drawPlot() {
    Plotly.newPlot('plot', [{
      x: this.props.xData,
      y: this.props.yData,
      type: this.props.type,
      line: {
        color: 'rgb(0, 0, 0)',
        width: 3
      }
    }], {
      margin: {
        t: 0, r: 15, l: 35
      },
      xaxis: {
        gridcolor: 'transparent',
        tickformat: '%e %b, %H:%M'
      },
      yaxis: {
        gridcolor: 'transparent'
      }
    }, {
      displayModeBar: false
    });
  }

  componentDidMount() {
    this.drawPlot();
  }

  componentDidUpdate() {
    this.drawPlot();
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p className="card-header-title">Forecast</p>
          <div className="media" id="plot">
          </div>
        </div>
      </div>
    );
  }
}

Plot.propTypes = {
  xData: PropTypes.array.isRequired,
  yData: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
};

export default Plot;