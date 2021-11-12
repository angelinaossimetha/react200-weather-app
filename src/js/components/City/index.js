import { connect } from 'react-redux';
import City from './City';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
    const { search } = store;
    return {
        name: search.name,
        lat: search.lat,
        long: search.long,
        temp: search.temp,
        pressure: search.pressure,
        humidity: search.humidity,
        lowTemp: search.lowTemp,
        highTemp: search.highTemp,
        windSpeed: search.windSpeed,
        icon: search.icon
    };
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(City);