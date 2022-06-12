import { Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Article from "./Article";
import Error from "./Error";
import Journal from "./Journal";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Publish from "./Publish";
import { Context } from "../Context";

const Aegis = () => {
  const { setArticles, setUsers, newArticlepublished } = useContext(Context);

  useEffect(() => {
    fetch("/api/get-articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
        // console.log(data.data);
      })
      .catch((error) => console.log("Error: ", error));
  }, [setArticles, newArticlepublished]);

  useEffect(() => {
    fetch("/api/get-users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        // console.log(data.data);
      })
      .catch((error) => console.log("Error: ", error));
  }, [setUsers]);

  return (
    <>
      <Wrapper>
        <LeftMargin>
          <Navbar />
        </LeftMargin>{" "}
        <Center>
          <Route path="/aegis/article/:id">
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

export default Aegis;
