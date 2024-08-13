export async function fetchNews() {
    const apiKey = 'your_newsapi_key';
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    if (response.ok) {
        return await response.json();
    } else {
        alert('Error fetching news data');
    }
}
