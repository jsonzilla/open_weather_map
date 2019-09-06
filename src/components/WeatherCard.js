import React from 'react';
import PropTypes from 'prop-types';

class WeatherCard extends React.Component {
  render() {
    function impData(d) {
      const date = new Date(d);
      const options = { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'};
      return new Intl.DateTimeFormat('en-GB', options).format(date);
    }

    const { data } = this.props;
    const iconClass = `owf owf-${data.weather[0].id} owf-5x`;
    const unit = '°C';
    return (
      <div className="card">
        <div className="card-content is-one-quarter">
          <div className="media">
            <div className="media-left">
              <i className={iconClass}></i>
            </div>
            <div className="media-content">
              <p className="title is-4">{data.weather[0].main} {data.main.temp}{unit}</p>
              <p className="subtitle is-6">{data.weather[0].description}</p>
            </div>
          </div>
          <div className="content">
            <br />
            <time dateTime="data.dt_txt">{impData(data.dt_txt)}</time>
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
            min {data.main.temp_min}{unit}
          </div>
          <div className="card-footer-item">
            <i className="fa fa-arrow-up" aria-hidden="true"></i>
            max {data.main.temp_max}{unit}
          </div>
        </footer>
      </div>
    );
  }
}

WeatherCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default WeatherCard;