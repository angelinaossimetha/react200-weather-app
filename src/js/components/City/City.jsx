import React, { Component } from 'react';

export default class City extends Component {
    constructor(props) {
        super(props);
        this.getIcon = this.getIcon.bind(this);
    }

    getIcon(icon) {
        if (icon) {
            return (
                <img src={`https://openweathermap.org/img/wn/${icon}.png`}></img>
            )
        } else {
            return null;
        }
    }

    render() {
        const {
            name,
            lat,
            long,
            temp,
            pressure,
            humidity,
            lowTemp,
            highTemp,
            windSpeed,
            icon
        } = this.props;

        return (
            <div className='card'>
                <div className='card-header text-white bg-primary mb-3'>City Information</div>
                <div className='card-body'>
                    <h3 className='card-title text-center text-dark text-secondary'>{name}</h3>
                    <div className='test-left'>{this.getIcon(icon)}</div>
                    <p className='card-text text-center' >Lat/Long: {lat},{long}</p>
                    <div className="row">
                        <div className="col">
                            <div className="text-center" style={{ fontWeight: 'bold' }}>Temperature (F)</div>
                            <p className="text-center text-success font-weight-bold">{temp}</p>
                        </div>
                        <div className="col">
                            <div className="text-center" style={{ fontWeight: 'bold' }}>Pressure</div>
                            <p className="text-center text-success font-weight-bold">{pressure}</p>
                        </div>
                        <div className="col">
                            <div className="text-center" style={{ fontWeight: 'bold' }}>Humidity</div>
                            <p className="text-center text-success font-weight-bold">{humidity}</p>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col">
                            <div className="text-center" style={{ fontWeight: 'bold' }}>Lowest Temp (F)</div>
                            <p className="text-center text-success font-weight-bold">{lowTemp}</p>
                        </div>
                        <div className="col">
                            <div className="text-center" style={{ fontWeight: 'bold' }}>Highest Temp (F)</div>
                            <p className="text-center text-success font-weight-bold">{highTemp}</p>
                        </div>
                        <div className="col">
                            <div className="text-center" style={{ fontWeight: 'bold' }}>Wind Speed</div>
                            <p className="text-center text-success font-weight-bold">{windSpeed}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}