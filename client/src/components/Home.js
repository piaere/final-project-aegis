import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import Button from "./buttons/ConnectButton";
import { useHistory } from "react-router-dom";
import { Context } from "../Context";

const Home = ({ connect }) => {
  const [lastWord, setLastWord] = useState("");
  const { isLoggedIn } = useContext(Context);

  const history = useHistory();

  useEffect(() => {
    const wordList = [
      "Care",
      "Own",
      "Support",
      "Echo",
      "Amplify",
      "Inspire",
      "Learn",
      "Connect",
      "Share",
      "Give",
      "Receive",
      "Earn",
      "Participate",
      "Voice",
      "Build",
      "Research",
      "Publish",
    ];
    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * wordList.length);
      setLastWord(wordList[randomIndex]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/aegis/journal");
    }
  }, [isLoggedIn]);

  return (
    <Section>
      <Slogan>
        <FirstWords>Read/ Write/ </FirstWords>
        <LastWord> {lastWord}</LastWord>
      </Slogan>
      <Pitch>
        Welcome to <span>aegis</span>, the web3 plateform where writers and
        readers connect.
      </Pitch>
      <Animated>
        <Button string={"Try it now"} connect={connect} />
      </Animated>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 69%;
  margin: 14%;
`;
const Slogan = styled.div`
  display: grid;
  grid-template-columns: 35vw 10vw;
  padding-right: 7%;
`;
const FirstWords = styled.span`
  font-family: "Amiri", serif;
  color: #0000ff;
  font-size: 6.5vw;
`;
const LastWord = styled.span`
  font-family: "Amiri", serif;
  color: #0000ff;
  font-size: 6.5vw;
`;
const Pitch = styled.p`
  margin-top: 5%;
  font-family: "Karla", sans-serif;
  font-weight: 300;
  font-size: 2.5vw;
  line-height: 1.2;
  text-align: center;
  width: 70%;
  text-justify: distribute;

  span {
    color: #0000ff;
    font-weight: 500;
  }
`;

const Animated = styled.span`
  transition: transform 0.3s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Home;
