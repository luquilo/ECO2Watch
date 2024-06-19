// eslint-disable-next-line import/no-mutable-exports
export let totalEmisi = 0;

// Fungsi untuk menghitung emisi dari penggunaan lampu
const totalEmisiLampu = ({ jumlahLampu, penggunaanLampu }) => {
  const faktorEmisiLampu = 0.233; // kg CO₂e per kWh

  const wattageLampu = 15;
  const konsumsiLampuSatuHari = (jumlahLampu * penggunaanLampu * wattageLampu) / 1000; // kWh
  const konsumsiLampuSatuTahun = konsumsiLampuSatuHari * 365;

  const emisiLampu = (faktorEmisiLampu * konsumsiLampuSatuTahun);
  return emisiLampu;
};

const totalEmisiAC = ({ jumlahAC, penggunaanAC }) => {
  const faktorEmisiAC = 0.233; // kg CO₂e per kWh

  const wattageAC = 735;
  const konsumsiACSatuHari = (jumlahAC * penggunaanAC * wattageAC) / 1000; // kWh
  const konsumsiACSatuTahun = konsumsiACSatuHari * 365;

  const emisiAC = (faktorEmisiAC * konsumsiACSatuTahun); // kg CO₂e
  return emisiAC;
};

const totalEmisiKulkas = ({ jumlahKulkas, penggunaanKulkas }) => {
  const faktorEmisiKulkas = 0.233; // kg CO₂e per kWh

  const wattageKulkas = 200;
  const konsumsiKulkasSatuHari = (jumlahKulkas * penggunaanKulkas * wattageKulkas) / 1000; // kWh
  const konsumsiKulkasSatuTahun = konsumsiKulkasSatuHari * 365;

  const emisiKulkas = (faktorEmisiKulkas * konsumsiKulkasSatuTahun);
  return emisiKulkas;
};

const totalEmisiKendaraan = ({ jumlahLiter }) => {
  const faktorEmisiKendaraan = 2.31; // kg CO₂e per liter

  const emisiKendaraan = (faktorEmisiKendaraan * jumlahLiter);
  return emisiKendaraan;
};

export const totalEmisiMakananDanMinuman = ({ dagingJumlah, susuJumlah, sayuranJumlah }) => {
  const faktorEmisiDaging = 25; // kg CO₂e per kg
  const faktorEmisiSusu = 10; // kg CO₂e per kg
  const faktorEmisiSayuran = 2.5; // kg CO₂e per kg

  const emisiDaging = dagingJumlah * faktorEmisiDaging * 52;// kg CO₂e, 52 pekan dalam satu tahun
  const emisiSusu = susuJumlah * faktorEmisiSusu * 52;
  const emisiSayuran = sayuranJumlah * faktorEmisiSayuran * 52;

  const emisiMakanan = emisiDaging + emisiSusu + emisiSayuran;
  return emisiMakanan;
};

export const hitungTotalEmisi = ({
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
}) => {
  const emisiLampu = totalEmisiLampu({ jumlahLampu, penggunaanLampu });
  const emisiAC = totalEmisiAC({ jumlahAC, penggunaanAC });
  const emisiKulkas = totalEmisiKulkas({ jumlahKulkas, penggunaanKulkas });
  const emisiKendaraan = totalEmisiKendaraan({ jumlahLiter });
  const emisiMakanan = totalEmisiMakananDanMinuman({ dagingJumlah, susuJumlah, sayuranJumlah });

  totalEmisi = (emisiLampu + emisiAC + emisiKulkas + emisiKendaraan + emisiMakanan).toFixed(2);
};
