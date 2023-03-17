import { createContext, useState, useMemo, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const removeUser = () => {
    Cookies.remove('token');
    setAuthUser(null);
  };

  const handleSetAuthUser = () => {
    const token = Cookies.get('token');
    const { email, userId, developerId, associationId, slug } =
      jwtDecode(token);
    setAuthUser({ email, id: userId, associationId, developerId, slug });
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      handleSetAuthUser();
    }
  }, []);

  const value = useMemo(
    () => ({ authUser, handleSetAuthUser, removeUser }),
    [authUser]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export default UserContextProvider;
