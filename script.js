document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '64d5e97b75944e6ebf75409064a6a9ca'; // Replace with your NewsAPI key
    const newsContainer = document.getElementById('news-container');

    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            newsContainer.innerHTML = articles.map(article => `
                <article>
                    <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                    <p>${article.description}</p>
                </article>
            `).join('');
        })
        .catch(error => console.error('Error fetching news:', error));
});
