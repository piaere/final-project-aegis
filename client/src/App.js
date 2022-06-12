import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./Context";
import Header from "./components/Header";
import Home from "./components/Home";
import styled from "styled-components";
import Aegis from "./components/Aegis";
import ENS, { getEnsAddress } from "@ensdomains/ensjs";

//Initiating the connection to the Ethereum Name Service (ENS)
const ens = new ENS({
  provider: window.ethereum,
  ensAddress: getEnsAddress("1"),
});

function App() {
  const {
    accounts,
    setAccounts,
    setShortenAddy,
    isLoggedIn,
    setIsLoggedIn,
    setENSAvatar,
    setENSName,
    ENSName,
    ENSAvatar,
  } = useContext(Context);

  // Connect app to user's wallet account (on buttons click)
  const connect = async () => {
    if (accounts.length === 0) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccounts(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("already connected!");
    }
  };

  // Set login state
  useEffect(() => {
    if (accounts.length > 0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [accounts, setIsLoggedIn]);

  // Check if already connected + listen to any accounts changes
  useEffect(() => {
    // Check if account is connected
    const checkAccount = async () => {
      let res = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts !== res) {
        setAccounts(res);
      }
      // Check if user disconnect or change account
      window.ethereum.on("accountsChanged", function (res) {
        if (accounts !== res) {
          setAccounts(res);
        }
      });
    };
    checkAccount();
  }, []);

  // Check if user has a Ethereum Service Name registered
  useEffect(() => {
    const getENSName = async () => {
      let name = await ens.getName(accounts[0]);
      const ensName = name.name;
      // If yes, stating the name
      setENSName(ensName);
    };
    getENSName();
  }, [accounts]);

  // Check if user has a Ethereum Service Name avatar
  useEffect(() => {
    const getENSAvatar = async () => {
      let avatar = await ens.name(ENSName).getText("avatar");
      // If yes, stating the avatar
      setENSAvatar(avatar);
    };
    getENSAvatar();
  }, [ENSName, setENSAvatar]);

  useEffect(() => {
    console.log(accounts[0], ENSName, ENSAvatar);
    fetch("/api/connect-user", {
      method: "POST",
      body: JSON.stringify({
        publicKey: accounts[0],
        displayName: ENSName,
        avatarSrc: ENSAvatar,
      }),

      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const { data, status, message } = json;
        console.log(message);
      });
  }, [ENSAvatar, ENSName, accounts]);

  // If the user doesn't have an ENS name we will display an abbrevation on his PublicKey
  useEffect(() => {
    if (accounts > 0) {
      let short = accounts[0].slice(0, 5) + "..." + accounts[0].slice(-4);
      setShortenAddy(short);
    }
  }, [isLoggedIn]);

  return (
    <Main>
      <Router>
        <Header connect={connect} />
        <Switch>
          <Body>
            <Route exact path="/">
              <Home connect={connect} />
            </Route>
            {isLoggedIn && (
              <Route path="/aegis">
                {!isLoggedIn ? <Redirect to="/" /> : <Aegis />}
              </Route>
            )}
          </Body>
        </Switch>
      </Router>
    </Main>
  );
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  padding-bottom: 10vh;

  background: rgb(238, 174, 202);
  background: linear-gradient(
    352deg,
    rgba(238, 174, 202, 0.7805716036414566) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  overflow: scroll;
`;

const Body = styled.div`
  margin-top: 8vh;
`;

export default App;
