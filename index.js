function onSubmit() {
  const input = document.querySelector("#cityInput");
  const cityName = input.value;

  if (!cityName) {
    document.querySelector("#result").innerText = "Please enter a city name!";
    return;
  }

  axios
    .get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`)
    .then((res) => {
      const feelsLike = res.data.current.feelslike_c;
      document.querySelector("#result").innerText = `Feels like: ${feelsLike}°C`;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.querySelector("#result").innerText = "City not found ❌";
    });
}
