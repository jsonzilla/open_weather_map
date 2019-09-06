import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Weather API Client</strong> by <a href="http://twitter.com/0unit">Jeison Cardoso</a>. Using API 
              <a href="api.openweathermap.org"> OpenWeatherMap</a>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;