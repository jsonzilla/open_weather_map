import React, { Component } from 'react';
import FormCity from './Form';
import Plot from './Plot';
import WeatherCards from './WeatherCards';
import Footer from './Footer';
import NoInfo from './NoInfo';

import xhr from 'xhr';

class App extends Component {
  constructor() {
    super();

    this.state = {
      location: 'Ipumirim',
      data: {},
      dates: [],
      temps: [],
      weather: []
    };
  }

  fetchDataApi() {
    const location = encodeURIComponent(this.state.location);
    const urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    const urlSufixApi = '&APPID=29cf6125ee914c7c46c7ad7f11e0b57a';
    const urlSufixUnit = '&units=metric';
    const url = urlPrefix + location + urlSufixApi + urlSufixUnit;

    let self = this;
    xhr({
      url: url
    }, function (err, data) {
      const body = JSON.parse(data.body);
      const list = body.list;
      const dates = [];
      const temps = [];

      if (list) {
        for (let i = 0; i < list.length; i++) {
          dates.push(list[i].dt_txt);
          temps.push(list[i].main.temp);
        }
      }

      self.setState({ 
        data: body,
        dates: dates,
        temps: temps,
      });
    });
  }

  fetchData(e) {
    e.preventDefault();
    this.fetchDataApi();
  }

  changeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  componentDidMount() {
    this.fetchDataApi();
  }

  render() {
    return (
      <div>
        <section className="hero is-bold is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Weather {this.state.location ? `for ${this.state.location}` : null} 
              </h1>
              <FormCity location={this.state.location} actionOnSubmit={this.fetchData} actionOnChange={this.changeLocation} />
            </div>
          </div>
        </section>
        {(this.state.data.list) ? (
          <section className="section">
            <div className="container">    
              <div className="columns">
                <WeatherCards data_list={this.state.data.list} />  
              </div>    
              <div className="columns">
                <div className="column">
                  {<Plot
                    xData={this.state.dates}
                    yData={this.state.temps}
                    type="scatter">
                  </Plot>}
                </div>
              </div>
            </div>
          </section>
        ) : <NoInfo /> }
        <Footer />
      </div>
    );
  }
}

export default App;

