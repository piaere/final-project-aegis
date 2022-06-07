import { Route } from "react-router-dom";
import styled from "styled-components";
import Article from "./Article";
import Error from "./Error";
import Journal from "./Journal";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Publish from "./Publish";
import HollowButton from "./buttons/SmallButtonHollow";

const Aegis = () => {
  return (
    <>
      <Wrapper>
        <LeftMargin>
          <Navbar />
        </LeftMargin>{" "}
        <Center>
          <Route path="/aegis/article/:articleId">
            <Article />
          </Route>
          <Route path="/aegis/journal">
            <Journal />
          </Route>
          <Route path="/aegis/profile/:profileId">
            <Profile />
          </Route>
          <Route path="/aegis/publish">
            <Publish />
          </Route>
          <Route path="/aegis/error">
            <Error />
          </Route>
        </Center>
        <Right>{/* <HollowButton string={"Save draft"}/> */}</Right>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  grid-template-rows: 1fr;
`;
const LeftMargin = styled.div`
  width: 100%;
  height: 100%;
`;
const Center = styled.div`
  width: 100%;
  height: 100%;
`;
const Right = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 5em 42em;
  position: fixed;
`;

export default Aegis;
