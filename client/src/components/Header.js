import styled from "styled-components";
import ColorButton from "./buttons/SmallButtonColor";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import { NavLink } from "react-router-dom";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import UnderscoreCSS from "./BlinkingCursor";

// import SearchBar from "./SearchBar";

const Header = ({ connect }) => {
  const {
    accounts,
    isLoggedIn,
    ENSName,
    ENSAvatar,
    shortenAddy,
    setNewArticlepublished,
  } = useContext(Context);

  return (
    <Wrapper>
      <LogoLink
        to={"/aegis/journal"}
        onClick={() => setNewArticlepublished(null)}
      >
        <Left>
          <Aegis>aegis</Aegis>
          <Lower>
            {" "}
            <UnderscoreCSS speed={0.5} />
          </Lower>
        </Left>
      </LogoLink>
      {/* <SearchBar /> */}
      <Right>
        <ColorButton
          string={
            accounts.length > 0
              ? ENSName
                ? ENSName
                : shortenAddy
              : "Connect wallet"
          }
          handleFunction={connect}
          isLoggedIn={isLoggedIn}
        />
        {isLoggedIn ? (
          <Circle>
            {ENSAvatar ? (
              <Avatar src={ENSAvatar} alt="user ENS avatar"></Avatar>
            ) : (
              <Jazzicon
                diameter={36}
                seed={jsNumberForAddress(accounts[0] || [])}
              />
            )}
          </Circle>
        ) : null}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 2vw;
  width: 96vw;
  height: 8vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;
const Left = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2px;
`;

const Right = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Circle = styled.span`
  width: 3vw;
  height: 3vw;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: blue 1.5px solid;
  margin-left: 10px;
`;
const Avatar = styled.img`
  border-radius: 50px;
  padding: 2px;
`;

const Aegis = styled.span`
  font-family: "Amiri", serif;
  font-size: 3vw;
  font-weight: 300;
  color: #0000ff;
`;

const Lower = styled.span`
  position: absolute;
  left: 6vw;
  top: 3vh;
`;

const LogoLink = styled(NavLink)`
  text-decoration: none;
`;

export default Header;
