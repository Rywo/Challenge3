function air() {

	var url = "https://api.airvisual.com/v2/city?city=den haag&state=south holland&country=netherlands&key=R7GWS3dmmji3enyMj";

	fetch(url)

	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})

	.then(function(response) {
		airSucces(response);
	})

	.catch(function (error) {
		airError(error);
	});
}


function airSucces(response) {
  var hu = response.data.current.weather.hu
	var humidityBox = document.getElementById('humidity');
	humidityBox.innerHTML = "Humidity " + hu + "&percnt; <br>";
}


function airError(error) {
	console.error('Request failed', error);
	var humidityBox = document.getElementById('humidity');
	humidityBox.className = 'hidden';
}

air();
