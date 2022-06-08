import styled from "styled-components";
import ConnectButton from "./buttons/SmallButtonColor";
import { useContext } from "react";
import { Context } from "../Context";

const Header = ({ connect }) => {
  const { accounts, isLoggedIn } = useContext(Context);

  return (
    <Wrapper>
      <Left>
        <Aegis>aegis</Aegis>
        <Logo></Logo>
      </Left>
      <Right>
        <ConnectButton
          string={accounts.length>0? accounts[0] : "Connect wallet"}
          connect={connect}
        />
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

const Right = styled.span``;
// const Center = styled.span``;

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

export default Header;
