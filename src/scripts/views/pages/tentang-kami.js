import '../../../styles/tentang-kami.css';

const TentangKami = {
  async render() {
    return `
        <div class="about-us">
            <header class="about-us__header">
                <div class="header-headline">
                    <h1>Tentang <span class="green-text">Kami</span></h1>
                    <p>At Carbon Emissions Calculator, we're dedicated to providing you with the tools and knowledge you need to measure and reduce your carbon footprint. Our mission is to empower individuals and organizations to make environmentally conscious decisions. With our user-friendly calculator, in-depth insights, and practical tips, you can take meaningful steps towards a greener planet.</p>
                </div>
                <div class="header-img">
                    <img src="../images/leaf-left.png" alt="Leaf Left">
                    <img src="../images/leaf-right.png" alt="Leaf Right">
                </div>
                <hr class="green-line">
            </header>
            <div class="about-us__profile">
                <div class="profile-desc">
                    <h1>Meet <div class="green-text">Our Team</div></h1>
                    <p>Our team of talented developers is the backbone of Carbon Emissions Calculator. With a shared commitment to sustainability and innovation, they work tirelessly to create and improve the tools that help you measure and reduce your carbon footprint. Get to know the brilliant minds making it all possible:</p>
                </div>
                <div class="profile-img">
                    <div class="member">
                        <img src="../images/profile.png" alt="Muhammad Luqmanul Hakim">
                        <h3>Muhammad Luqmanul Hakim</h3>
                        <p>Back-End</p>
                    </div>
                    <div class="member">
                        <img src="../images/profile.png" alt="Bintang Jagad Syah Sana">
                        <h3>Bintang Jagad Syah Sana</h3>
                        <p>Front-End</p>
                    </div>
                    <div class="member">
                        <img src="../images/profile.png" alt="Meysha Sabrina Az-Zahra">
                        <h3>Meysha Sabrina Az-Zahra</h3>
                        <p>Front-End</p>
                    </div>
                </div>
            </div>
        </div>          
    `;
  },
};

export default TentangKami;
