import React from 'react';
import PropTypes from 'prop-types';
  
import WeatherCard from './WeatherCard';

class WeatherCards extends React.Component {
  render() {
    const data_list = this.props.data_list;
    data_list.splice(4,100);
    return (
      <div className="columns is-multiline">
        {
          Object        
            .keys(data_list)
            .map(key => <div key={key} className="column"><WeatherCard key={key} index={key} data={data_list[key]} /></div>)
        }
      </div>
    );
  }
}

WeatherCards.propTypes = {
  data_list: PropTypes.array.isRequired
};

export default WeatherCards;