import { createContext, useState } from "react";

export const Context = createContext(null);

export const Provider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [ENSName, setENSName] = useState();

  return (
    <Context.Provider
      value={{
        accounts,
        setAccounts,
        isLoggedIn,
        setIsLoggedIn,
        users,
        setUsers,
        articles,
        setArticles,
        ENSName,
        setENSName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
