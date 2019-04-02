function giphy() {

var api = "https://api.giphy.com/v1/gifs/trending?&api_key=nFJ5doJzjkLlPHca0A0mAka7WGxHk5Ho&limit=1&rating=G";
function getGif() {
var url = api;
fetch(url)
.then(function(response) {
return response.json();
})

.then(function(response) {
for (var i = 0; i < response.data.length; i++){

document.getElementById("gifbox").innerHTML += '<img class="gifs" src=" ' + response.data[i].images.fixed_width.url + '">' + '<br>';
}
});
}

getGif();
}
giphy();
