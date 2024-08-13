export async function fetchWeather(city) {
    const apiKey = 'your_openweather_api_key';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    if (response.ok) {
        return await response.json();
    } else {
        alert('Error fetching weather data');
    }
}
