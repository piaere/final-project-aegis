import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./Context";
import Header from "./components/Header";
import Home from "./components/Home";
import styled from "styled-components";
import Aegis from "./components/Aegis";

function App() {
  const { accounts, setAccounts, isLoggedIn, setIsLoggedIn } =
    useContext(Context);

  useEffect(() => {
    const checkAccount = async () => {
      let res = await window.ethereum.request({ method: "eth_accounts" });
      // console.log(res);
      setAccounts(res);
      // console.log(accounts);
    };
    checkAccount();
  }, [setAccounts]);

  console.log("accounts", accounts);
  console.log("isLoggedIn", isLoggedIn);

  const connect = async () => {
    if (accounts.length === 0) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccounts(res);
        setIsLoggedIn(true);
        isLoggedIn && console.log("Logged in with : ", accounts[0]);
      } catch (error) {}
    } else {
      // setAccounts([]);
      alert("already connected!");
    }
  };

  useEffect(() => {
    accounts.length > 0 ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [accounts, setIsLoggedIn]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Main>
      <Header connect={connect} />
      <Body>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home connect={connect} />
            </Route>
            <Route path="/aegis">
              <Aegis />
            </Route>
          </Switch>
        </Router>
      </Body>
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
