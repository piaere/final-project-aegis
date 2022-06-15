import styled from "styled-components";

const ColorButton = ({ string, handleFunction, isLoggedIn }) => {
  return (
    <StyledButton
      style={{ cursor: isLoggedIn ? "default" : "pointer" }}
      onClick={isLoggedIn ? null : () => handleFunction()}
    >
      {string}
    </StyledButton>
  );
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
`;

export default ColorButton;
