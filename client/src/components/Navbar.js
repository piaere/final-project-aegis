import styled from "styled-components";
import { GiFeather } from "react-icons/gi";
import { BsBook } from "react-icons/bs";

const Navbar = () => {
  return (
    <Wrapper>
      <Section>
        <BsBook />
      </Section>

      <Publish>
        <GiFeather />
      </Publish>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
