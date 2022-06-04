import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "./buttons/Button";


const Home = () => {
  const [lastWord, setLastWord] = useState("");

  useEffect(() => {
    const wordList = [
      "Care",
      "Own",
      "Support",
      "Echo",
      "Amplify",
      "Inspire",
      "Free",
      "Learn",
      "Connect",
      "Share",
      "Give",
      "Receive",
      "Earn",
      "Participate",
      "Voice",
      "Build"
    ];
    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * wordList.length);
      setLastWord(wordList[randomIndex]);
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Slogan>
        <FirstWords>Read/ Write/ </FirstWords>
        <LastWord> {lastWord}</LastWord>
      </Slogan>
      <Pitch>
        Welcome to <span>aegis</span>, the web3 plateform where writers and readers
        connect.
      </Pitch>
      <Button string={"Try it now"} />
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 69%;
  margin-left: 14%;
`;
const Slogan = styled.div`
  display: grid;
  grid-template-columns: 35vw 10vw;
  grid-template-rows: 1fr;
  grid-row-gap: 0px;
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

export default Home;
