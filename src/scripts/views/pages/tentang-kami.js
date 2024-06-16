import '../../../styles/tentang-kami.css';

const TentangKami = {
  async render() {
    return `
        <div class="about-us">
            <header class="about-us__header">
                <div class="header-headline">
                    <h1>Tentang <span class="green-text">Kami</span></h1>
                    <p>Dengan ECO2Watch, kami berdedikasi untuk menyediakan perangkat dan pengetahuan yang Anda butuhkan untuk mengukur dan mengurangi jejak karbon Anda. Misi kami adalah memberdayakan individu dan organisasi untuk membuat ambisi yang ramah lingkungan. Dengan kalkulator kami yang mudah digunakan, wawasan mendalam, dan tips praktis, Anda dapat mengambil langkah nyata menuju planet yang lebih hijau.</p>
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
                    <p>Tim kami berminat</p>
                    <p>Tim pengembang kami adalah penanggung jawab atas berjalannya ECO2Watch. Dengan komitmen bersama untuk keberlanjutan dan inovasi, kami bekerja untuk menciptakan dan memperbaiki alat yang membantu mengukur dan mengurangi jejak karbon anda. Kenali orang-orang hebat yang membuat semua ini menjadi mungkin:</p>
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
  async afterRender(){}
};

export default TentangKami;
