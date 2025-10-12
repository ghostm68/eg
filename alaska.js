document.addEventListener('DOMContentLoaded', function() {
    // Function to get and display the current time in Alaska
    function displayAlaskaTime() {
        const alaskaTimeElement = document.getElementById('alaska-time');
        if (alaskaTimeElement) {
            const now = new Date();
            // Alaska is currently in AKDT (UTC-8), during Daylight Saving Time.
            // Standard time (AKST) is UTC-9.
            // We will use toLocaleString with the appropriate time zone.
            const alaskaTimeString = now.toLocaleString("en-US", {
                timeZone: "America/Anchorage",
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            alaskaTimeElement.textContent = alaskaTimeString;
        }
    }

    // Function to get and display the current weather in Anchorage, Alaska
    function displayAlaskaWeather() {
        const alaskaTempElement = document.getElementById('alaska-temp');
        const alaskaWeatherElement = document.getElementById('alaska-weather');

        if (alaskaTempElement && alaskaWeatherElement) {
            // Using Open-Meteo API for current weather in Anchorage
            const latitude = 61.2181;
            const longitude = -149.9003;
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const temperature = data.current_weather.temperature;
                    const weatherCode = data.current_weather.weathercode;

                    alaskaTempElement.textContent = `${temperature}°C`;
                    alaskaWeatherElement.textContent = getWeatherDescription(weatherCode);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    alaskaTempElement.textContent = 'N/A';
                    alaskaWeatherElement.textContent = 'Could not retrieve weather.';
                });
        }
    }

    // Function to get a human-readable weather description from the WMO code
    function getWeatherDescription(code) {
        // Weather codes from Open-Meteo documentation
        const weatherCodes = {
            0: 'Clear sky',
            1: 'Mainly clear',
            2: 'Partly cloudy',
            3: 'Overcast',
            45: 'Fog',
            48: 'Depositing rime fog',
            51: 'Light drizzle',
            53: 'Moderate drizzle',
            55: 'Dense drizzle',
            56: 'Light freezing drizzle',
            57: 'Dense freezing drizzle',
            61: 'Slight rain',
            63: 'Moderate rain',
            65: 'Heavy rain',
            66: 'Light freezing rain',
            67: 'Heavy freezing rain',
            71: 'Slight snow fall',
            73: 'Moderate snow fall',
            75: 'Heavy snow fall',
            77: 'Snow grains',
            80: 'Slight rain showers',
            81: 'Moderate rain showers',
            82: 'Violent rain showers',
            85: 'Slight snow showers',
            86: 'Heavy snow showers',
            95: 'Thunderstorm',
            96: 'Thunderstorm with slight hail',
            99: 'Thunderstorm with heavy hail',
        };
        return weatherCodes[code] || 'Unknown';
    }

    // Initial display
    displayAlaskaTime();
    displayAlaskaWeather();

    // Update the time every second
    setInterval(displayAlaskaTime, 1000);

    // Update the weather every 15 minutes (900000 milliseconds)
    setInterval(displayAlaskaWeather, 900000);
});
