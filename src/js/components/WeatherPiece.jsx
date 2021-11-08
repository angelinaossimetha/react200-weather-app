import React from "react";

const WeatherPiece = props => {
    const { name, value } = props;
    return (
        <div className="col">
            <div className="text-center" style={{ fontWeight: 'bold' }}>{name}</div>
            <p className="text-center text-success font-weight-bold">{value}</p>
        </div>

    )
}

export default WeatherPiece;
