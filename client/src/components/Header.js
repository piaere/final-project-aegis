import styled from "styled-components";
import React, { useState, useEffect } from "react";

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
      <Center>search</Center>
      <Right>login</Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: seashell; */
  margin-left: 2vw;
  width: 96vw;
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
  font-size: 3em;
  font-weight: 300;
  color: #0000ff;
`;
const Logo = styled.span`
  margin-top: 5px;
  max-width: 20px;
  max-height: 35px;
  background-color: #0000ff;
`;

export default Header;
