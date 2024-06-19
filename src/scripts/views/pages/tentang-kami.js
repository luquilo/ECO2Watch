import '../../../styles/tentang-kami.css';

const TentangKami = {
  async render() {
    return `
        <div class="about-us">
            <header class="about-us__header">
                <div class="header-headline">
                    <h1>Tentang <span class="green-text">Kami</span></h1>
                    <p>ECO2Watch berdedikasi untuk menyediakan alat dan pengetahuan yang dibutuhkan untuk mengukur dan mengurangi jejak karbon Misi kami adalah memberdayakan individu untuk membuat keputusan yang sadar lingkungan. Dengan kalkulator yang mudah digunakan, wawasan mendalam, dan tips praktis, kita dapat mengambil langkah berarti menuju planet yang lebih hijau.</p>
                </div>
                <div class="header-img">
                    <img src="../images/leaf-left.png" alt="Leaf Left">
                    <img src="../images/leaf-right.png" alt="Leaf Right">
                </div>
                <hr class="green-line">
            </header>
            <div class="about-us__profile">
                <div class="profile-desc">
                    <h1>Mengenal <div class="green-text">Tim Kami</div></h1>
                    <p>Anggota di balik ECO2Watch.</p>
                </div>
                <div class="profile-img">
                    <div class="member">
                        <img src="../images/luqman.png" alt="Muhammad Luqmanul Hakim">
                        <h3>Muhammad Luqmanul Hakim</h3>
                        <p>Back-End</p>
                    </div>
                    <div class="member">
                        <img src="../images/bintang.png" alt="Bintang Jagad Syah Sana">
                        <h3>Bintang Jagad Syah Sana</h3>
                        <p>Front-End</p>
                    </div>
                    <div class="member">
                        <img src="../images/meysha.png" alt="Meysha Sabrina Az-Zahra">
                        <h3>Meysha Sabrina Az-Zahra</h3>
                        <p>Front-End</p>
                    </div>
                </div>
            </div>
        </div>          
    `;
  },
  async afterRender(){}
};

export default TentangKami;
