import React from 'react';
import CityInfomation from './components/CityInformation';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <SearchBar/><br></br>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInfomation />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <div className='panel panel-default'>
              <SearchHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
