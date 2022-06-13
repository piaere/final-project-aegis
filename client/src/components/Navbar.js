import styled from "styled-components";
import { GiFeather } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Context } from "../Context";
import { useContext } from "react";

const Navbar = () => {
  const { setNewArticlepublished } = useContext(Context);

  return (
    <Wrapper>
      <Animated>
        <Section>
          <NavLink
            to={"/aegis/journal"}
            onClick={() => setNewArticlepublished(null)}
          >
            <BsBook />
          </NavLink>
        </Section>
      </Animated>

      <Animated>
        <Publish>
          <NavLink
            to={"/aegis/publish"}
            onClick={() => setNewArticlepublished(null)}
          >
            <GiFeather />
          </NavLink>
        </Publish>
      </Animated>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  a:visited {
    color: blue;
  }
  width: 10%;
  height: 32vh;
  display: grid;
  grid-template-columns: 5vw;
  grid-template-rows: repeat(2, 1fr);
  position: fixed;

  color: blue;
  padding: 5vh 7vw;
  font-size: 5vh;
`;
const Section = styled.span``;

const Animated = styled.span`
  transition: transform 0.3s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;
const Publish = styled.span``;

export default Navbar;
