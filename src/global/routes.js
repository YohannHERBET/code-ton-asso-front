import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';
import Exemple from '../pages/Exemple/Exemple';
import Connection from '../pages/Connection/Connection';
import List from '../templates/List/List';
import cardTypeEnum from './enums/cardTypeEnum';
import NewProject from '../pages/NewProject/NewProject';
import Project from '../templates/Project/Project';
import UserDetails from '../templates/UserDetails/UserDetails';

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
        apiUrl={`${process.env.REACT_APP_API_URL}associations`}
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
    title: 'projets',
  },
  {
    path: 'developpeurs',
    element: (
      <List
        apiUrl={`${process.env.REACT_APP_API_URL}developers`}
        title="Liste des développeurs"
        type={cardTypeEnum.developer}
      />
    ),
    title: 'développeurs',
  },
  {
    path: 'creer-un-projet',
    element: <NewProject />,
    title: 'créer un projet',
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
    path: 'projets/:slug',
    element: <Project type={cardTypeEnum.project} />,
    title: 'Projet',
  },
  {
    path: 'associations/:slug',
    element: (
      <UserDetails userType="association" cardType={cardTypeEnum.project} />
    ),
    title: 'association',
  },
  {
    path: 'developpeurs/:slug',
    element: (
      <UserDetails userType="developer" cardType={cardTypeEnum.project} />
    ),
    title: 'développeur',
  },
];

export default routes;
