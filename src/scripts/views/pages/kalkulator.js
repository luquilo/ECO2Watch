import {
  hitungTotalEmisi,
  totalEmisi,
} from '../../utils/helper';
import '../../../styles/kalkulator.css';

const Kalkulator = {
  async render() {
    return `
        <div>
            <header class="calculator__header">
                <div class="kalkulator-headline">
                    <h1>Hitung <span class="green-text">Jejak Karbonmu!</span></h1>
                    <p>Gunakan kalkulator kami untuk mengetahui seberapa besar jejak karbonmu. Dapatkan tips praktis untuk mengurangi emisi dan mulailah menjalani gaya hidup yang lebih ramah lingkungan bersama ECO2Watch!</p>
                </div>
                <div class="kalkulator-header-img">
                    <img src="../images/leaf-left.png" alt="Leaf Left">
                    <img src="../images/leaf-right.png" alt="Leaf Right">
                </div>
                <hr class="green-line">
            </header>


                
                <form class="calculator__container">
                    <div class="calculator">


                        <div class="calculator__input">

                            <div class="label-lampu">
                                <img src="../images/lampu.svg" alt="lampu penerangan" width="100">
                                <label for="lampu__jumlah">Lampu Penerangan</label>
                            </div>

                            <input required type="number" name="lampu__jumlah" id="lampu-jumlah" class="input__lampu" placeholder="Jumlah lampu" min="0">


                            <label for="lampu__penggunaan">Rata Rata Lama Penggunaan <br>(jam / hari)</label>
                            <input required type="number" name="lampu__penggunaan" id="lampu-penggunaan" class="input__lampu" placeholder="12 jam" max="24" min="0" step="0.1">
                        </div>


                        <div class="calculator__input">

                            <div class="label-ac">
                                <img src="../images/ac.svg" alt="pendingin ruangan" width="100">
                                <label for="ac__jumlah">Pendingin Ruangan</label>
                            </div>

                            <input required type="number" name="ac__jumlah" id="ac-jumlah" min="0" class="input__ac" placeholder="Jumlah AC">


                            <label for="ac__penggunaan">Rata Rata Lama Penggunaan <br>(jam / hari)</label>
                            <input required type="number" name="ac__penggunaan" max="24" min="0" id="ac-penggunaan" class="input__ac" placeholder="6 jam" step="0.1">
                        </div>


                        <div class="calculator__input">
                            <div class="label-kulkas">
                                <img src="../images/kulkas.svg" alt="kulkas" width="100">
                                <label for="kulkas__jumlah">Kulkas</label>
                            </div>
                            <input required type="number" name="kulkas__jumlah" min="0" id="kulkas-jumlah" class="input__kulkas" placeholder="Jumlah Kulkas">


                            <label for="kulkas__penggunaan">Rata Rata Lama Penggunaan <br>(jam / hari)</label>
                            <input required type="number" name="kulkas__penggunaan" id="kulkas-penggunaan" class="input__kulkas" placeholder="24 jam" step="0.1" max="24" min="0">
                        </div>


                        <div class="calculator__input">
                            <div class="label-kendaraan">
                                <img src="../images/vehicle.svg" alt="Kendaraan Bermotor" width="90">
                                <p>Kendaraan</p>
                                <label for="kendaraan__penggunaan">Rata Rata Penggunaan Bahan Bakar <br>(Liter / hari)</label>
                            </div>


                            <input required type="number" name="kendaraan__penggunaan" id="kendaraan-penggunaan" class="input__kendaraan" placeholder="2 Liter" step="0.1" min="0">
                        </div>


                        <div class="calculator__input">
                            <div class="label-makanan">
                                <img src="../images/makanan-dan-minuman.svg" alt="makanan & minuman" width="100">
                            </div>

                            <label for="daging__jumlah">Daging (dalam 1 pekan - kg)</label>
                            <input required type="number" name="daging__jumlah" id="daging-jumlah" class="input__kulkas" placeholder="1 kg" step="0.1" min="0">


                            <label for="susu__jumlah">Susu (dalam 1 pekan - L)</label>
                            <input required type="number" name="susu__jumlah" id="susu-jumlah" class="input__makanan" placeholder="3 liter" step="0.1" min="0">

                            <label for="sayuran__jumlah">Buah & Sayuran (dalam 1 pekan)</label>
                            <input required type="number" name="sayuran__jumlah" id="sayuran-jumlah" class="input__makanan" placeholder="6 kg" step="0.1" min="0">


                        </div>

                        <button href="#total-emisi" type="submit" id="hitung" class="hitung">Hitung emisi karbon mu</button>

                        
                        
                    </div>                    
                </form>

                <div class="calculator-output">
                    <p>Total Emisi Karbonmu Sebesar</p>            
                    <div>
                        <div id="total-emisi">
                        </div>         
                        <span class="satuan-total-emisi">kg CO₂e / Tahun </span>
                    </div>
                </div>

        </div>
        `;
  },
  async afterRender() {
    const totalEmisiElement = document.getElementById('total-emisi');
    totalEmisiElement.textContent = totalEmisi;

    const hitungButton = document.getElementById('hitung');

    hitungButton.addEventListener('click', (event) => {
      event.preventDefault();

      const jumlahLampu = document.getElementById('lampu-jumlah').value;
      const penggunaanLampu = document.getElementById('lampu-penggunaan').value;

      const jumlahAC = document.getElementById('ac-jumlah').value;
      const penggunaanAC = document.getElementById('ac-penggunaan').value;

      const jumlahKulkas = document.getElementById('kulkas-jumlah').value;
      const penggunaanKulkas = document.getElementById('kulkas-penggunaan').value;

      const jumlahLiter = document.getElementById('kendaraan-penggunaan').value;

      const dagingJumlah = document.getElementById('daging-jumlah').value;
      const susuJumlah = document.getElementById('susu-jumlah').value;
      const sayuranJumlah = document.getElementById('sayuran-jumlah').value;

      if (
        !jumlahLampu
        || !penggunaanLampu
        || !jumlahAC
        || !penggunaanAC
        || !jumlahKulkas
        || !penggunaanKulkas
        || !jumlahLiter
        || !dagingJumlah
        || !susuJumlah
        || !sayuranJumlah) {
        alert('Mohon lengkapi semua input. Isilah dengan nilai 0 jika tidak ada yang relevan.');
        return;
      }

      hitungTotalEmisi({
        jumlahLampu,
        penggunaanLampu,
        jumlahAC,
        penggunaanAC,
        jumlahKulkas,
        penggunaanKulkas,
        jumlahLiter,
        dagingJumlah,
        susuJumlah,
        sayuranJumlah,
      });

      totalEmisiElement.textContent = totalEmisi;
      const totalEmisiContainer = document.getElementById('total-emisi');
      totalEmisiContainer.scrollIntoView({ behavior: 'smooth' });
    });
  },
};

export default Kalkulator;
