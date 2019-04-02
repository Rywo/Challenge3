function getAPIdata3() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;

	// get current weather
	fetch(request)

	// parse to JSON format
	.then(function(response) {
		if(!response.ok) { //als het niet klopt: (uitroepteken staat voor niet)
			throw Error(response.statusText); //als je een fout hebt gemaakt, dan 'gooi' je hem naar catch
		}
		return response.json(); //hij maakt er json van als er geen fout is gegooid naar catch
	})

	// render weather per day
	.then(function(response) { //als het allemaal goed is gegaan, voer dit dan uit
		// render weatherCondition
		onAPISucces3(response);
	})

	// catch error
	.catch(function (error) { //als je de fout gevangen hebt, dan moet je dit gaan uitvoeren
		onAPIError3(error);
	});
}


function onAPISucces3(response) {
	// get type of weather in string format
	var type = response.weather[0].description;

	var icon = response.weather[0].icon;

	var iconBox = document.getElementById('icon');

	// get icon
	if (icon == '11d' || '11n') {
		return iconBox.src = 'http://openweathermap.org/img/w/11d.png';
	}
	else if (icon == '09d' || '09n') {
		return iconBox.src = 'http://openweathermap.org/img/w/09d.png';
	}
	else if (icon == '10d' || '10n') {
		return iconBox.src = 'http://openweathermap.org/img/w/10d.png';
	}
	else if (icon == '13d' || '13n') {
		return iconBox.src = 'http://openweathermap.org/img/w/13d.png';
	}
	else if (icon == '50d' || '50n') {
		return iconBox.src = 'http://openweathermap.org/img/w/50d.png';
	}
	else if (icon == '01d' || '01n') {
		return iconBox.src = 'http://openweathermap.org/img/w/01d.png';
	}
	else if (icon == '03d' || '03n') {
		return iconBox.src = 'http://openweathermap.org/img/w/03d.png';
	}
	else if (icon == '04d' || '04n') {
		return iconBox.src = 'http://openweathermap.org/img/w/04d.png';
	}
	else {
		return iconBox.src = 'http://openweathermap.org/img/w/02d.png';
	}
}


function onAPIError3(error) {
	console.error('Request failed', error);
	var iconBox = document.getElementById('icon');
	iconBox.className = 'hidden';
}


getAPIdata3();
