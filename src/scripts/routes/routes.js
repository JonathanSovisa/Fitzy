import HomePage from '../pages/home/home-page';
import hasilGenerate from '../pages/hasilgenerate/hasilgenerate';

const routes = {
  '/': new HomePage(),
  '/hasil': new hasilGenerate(),
};

export default routes;
