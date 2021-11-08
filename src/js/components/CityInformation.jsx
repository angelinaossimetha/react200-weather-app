import React, { Component } from 'react';
import WeatherPiece from './WeatherPiece';

class CityInfomation extends Component {

    render() {
        return (
            <div className='card'>
                <div className='card-header text-white bg-primary mb-3'>City Information</div>
                <div className='card-body'>
                    <h3 className='card-title text-center text-dark text-secondary'>Tokyo</h3>
                    <p className='card-text text-center' >Lat/Long: 35.69, 139.69</p>
                    <div className="row">
                        <WeatherPiece
                            name="Temperature (F)"
                            value="65.62F"
                        />
                        <WeatherPiece
                            name="Pressure"
                            value="997"
                        />
                        <WeatherPiece
                            name="Humidity"
                            value="39%"
                        />
                    </div><br />
                    <div className="row">
                        <WeatherPiece
                            name="Lowest Temp (F)"
                            value="62.01F"
                        />
                        <WeatherPiece
                            name="Highest Temp (F)"
                            value="71.01F"
                        />
                        <WeatherPiece
                            name="Wind Speed"
                            value="24.16mph"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CityInfomation;