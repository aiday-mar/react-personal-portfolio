// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';

// IMPORT PROJECT REFERENCES
// in the same folder
import { CurrentWeatherDisplay } from './CurrentWeatherDisplay';
import { DailyWeatherDisplay } from './DailyWeatherDisplay';
import { HourlyWeatherDisplay } from './HourlyWeatherDisplay';

// IMPORT PROJECT SERVICES
import { WeatherService } from '../../Services/WeatherService';
import { GeolocationService } from '../../Services/GeolocationService';

// INITIALIZE SERVICES
const weatherService = new WeatherService();
const geolocationService = new GeolocationService();


class WeatherDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showCurrentWeather: false,
            showDailyWeather: false,
            showHourlyWeather: false
        };

        this.handleOnRefresh = this.handleOnRefresh.bind(this);
    }


    componentDidMount() {
      // here when you get the current position, then the return value is used to return different weathers
        geolocationService
            .getCurrentPosition()
            .then(position => {
                this.loadCurrentWeatherByPosition(position);
                this.loadDailyWeatherByPosition(position);
                this.loadHourlyWeatherByPosition(position);
            })
            .catch(error => console.log(error));      
    }

    // this is the function used above 
    loadCurrentWeatherByPosition(position) {
        
        if (!position) {
            throw Error('A valid position must be specified');
        }

        // we set the state by by using the weather return value
        weatherService
            .getCurrentWeatherByPosition(position)
            .then(weather => {
                this.setState(() => ({ weather: weather, showCurrentWeather: true }));
            })
            .catch(error => console.log(error));
    }


    loadDailyWeatherByPosition(position) {
        
        if (!position) {
            throw Error('A valid position must be specified');
        }

        weatherService
            .getDailyWeatherByPosition(position)
            .then(dailyForecasts => {
                this.setState(() => ({ dailyForecasts: dailyForecasts, showDailyWeather: true }));
            })
            .catch(error => console.log(error));
    }


    loadHourlyWeatherByPosition(position) {
        
        if (!position) {
            throw Error('A valid position must be specified');
        }

        weatherService
            .getHourlyWeatherByPosition(position)
            .then(hourlyForecasts => {
                this.setState(() => ({ hourlyForecasts: hourlyForecasts, showHourlyWeather: true }));
            })
            .catch(error => console.log(error));
    }


    handleOnRefresh() {
        this.setState(() => ({
            showCurrentWeather: false,
            showDailyWeather: false,            
            showHourlyWeather: false
        }));

        geolocationService
            .getCurrentPosition()
            .then(position => {
                this.loadCurrentWeatherByPosition(position);
                this.loadDailyWeatherByPosition(position);
                this.loadHourlyWeatherByPosition(position);
            })
            .catch(error => console.log(error));
    }


    showWeather() {
        // here it seems like we return 3 separated booleans?
        return this.state.showCurrentWeather 
            && this.state.showDailyWeather 
            && this.state.showHourlyWeather;
    }


    showSpinner() {
        return !this.state.showCurrentWeather 
            || !this.state.showDailyWeather 
            || !this.state.showHourlyWeather;
    }


    render() {
        return (
            <div>
                {
                    this.showWeather() &&
                    <div>
                        <CurrentWeatherDisplay weather={this.state.weather} onRefresh={this.handleOnRefresh} />
                        <DailyWeatherDisplay dailyForecasts={this.state.dailyForecasts} />
                        <HourlyWeatherDisplay hourlyForecasts={this.state.hourlyForecasts} />
                    </div>
                }
                {
                    this.showSpinner() &&
                    <div className="w-100 text-center mt-5">
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                    </div>
                }
            </div>
        );
    }
}


export { WeatherDashboard };