const Panduan = {
  async render() {
    return `
        <div class="guide">
            <header class="guide__header">
                <div class="header-headline">
                    <h1>How to Calculate <span class="green-text">Your Carbon</span></h1>
                    <p>Explore our selection of articles to inspire and inform you about carbon emissions, sustainability, and green technology. Find practical advice and the latest insights to help you live a more eco-friendly lifestyle!</p>
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
};

export default Panduan;
