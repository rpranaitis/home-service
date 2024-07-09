import { createContext, useState, FC, ReactNode, useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { User } from '../types/common';

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [localUser, setLocalUser, removeLocalUser] = useLocalStorage<User | null>('user', null);
  const [user, setUser] = useState<User | null>(localUser);

  const login = (user: User) => {
    setUser(user);
    setLocalUser(user);
  };

  const logout = () => {
    setUser(null);
    removeLocalUser();
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  
  return context;
};

export { UserProvider, useUserContext };
