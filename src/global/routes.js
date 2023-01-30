import Association from '../pages/Association/Association';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';

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
];

export default routes;
