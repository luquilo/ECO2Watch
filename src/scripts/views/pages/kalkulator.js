// import {hitungTotalEmisi} from '../../utils/helper.js' 
import '../../../styles/kalkulator.css'

const Kalkulator = {
  async render() {
    return `
        <div class="calculator">
            <header class="calculator__header">
                <div class="kalkulator-headline">
                    <h1>Calculate <span class="green-text">Your Carbon</span></h1>
                    <p>Explore our selection of articles to inspire and inform you about carbon emissions, sustainability, and green technology. Find practical advice and the latest insights to help you live a more eco-friendly lifestyle!</p>
                </div>
                <div class="kalkulator-header-img">
                    <img src="../images/leaf-left.png" alt="Leaf Left">
                    <img src="../images/leaf-right.png" alt="Leaf Right">
                </div>
                <hr class="green-line">
                <div class="calculator-container">


                    <input type="number" id="valuePenerangan">
                    <input type="number" id="valueAC">
                    <button id="clickk">haloooo</button>

                    
                </div>
            </header>
            <section class="about-us__profile">
                <div class="profile-desc">
                </div>
            </section>
        </div>
        `;
  },
  async afterRender() {
    const buttton = document.getElementById('clickk')

    buttton.addEventListener('click', () => {
        const peneranganElement = document.getElementById('valuePenerangan')
        const ACElement = document.getElementById('valueAC')
    
        const valuePenerangan = peneranganElement.value
        const valueAC = ACElement.value

        console.log(valuePenerangan);
    })

  },
  
};



export default Kalkulator;
