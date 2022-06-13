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
            <Icon>
              {" "}
              <BsBook />
            </Icon>
          </NavLink>

        </Section>
      </Animated>

      <Animated>
        <Publish>
          <NavLink
            to={"/aegis/publish"}
            onClick={() => setNewArticlepublished(null)}
          >
            <Icon>
              {" "}
              <GiFeather />
            </Icon>
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
const Section = styled.span`

`;


const Animated = styled.span`
  transition: transform 0.3s ease-in;
  
  &:hover {
    transform: scale(1.1);

  }
`;
const Publish = styled.span`

`;

const Icon = styled.span`
  /* -webkit-box-shadow: 5px 5px 15px 2px rgba(0,0,0,0.31); 
box-shadow: 5px 5px 15px 2px rgba(0,0,0,0.31);

border-radius: 100%;
padding: 13px 10px 0 10px;


transition: color 0.3s ease-in;
border: 2px blue solid; */

  &:hover {
  }
`;

export default Navbar;
