import styled from "styled-components";

const ConnectButton = ({ string, connect }) => {
  return <StyledButton onClick={() => connect()}>{string}</StyledButton>;
};

const StyledButton = styled.button`
  font-family: "Karla", sans-serif;
  font-weight: 300;
  font-size: 1.5vw;
  color: white;
  background-color: #0000ff;
  padding: 1vh 2vw;
  text-decoration: none;
  border-style: none;
  border-radius: 50px;
  margin-top: 1vh;
  cursor: pointer;
`;

export default ConnectButton;
