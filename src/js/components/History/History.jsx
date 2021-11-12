import React, { Component } from 'react';


export default class History extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { history } = this.props;
        return (
            <div className='card'>
                <div className='card-header text-white bg-primary mb-3'>Search History</div>
                <div className='card-body'>
                    <ul className="separator">
                        {history.map((city) => {
                            return <div>
                                <li className='list-group-item' key={city.time}>
                                    {city.name}
                                    {city.date}
                                    {city.time}
                                </li>
                            </div>
                        })}
                    </ul>
                </div>
            </div>

        );
    }
}