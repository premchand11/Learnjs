const button = document.getElementById("button");

async function gotLocation(position) {
  console.log(position);
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
}

function failLocation(position) {
  console.log("there was an error");
}

async function getData(lat, long) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0772a07ec13f4143a1875704252208&q=${lat},${long}&aqi=yes`
  );
  return await response.json();
}

button.addEventListener("click", async () => {
  const result = navigator.geolocation.getCurrentPosition(
    gotLocation,
    failLocation
  );
});
