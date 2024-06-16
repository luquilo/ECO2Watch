import '../../../styles/panduan.css'

const Panduan = {
  async render() {
    return `
        <div class="guide">
            <header class="guide__header">
                <div class="panduan-headline">
                    <h1>Bagaimana Cara <span class="green-text">Menghitung Emisi Karbonmu?</span></h1>
                    <p>Cari tahu bagaimana menggunakan kalkulator emisi karbon kami</p>
                </div>
                <div class="header-img">
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

export default Panduan;
