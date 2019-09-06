import React from 'react';
import PropTypes from 'prop-types';

class FormCity extends React.Component {
  render() {
    return (
      <form className="columns" onSubmit={this.props.actionOnSubmit}>
        <div className="field ">
          <label className="label subtitle">Name of the city you want to know the weather</label>
          <input 
            className="input"
            placeholder={'City'} 
            type="text" 
            value={this.props.location} 
            onChange={this.props.actionOnChange} 
          />
        </div>
      </form>
    );
  }
}

FormCity.propTypes = {
  actionOnSubmit: PropTypes.func.isRequired,
  actionOnChange: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
};

export default FormCity;