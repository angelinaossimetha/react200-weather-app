const moment = require('moment');
const defaultState = {
	name: '',
	lat: '',
	long: '',
	temp: '',
	pressure: '',
	humidity: '',
	lowTemp: '',
	highTemp: '',
	windSpeed: '',
	icon :'',
	history: [],
};

export default function searchReducer(state = defaultState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'GET_CITY': {
			return {
				...state,
				name: payload.data.name,
				lat: payload.data.coord.lat,
				long: payload.data.coord.lon,
				temp: payload.data.main.temp.toFixed(2),
				pressure: payload.data.main.pressure,
				humidity: payload.data.main.humidity,
				lowTemp: payload.data.main.temp_min,
				highTemp: payload.data.main.temp_max,
				windSpeed: payload.data.wind.speed,
				icon: payload.data.weather[0].icon,
				history: [
					...state.history,
					{
						name: payload.data.name,
						date: moment().format('l'),
						time: moment().format('H:MM:SS a')
					}
				]
			};
		}

		case 'UPDATE_CITY': {
			return {
				...state,
				name: payload.name
				// lat: payload.lat,
				// long: payload.lon,
				// temp: payload.temp,
				// pressure: payload.pressure,
				// humidity: payload.humidity,
				// lowTemp: payload.lowTemp,
				// highTemp: payload.temp_max,
				// windSpeed: payload.speed,
				// icon: payload.icon,

			};
		}

		default: {
			return state;
		}
	}
}