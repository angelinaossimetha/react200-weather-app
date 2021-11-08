import React from 'react';

const CityHistory = props => {
    const { name, date, time } = props;
    return (
        <li>
            <div className="row">
                <div className="col-md-6">{name}</div>
                <div className="col-md-6 text-right">{date}</div>
            </div>
            <div className="text-right">{time}</div>
        </li>
    )
}

export default CityHistory;