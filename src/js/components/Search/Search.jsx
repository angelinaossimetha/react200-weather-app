import React, { Component } from 'react';
import { searchCity, getCity } from './searchActions';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.handleGetCity = this.handleGetCity.bind(this);
        this.handleSearchCity = this.handleSearchCity.bind(this);
    }



    handleSearchCity(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(searchCity(value));
    }

    handleGetCity() {
        const { dispatch, name } = this.props;
        dispatch(getCity(name));
    }


    render() {
        const { name } = this.props;
        const cities = ['San Diego', 'New York', 'Washington D.C.', 'London', 'Tokyo'];
        return (
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div className='btn-group' role='group'>
                    {cities.map((city) => {
                        return <div>
                            <button type='button' value={city} name={city} className='btn btn-primary' onClick={this.handleSearchCity}>
                                {city}
                            </button>
                        </div>
                    })}
                </div>
                <form className="form">
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder='Enter a city name' value={name} onChange={this.handleSearchCity}></input>
                        <div className='input-group-append'>
                            <button className='btn btn-outline-secondary' type='button' onClick={this.handleGetCity}>Go!</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
