import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Aegis = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Outlet />
        <Right>
        </Right>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: 25vw 55vw 20vw;

  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
const Right = styled.div`

  width: 100%;
  height: 100%;

  background-color: red;
`;

export default Aegis;
