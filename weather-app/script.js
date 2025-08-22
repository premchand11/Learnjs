const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("city-temp");
const time = document.getElementById("city-time");

async function getData(cityName) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0772a07ec13f4143a1875704252208&q=${cityName}&aqi=yes`
  );
  return await response.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);
  cityName.innerText = result.location.name;
  temperature.innerText = result.current.temp_c + "°C";
  time.innerText = result.location.localtime;
});

//http://api.weatherapi.com/v1/current.json?key=0772a07ec13f4143a1875704252208&q=London&aqi=yes
