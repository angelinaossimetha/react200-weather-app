import React from 'react';

const SearchBar = props => {
    return (
        <div className="search-container row">
            <div className="col-md">
                <input type="text" placeholder="Enter a city name" name="search" style={{ width: '100%' }} ></input>
            </div>
            <div className="col-md">
                <button type="submit">Go!</button>
            </div>
        </div>

    )
}

export default SearchBar;