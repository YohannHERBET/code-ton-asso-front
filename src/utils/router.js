import { Route, Routes } from 'react-router-dom';
import routes from '../global/routes';

const Router = () => {
  const pageRoutes = routes.map(({ path, title, element }) => (
    <Route key={title} path={path ? `/${path}` : '*'} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
