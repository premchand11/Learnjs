const button = document.getElementById("stopTimer");

function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
  console.log(currentTime);
  console.log(time);
}
let inetrval = setInterval(showTime, 1000);

button.addEventListener("click", () => {
  clearInterval(inetrval);
});
