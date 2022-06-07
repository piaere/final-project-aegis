import styled from "styled-components";

const HollowButton = ({ string }) => {
  return <StyledButton>{string}</StyledButton>;
};

const StyledButton = styled.button`
  font-family: "Karla", sans-serif;
  font-weight: 500;
  font-size: 1.5vw;
  background-color: transparent;
  color: #0000ff;
  padding: 1vh 2vw;
  text-decoration: none;
  border-style: solid blue;
  border-color: #0000ff;
  border-radius: 50px;
  margin-top: 1vh;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #0000ff;
    font-weight: 300;
  }
`;

export default HollowButton;
