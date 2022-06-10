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
import { stringify } from "uuid";

function App() {
  const {
    accounts,
    setAccounts,
    shortenAddy,
    setShortenAddy,
    isLoggedIn,
    setIsLoggedIn,
  } = useContext(Context);

  // Connect function (on buttons click)
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

  // Set log in state
  useEffect(() => {
    if (accounts.length > 0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [accounts, setIsLoggedIn]);

  // Set account on load if already connected & listen to accounts changes
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

  useEffect(() => {
    console.log("accounts", accounts);
    if (accounts > 0) {
      let short = accounts[0].slice(0, 5) + "..." + accounts[0].slice(-4);
      setShortenAddy(short);
    }
  }, [isLoggedIn]);

  console.log("shortenAddy", shortenAddy);
  console.log("accounts", accounts[0]);

  // Set isLoggedIn state
  useEffect(() => {
    console.log("setting loggedIn");
    accounts.length > 0 ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [accounts, setIsLoggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

  // console.log("accounts", accounts);
  // console.log("isLoggedIn", isLoggedIn);
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
