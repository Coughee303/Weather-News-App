import { fetchWeather } from './weather.js';
import { fetchNews } from './news.js';

document.getElementById('weather-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = document.getElementById('city-input').value;
    if (city) {
        const weatherData = await fetchWeather(city);
        displayWeather(weatherData);
    }
});

function displayWeather(data) {
    if (data) {
        document.getElementById('weather-display').innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        document.getElementById('weather-display').innerHTML = '<p>Weather data not available.</p>';
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const newsData = await fetchNews();
    displayNews(newsData);
});

function displayNews(data) {
    if (data && data.articles) {
        const newsHTML = data.articles.map(article => `
            <article>
                <h4>${article.title}</h4>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </article>
        `).join('');
        document.getElementById('news-display').innerHTML = newsHTML;
    } else {
        document.getElementById('news-display').innerHTML = '<p>News not available.</p>';
    }
}
