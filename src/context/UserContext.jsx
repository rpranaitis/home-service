import { createContext, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [localUser, setLocalUser, removeLocalUser] = useLocalStorage('user', null);
  const [user, setUser] = useState(localUser);

  const login = (user) => {
    setUser(user);
    setLocalUser(user);
  };

  const logout = () => {
    setUser(null);
    removeLocalUser();
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
