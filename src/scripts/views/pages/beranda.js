import '../../../styles/beranda.css';

const Beranda = {
  async render() {
    return `
        <div class="home">
            <div class="home__hero">
                <div class="hero-headline">
                    <h1>Dengan <div class="green-text">ECO2Watch</div>Kita Bersama <div>Selamatkan Dunia</div></h1>
                    <p>Hitung emisi karbonmu untuk bumi yang lebih sehat</p>
                <a class="hero-headline-link" href="#/kalkulator">Hitung Karbon</a>
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
                    <h1>Memberdayakan Perubahan, Mengurangi Emisi Karbon Satu Per Satu.</h1>
                </div>
                <div class="article-container">
                    
                </div>
            </div>
            <div class="leaf-top">
                <img src="../images/leaf-top.png" alt="Leaf Left">
            </div>
            <div class="home__faq">
                <div class="faq-about">
                    <h1>Pelajari Lebih Lanjut<div class="green-text">Tentang ECO2Watch</div></h1>
                    <p>ECO2Watch hadir sebagai solusi untuk memudahkan pengguna dalam menghitung dan mengurangi jejak karbon mereka. Dengan fokus pada kemudahan penggunaan dan sumber daya yang informatif, kami membantu individu dan organisasi untuk mengambil langkah-langkah menuju gaya hidup yang lebih berkelanjutan dan ramah lingkungan.</p>
                </div>
            </div>
        </div>
    `;
  },
  async afterRender(){}
};

export default Beranda;
