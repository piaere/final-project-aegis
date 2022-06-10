import styled from "styled-components";
import ColorButton from "./buttons/SmallButtonColor";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import { NavLink } from "react-router-dom";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import ENS, { getEnsAddress } from "@ensdomains/ensjs";
import {web3} from "web3";

// Set-up Ethereum Name Service provider


// const ens = new ENS({
//   provider: web3.currentProvider,
//   ensAddress: getEnsAddress("1"),
// });

const Header = ({ connect }) => {
  const { accounts, isLoggedIn, ENSName, setENSName } = useContext(Context);

  // useEffect(() => {
  //   const getENS = async () => {
  //     const name = await ens.getName(accounts[0]);
  //     if (name.name) {
  //       setENSName(name.name);
  //     }
  //   };
  //   getENS();
  // }, []);

  return (
    <Wrapper>
      <LogoLink to={"/aegis/journal"}>
        <Left>
          <Aegis>aegis</Aegis>
          <Logo></Logo>
        </Left>
      </LogoLink>
      <Right>
        <ColorButton
          string={
            accounts.length > 0
              ? ENSName
                ? ENSName
                : accounts[0]
              : "Connect wallet"
          }
          handleFunction={connect}
        />
        {isLoggedIn ? (
          <Circle>
            {/* <Avatar> */}
            <Jazzicon diameter={36} seed={jsNumberForAddress(accounts[0])} />
            {/* </Avatar> */}
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
  /* width: 15vw; */
`;
// const Center = styled.span``;

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
const Avatar = styled.span`
  /* border-radius: 50px; */
  width: 100%;
  object-fit: cover;
`;

const Aegis = styled.span`
  font-family: "Amiri", serif;
  font-size: 3vw;
  font-weight: 300;
  color: #0000ff;
`;

const Logo = styled.span`
  margin-top: 0.7vh;
  max-width: 1.1vw;
  max-height: 3.6vh;
  background-color: #0000ff;
`;

const LogoLink = styled(NavLink)`
  text-decoration: none;
`;

export default Header;
