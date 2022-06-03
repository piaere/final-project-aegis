import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;

  background: rgb(238, 174, 202);
  background: linear-gradient(
    355deg,
    rgba(238, 174, 202, 0.528470763305322) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export default App;
