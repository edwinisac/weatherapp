document.getElementById('getWeather').addEventListener('click', function () {
  const city = document.getElementById('city').value;
  const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const { main, weather, name } = data;
      const result = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
      `;
      document.getElementById('weatherResult').innerHTML = result;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
});
