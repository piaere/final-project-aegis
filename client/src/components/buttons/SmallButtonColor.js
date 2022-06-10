import styled from "styled-components";

const ColorButton = ({ string, handleFunction }) => {
  const keyLength = 14;
  if (string.length > keyLength) {
    string = string.slice(0, 5) + "..." + string.slice(-4);
  }

  return <StyledButton onClick={() => handleFunction()}>{string}</StyledButton>;
};

const StyledButton = styled.button`
  font-family: "Karla", sans-serif;
  font-weight: 300;
  font-size: 1.2vw;
  color: white;
  background-color: #0000ff;
  padding: 1vh 2vw;
  text-decoration: none;
  border-style: none;
  border-radius: 50px;
  max-width: 15vw;
  cursor: pointer;

  /* &:hover {
    box-sizing: border-box;
    border: solid blue 2px;
    background-color: transparent;
    color: blue;
    font-weight: 500;
  } */
`;

export default ColorButton;
