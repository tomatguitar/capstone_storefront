import { createContext, useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListenter
} from '../utils/firebase/firebase';

export const UserContext = createContext({
  currentUser: false,
  setCurrentUser: () => {}
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = useCallback({ currentUser, setCurrentUser });

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListenter((user) => {
      if (user) {
        createUserDocumentFromAuth();
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};
