import axios from 'axios';


export function getCity(city) {
	return {
		type: 'GET_CITY', 
		payload: {"coord":{"lon":-95.3633,"lat":29.7633},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":74.14,"feels_like":74.41,"temp_min":71.11,"temp_max":77.14,"pressure":1019,"humidity":67},"visibility":10000,"wind":{"speed":3,"deg":271,"gust":10},"clouds":{"all":75},"dt":1636741718,"sys":{"type":2,"id":2006306,"country":"US","sunrise":1636721041,"sunset":1636759647},"timezone":-21600,"id":4699066,"name":"Houston","cod":200}
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