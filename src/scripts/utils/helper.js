let totalEmisi = 0;






// Fungsi untuk menghitung total emisi dari berbagai sumber
const hitungTotalEmisi = (
  konsumsiLampu,
  konsumsiKulkas,
  konsumsiBahanBakar,
) => {
  const emisiLampu = formulaLampu(konsumsiLampu);
  const emisiKulkas = formulaKulkas(konsumsiKulkas);
  const emisiBahanBakar = formulaKendaraan(konsumsiBahanBakar);

  totalEmisi = emisiLampu + emisiKulkas + emisiBahanBakar;
  return totalEmisi;
};

// Fungsi untuk menghitung emisi dari konsumsi lampu
export const formulaLampu = (x, y) => {

  const jumlahLampu = 10;
  const lamaPenggunaan = 11;

  const konsumsiLampuSatuHari = jumlahLampu * 15 * lamaPenggunaan / 1000 // kWh

  const konsumsiLampuSatuTahun = konsumsiLampuSatuHari * 365 / 1000
  console.log(konsumsiLampuSatuTahun) 




  const faktorEmisiLampu = 0.233; // kg CO₂e per kWh
//   const emisiLampu = konsumsiLampu * faktorEmisiLampu;
};

// Fungsi untuk menghitung emisi dari konsumsi kulkas
const formulaKulkas = (data) => {
  const faktorEmisiKulkas = 0.233; // kg CO₂e per kWh
  const emisiKulkas = konsumsiKulkas * faktorEmisiKulkas;
  console.log(emisiKulkas);
};

const formulaAC = () => {
    
}

const formulaKendaraan = () => {

}

export default {
    hitungTotalEmisi
}