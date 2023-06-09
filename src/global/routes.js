import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../context/userContext';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';
import Exemple from '../pages/Exemple/Exemple';
import Connection from '../pages/Connection/Connection';
import RegistrationChoice from '../pages/Registration/RegistrationChoice/RegistrationChoice';
import AssociationRegistration from '../pages/Registration/AssociationRegistration/AssociationRegistration';
import DeveloperRegistration from '../pages/Registration/DeveloperRegistration/DeveloperRegistration';
import List from '../templates/List/List';
import cardTypeEnum from './enums/cardTypeEnum';
import NewProject from '../pages/NewProject/NewProject';
import Project from '../templates/Project/Project';
import UserDetails from '../templates/UserDetails/UserDetails';

const ProtectedRouteAsso = ({ Component }) => {
  const { authUser } = useContext(UserContext);
  if (authUser && authUser.associationId) {
    return <Component props={authUser} />;
  }
  return <Navigate to="/Error404" />;
};

ProtectedRouteAsso.propTypes = {
  Component: PropTypes.elementType,
};

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
    element: (
      <ProtectedRouteAsso
        Component={NewProject}
      />
    ),
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
    path: 'inscription',
    element: <RegistrationChoice />,
    title: 'inscription',
  },
  {
    path: 'inscription/association',
    element: <AssociationRegistration />,
    title: 'inscription association',
  },
  {
    path: 'inscription/developpeur',
    element: <DeveloperRegistration />,
    title: 'inscription développeur',
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
