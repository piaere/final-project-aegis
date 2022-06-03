import styled from "styled-components";
import { useState, useEffect } from "react";
import ConnectButton from "./ConnectButton";


const Header = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Left>
        <Aegis>aegis</Aegis>
        {showText ? <Logo></Logo> : <span></span>}
      </Left>
      {/* <Center>search</Center> */}
      <Right>
        <ConnectButton string={"Connect wallet"}/>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: seashell; */
  margin-left: 2vw;
  width: 91vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2px;
`;

const Right = styled.span``;
const Center = styled.span``;

const Aegis = styled.span`
  font-family: "Amiri", serif;
  font-size: 3vw;
  font-weight: 300;
  color: #0000ff;
`;
const Logo = styled.span`
  margin-top: 1vh;
  max-width: 1.1vw;
  max-height: 3.5vh;
  background-color: #0000ff;
`;

export default Header;
