import Association from '../pages/Association/Association';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';
import Exemple from '../pages/Exemple/Exemple';
import Connection from '../pages/Connection/Connection';
import RegistrationChoice from '../pages/Registration/RegistrationChoice/RegistrationChoice';

const routes = [
  {
    path: '/',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'associations',
    element: <Association />,
    title: 'associations',
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
  {
    path: 'connexion',
    element: <Connection />,
    title: 'connexion',
  },
  {
    path: 'inscription',
    element: <RegistrationChoice />,
    title: 'inscription',
  },
];

export default routes;
