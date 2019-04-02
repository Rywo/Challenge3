var inc = 1000;
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day =  today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('klokDisplay').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
  var date = day + "-" + month + "-" + year;
  document.getElementById("dateDisplay").innertext = date;
  document.getElementById("dateDisplay").textContent = date;
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
checkTime();
startTime();
