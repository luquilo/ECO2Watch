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
            <section class="about-us__profile">
                <div class="profile-desc">
                </div>
            </section>
        </div>      
        `;
  },
  async afterRender(){}
};

export default Artikel;
