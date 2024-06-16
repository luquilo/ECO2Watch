import '../../../styles/beranda.css';

const Beranda = {
  async render() {
    return `
        <div class="home">
            <div class="home__hero">
                <div class="hero-headline">
                    <h1>Dengan <div class="green-text">ECO2Watch</div>Kita Bersama <div>Selamatkan Dunia</div></h1>
                    <p>Hitung emisi karbonmu untuk bumi yang lebih sehat</p>
                    <button>Hitung Karbon</button>
                </div>
                <div class="hero-img">
                    <img src="../images/hero.png" alt="">
                </div>
            </div>
            <img class="leaf-left" src="../images/leaf-left.png" alt="Leaf Left">
            <div class="home__headline">
                <h1>Apa Itu <div class="green-text">Emisi Karbon?</div></h1>
                <p>Emisi karbon, terutama karbon dioksida (CO₂), dilepaskan ke atmosfer dari aktivitas manusia seperti pembakaran bahan bakar fosil, proses industri, dan pertanian. Emisi ini secara signifikan berkontribusi terhadap pemanasan global dan perubahan iklim dengan menjebak panas di atmosfer Bumi. Memahami dan mengelola jejak karbon Anda sangat penting dalam perjuangan melawan perubahan iklim.</p>
            </div>
            <div class="leaf-right">
                <img src="../images/leaf-right.png" alt="Leaf Left">
            </div>
            <div class="home__article">
                <div class="article-headline">
                    <h1>Empowering Change, One Carbon Emission at a Time.</h1>
                </div>
                <div class="article-container">
                    
                </div>
            </div>
            <div class="leaf-top">
                <img src="../images/leaf-top.png" alt="Leaf Left">
            </div>
            <div class="home__faq">
                <div class="faq-about">
                    <h1>Learn more<div class="green-text">About Us</div></h1>
                    <p>At Carbon Emissions Calculator, we're dedicated to providing you with the tools and knowledge you need to measure and reduce your carbon footprint. Our mission is to empower individuals and organizations to make environmentally conscious decisions. With our user-friendly calculator, in-depth insights, and practical tips, you can take meaningful steps towards a greener planet.</p>
                </div>
                <div class="faq-main">
                    <h1>Frequently<div class="green-text">Asked Questions</div></h1>
                </div>
            </div>
        </div>
    `;
  },
  async afterRender(){}
};

export default Beranda;
