import React from 'react';
import City from './components/City';
import Header from './components/Header';
import Search from './components/Search';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Search/><br></br>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <City />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <div className='panel panel-default'>
              <History />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
