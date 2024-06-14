import Beranda from '../views/pages/beranda';
import Kalkulator from '../views/pages/kalkulator';
import Artikel from '../views/pages/artikel';
import Panduan from '../views/pages/panduan';
import TentangKami from '../views/pages/tentang-kami';

const route = {
  '/': Beranda, // Default page
  '/beranda': Beranda,
  '/kalkulator': Kalkulator,
  '/artikel': Artikel,
  '/panduan': Panduan,
  '/tentang-kami': TentangKami,
};

export default route;
