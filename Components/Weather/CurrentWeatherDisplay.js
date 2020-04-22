// IMPORT PACKAGE REFERENCES
import React from 'react';
// PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.
import PropTypes from 'prop-types';

// this is a constant component that takes any variable which we will call date here and we will convert this date into hours
const getUpdateTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padEnd(2, '0');
    // so here we signify that we want to return the variable hours by appending a little dollar sign in fron, putting two dots and putting again the variable right after the dots.
    return `${hours}:${minutes}`;
};

// as the parameters we input the properties
const CurrentWeatherDisplay = (props) => {
    
    const { weather } = props;
    
    return (
      // for some reason the style is put between two curly brackets
      // below we actually have that &deg is the degree symbol
        <div className="current-weather-display" style={{position: 'relative'}}>
            <div className="weather-location">{weather.location.name}</div>
            <div className="weather-min-max-temp">{weather.temperature.maximum}&deg; | {weather.temperature.minimum}&deg;</div>
            <div className="weather-current">                
                <span className="weather-temp">{parseInt(weather.temperature.current)} &deg;&nbsp;<sup>c</sup></span>
            </div>
            <div className="weather-condition">
                <img className="weather-icon" src={weather.icon} />
                <span className="weather-description">{weather.condition}</span>
            </div>            
            <div className="weather-update">Updated as of {getUpdateTime(weather.date)}</div>
            <i className="refresh fa fa-refresh fa-3x" onClick={props.onRefresh}></i>
        </div>
    );
};


CurrentWeatherDisplay.propTypes = {
  // here you specify that the input should be a function to the onrefresh function and an object to the weather function
    onRefresh: PropTypes.func.isRequired,
    weather: PropTypes.object.isRequired
};


export { CurrentWeatherDisplay };