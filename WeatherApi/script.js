document.querySelector('button').addEventListener('click', () => {
    const place = document.getElementById('location').value;
    const weatherInfo = document.getElementById('weatherInfo');

    if (place === "") {
        weatherInfo.innerHTML = "Please enter a city name.";
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=a6d0337e066b46eeb1c75136252503&q=${place}&aqi=yes`)
        .then(response => response.json()) 
        .then(data => {
            weatherInfo.innerHTML = `
            <div class="weather-display">
                🌡 <span class="temperature">${data.current.temp_c}°C</span> <br>
                <span class="condition-icon">☁</span> <span class="condition-text">${data.current.condition.text}</span>
            </div>
        `;
    })
        .catch(error => {
            weatherInfo.innerHTML = "Check city name or API key.";
            console.error("Error:", error);
        });
        
});
