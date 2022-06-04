import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Article from "./components/Article";
import Aegis from "./components/Aegis";
import Error from "./components/Error";
import Journal from "./components/Journal";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Publish from "./components/Publish";

function App() {
  return (
    <Main>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="aegis" element={<Aegis />}>
            <Route path="article" element={<Article />} />
            <Route path="journal" element={<Journal />} />
            <Route path="profile" element={<Profile />} />
            <Route path="publish" element={<Publish />} />
            <Route path="error" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
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
`;

export default App;
