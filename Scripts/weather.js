function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "the%20Hague,nl";

	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;

	fetch(request)

	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})

	.then(function(response) {
		onAPISucces(response);
	})

	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	var type = response.weather[0].description;

	var degC = Math.floor(response.main.temp - 273.15);

	var weatherBox = document.getElementById('weer');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}


function onAPIError(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weer');
	weatherBox.className = 'hidden';
}

getAPIdata();
