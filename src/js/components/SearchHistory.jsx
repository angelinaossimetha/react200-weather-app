import React, { Component } from 'react';
import CityHistory from './CityHistory';

class SearchHistory extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header text-white bg-primary mb-3'>Search History</div>
                <div className='card-body'>
                    <CityHistory
                        name="San Diego"
                        date="04/28/2016"
                        time="19:04:46"
                    />
                    <CityHistory
                        name="New York"
                        date="04/28/2016"
                        time="19:04:48"
                    />
                    <CityHistory
                        name="Washington D.C"
                        date="04/28/2016"
                        time="19:04:49"
                    />
                    <CityHistory
                        name="London"
                        date="04/28/2016"
                        time="19:04:50"
                    />
                    <CityHistory
                        name="Tokyo"
                        date="04/28/2016"
                        time="19:04:51"
                    />
                </div>
            </div>

        );
    }
}

export default SearchHistory;