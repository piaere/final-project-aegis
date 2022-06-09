import styled from "styled-components";
import { GiFeather } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Section>
        <NavLink to={"/aegis/journal"}>
          <BsBook />
        </NavLink>
      </Section>

      <Publish>
        <NavLink to={"/aegis/publish"}>
          <GiFeather />
        </NavLink>
      </Publish>
    </Wrapper>
  );
};

const Wrapper = styled.div`
a:visited {
  color: blue;
}
  width: 100%;
  height: 32vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  position: fixed;

  color: blue;
  padding: 5vh 7vw;
  font-size: 5vh;
`;
const Section = styled.div``;
const Publish = styled.div``;

export default Navbar;
