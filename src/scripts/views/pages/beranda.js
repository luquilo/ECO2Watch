import '../../../styles/beranda.css';

const Beranda = {
  async render() {
    return `
        <div class="home">
            <div class="home__hero">
                <div class="hero-headline">
                    <h1>With <div class="green-text">ECO2Watch</div> We Save <div>the World</div></h1>
                    <p>Count your carbon emision for healthy planet</p>
                    <button>Hitung Karbon</button>
                </div>
                <div class="hero-img">
                    <img src="../images/hero.png" alt="">
                </div>
            </div>
            <img class="leaf-left" src="../images/leaf-left.png" alt="Leaf Left">
            <div class="home__headline">
                <h1>What's <div class="green-text">Carbon Emission</div></h1>
                <p>Carbon emissions, mainly carbon dioxide (CO₂), are released into the atmosphere from human activities like burning fossil fuels, industrial processes, and agriculture. These emissions significantly contribute to global warming and climate change by trapping heat in the Earth's atmosphere. Understanding and managing your carbon footprint is crucial in the fight against climate change.</p>
            </div>
            <div class="leaf-right">
                <img src="../images/leaf-right.png" alt="Leaf Left">
            </div>
            <div class="home__article">
                <div class="article-headline">
                    <h1>Cool Article For You</h1>
                    <p>Tips, Insights, and Innovations for a Greener Future</p>
                </div>
                <div class="article-container">
                    
                </div>
            </div>
            <div class="leaf-top">
                <img src="../images/leaf-top.png" alt="Leaf Left">
            </div>
            <div class="home__faq">
                <div class="faq-about">
                    <h1>Get to<div class="green-text">Know Us</div></h1>
                    <p>At Carbon Emissions Calculator, we're dedicated to providing you with the tools and knowledge you need to measure and reduce your carbon footprint. Our mission is to empower individuals and organizations to make environmentally conscious decisions. With our user-friendly calculator, in-depth insights, and practical tips, you can take meaningful steps towards a greener planet.</p>
                </div>
                <div class="faq-main">
                    <h1>Frequently<div class="green-text">Asked Questions</div></h1>
                </div>
            </div>
        </div>
    `;
  },
};

export default Beranda;
