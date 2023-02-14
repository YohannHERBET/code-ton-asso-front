import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';
import Exemple from '../pages/Exemple/Exemple';
import Connection from '../pages/Connection/Connection';
import RegistrationChoice from '../pages/Registration/RegistrationChoice/RegistrationChoice';
import AssociationRegistration from '../pages/Registration/AssociationRegistration/AssociationRegistration';
import List from '../templates/List/List';
import cardTypeEnum from './enums/cardTypeEnum';

const routes = [
  {
    path: '/',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'associations',
    element: (
      <List
        apiUrl={`${process.env.REACT_APP_API_URL}associations/latest`}
        title="Liste des associations"
        type={cardTypeEnum.association}
      />
    ),
    title: 'associations',
  },
  {
    path: 'projets',
    element: (
      <List
        apiUrl={`${process.env.REACT_APP_API_URL}projects`}
        title="Liste des projets"
        type={cardTypeEnum.project}
      />
    ),
    title: 'projects',
  },
  {
    path: 'developpeurs',
    element: (
      <List
        apiUrl={`${process.env.REACT_APP_API_URL}developers/latest`}
        title="Liste des développeurs"
        type={cardTypeEnum.developer}
      />
    ),
    title: 'développeurs',
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
  {
    path: 'inscription/association',
    element: <AssociationRegistration />,
    title: 'inscription association',
  },
];

export default routes;
