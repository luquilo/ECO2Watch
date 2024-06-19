import '../../../styles/artikel.css';

const Artikel = {
  async render() {
    return `
        <div class="article">
            <header class="article__header">
                <div class="artikel-headline">
                    <h1>Jelajahi Artikel<div>Tentang <span class="green-text">Emisi Karbon</span></div></h1>
                    <p>Yuk, jelajahi artikel-artikel kami yang penuh inspirasi dan informasi tentang emisi karbon, keberlanjutan, dan teknologi hijau. Temukan tips praktis dan wawasan terbaru untuk membantu kamu hidup lebih ramah lingkungan!</p>
                </div>
                <div class="artikel-header-img">
                    <img src="../images/leaf-left.png" alt="Leaf Left">
                    <img src="../images/leaf-right.png" alt="Leaf Right">
                </div>
                <hr class="green-line">
            </header>

                <div class="articles-container">
                    <p>Loading articles...</p>
                </div>



        </div>      
        `;
  },
  async afterRender() {
    try {
      const response = await fetch('https://ecowatch.up.railway.app/articles');
      const articles = await response.json();
      const articlesContainer = document.querySelector('.articles-container');
      articlesContainer.innerHTML = articles.map((artikel) => `
        <a href="${artikel.link}" target="_blank" class="article-item">      
            <div>
                <img src="${artikel.image}" alt="${artikel.title}">
                <h2>${artikel.title}</h2>
            </div>
        </a>
        `).join('');
    } catch (error) {
      console.error('Failed to fetch articles:', error);
      const articlesContainer = document.querySelector('.articles-container');
      articlesContainer.innerHTML = '<p>Failed to load articles. Please try again later.</p>';
    }
  },
};

export default Artikel;
