import { createContext, useState } from "react";

export const Context = createContext(null);

export const Provider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Context.Provider
      value={{
        accounts,
        setAccounts,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </Context.Provider>
  );
};
