import Beranda from '../views/pages/beranda';
import Kalkulator from '../views/pages/kalkulator';
import Artikel from '../views/pages/artikel';
import TentangKami from '../views/pages/tentang-kami';

const route = {
  '/': Beranda, // Default page
  '/beranda': Beranda,
  '/kalkulator': Kalkulator,
  '/artikel': Artikel,
  '/tentang-kami': TentangKami,
};

export default route;
