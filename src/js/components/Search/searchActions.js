import axios from 'axios';


export function getCity(city) {
	return {
		type: 'GET_CITY', 
		payload: axios.get(`/search/${city}`)
	};
}

// export function updateWeather(userInput) {
// 	return {
// 		type: 'UPDATE_WEATHER_INFO',
// 		payload: axios
// 			.get(`/api?q=${userInput}`)
// 			.then((response) => {
// 				return response;
// 			})
// 			.catch(err => console.log(err)),
// 	};
// }


export function searchCity(name) {
	return {
		type: 'UPDATE_CITY',
		payload: { name }
	};
}