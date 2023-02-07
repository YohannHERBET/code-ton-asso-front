import Association from '../pages/Association/Association';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';
import Exemple from '../pages/Exemple/Exemple';

const routes = [
  {
    path: '/',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'association',
    element: <Association />,
    title: 'association',
  },
  {
    element: <Error404 />,
    title: '404',
  },
  {
    path: 'exemple',
    element: <Exemple />,
    title: 'exemple',
  },
];

export default routes;
