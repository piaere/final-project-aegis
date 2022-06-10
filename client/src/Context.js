import { createContext, useState } from "react";

export const Context = createContext(null);

export const Provider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [shortenAddy, setShortenAddy] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [ENSName, setENSName] = useState();
  const [ENSAvatar, setENSAvatar] = useState();

  return (
    <Context.Provider
      value={{
        accounts,
        setAccounts,
        shortenAddy,
        setShortenAddy,
        isLoggedIn,
        setIsLoggedIn,
        users,
        setUsers,
        articles,
        setArticles,
        ENSName,
        setENSName,
        ENSAvatar,
        setENSAvatar,
      }}
    >
      {children}
    </Context.Provider>
  );
};
