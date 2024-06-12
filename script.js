function getWeather() {
  const locationInput = document.getElementById('locationInput').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid= OpenWeatherMap API key. Y&units=metric`)
  .then(response => response.json())
  .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
  })
  .catch(error => {
      console.error('Error fetching weather data:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Failed to fetch weather data. Please try again later.</p>`;
  });
}
