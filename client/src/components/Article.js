import styled from "styled-components";
import { Context } from "../Context";
import ColorButton from "./buttons/SmallButtonColor";
import Web3 from "web3";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import { FiExternalLink, FiCopy } from "react-icons/fi";
import moment from "moment";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

const Article = () => {
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [authorKey, setAuthorKey] = useState(null);
  const [currentEditor, setCurrentEditor] = useState(null);

  const { users, accounts, isLoggedIn, newArticlepublished } =
    useContext(Context);

  let articleId = useParams().id;

  useEffect(() => {
    fetch(`/api/get-article/${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.data);
        setAuthorKey(data.data.publicKey);
        currentEditor && currentEditor.render(article.data);
      })
      .catch((error) => console.log("Error: ", error));
    // eslint-disable-next-line
  }, [articleId, currentEditor]);

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4],
            defaultLevel: 1,
          },
          inlineToolbar: ["link"],
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        image: SimpleImage,
        embed: Embed,
        linkTool: {
          class: LinkTool,
          // config: {
          // endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
          // },
        },
      },
      readOnly: true,
      onReady: () => {
        console.log("Editor.js is ready to work!");
        setCurrentEditor(editor);
      },
    });
  }, []);

  useEffect(() => {
    users.forEach((user) => {
      if (user.publicKey === authorKey) {
        setAuthor(user);
      }
    });
  }, [authorKey, users]);

  // Tip Functionnality
  const tip = () => {
    if (isLoggedIn) {
      const amount = Web3.utils.toWei("0.01", "ether");

      window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: authorKey,
            value: Web3.utils.toHex(amount),
          },
        ],
      });
    } else alert("Please connect your wallet.");
  };

  let avatar;
  let authorName;
  let shortenKey;
  let shortenSig;
  let time;

  // Setting the author section
  if (author) {
    avatar = author.ENSAvatar;
    authorName = author.ENSName;
    shortenKey = authorKey.slice(0, 5) + "..." + article.publicKey.slice(-4);
    shortenSig =
      article.signature.slice(0, 37) + "..." + article.signature.slice(-4);
  }

  if (article) {
    time = moment(article.time).format("LL");
  }

  return (
    <Wrapper>
      {author && (
        <AuthorHeader>
          {" "}
          <Circle>
            {avatar ? (
              <Avatar src={avatar} alt="author avatar"></Avatar>
            ) : (
              <Jazzicon diameter={65} seed={jsNumberForAddress(authorKey)} />
            )}
          </Circle>
          <AuthorName>{authorName ? authorName : shortenKey}</AuthorName>
        </AuthorHeader>
      )}
      <PublishMessage>{newArticlepublished}</PublishMessage>
      <Right>
        <LikeArticle>Like this article?</LikeArticle>
        <LikeArticle>Tip its author!</LikeArticle>
        <ColorButton handleFunction={tip} string={"Send 0.01 ETH"} />
      </Right>
      <EditorSection id="editor"></EditorSection>
      <TimeCenter>
        <Time>
          ✍ Published {time}, proudly on <Aegis>aegis</Aegis> <Logo>_</Logo>
        </Time>
      </TimeCenter>
      <Infos>
        <Cell>Ethereum address :</Cell>
        <Cell>
          <EtherScanLink
            to={{ pathname: `https://etherscan.io/address/${authorKey}` }}
            target="_blank"
          >
            {authorKey} <FiExternalLink />
          </EtherScanLink>
        </Cell>
        <Cell>Signature :</Cell>
        <SigLink
          onClick={() => {
            navigator.clipboard.writeText(article.signature);
          }}
        >
          <Cell>{shortenSig}</Cell>
          <FiCopy />
        </SigLink>
      </Infos>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
`;

const Right = styled.div`
  margin-top: 50vh;
  margin-left: 64.3vw;
  height: 20vh;
  border: solid blue 2px;
  border-radius: 20px;
  padding: 0 1em;
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  transform: translatey(0px);
  animation: float 5s ease-in-out infinite;

  @keyframes float {
    0% {
      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.6);
      transform: translatey(0);
    }
    50% {
      box-shadow: 0 25px 15px 0 rgba(0, 0, 0, 0.2);
      transform: translatey(-1vh);
    }
    100% {
      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.6);
      transform: translatey(0);
    }
  }
  &:hover {
    animation-play-state: paused;
  }
`;

const EditorSection = styled.div`
  padding: 2em;
  border: solid blue 0.5px;
  border-radius: 20px;
`;
const AuthorHeader = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const AuthorName = styled.span`
  margin-left: 1.5vw;
  font-size: 2em;
  font-weight: 500;
  color: blue;
  font-family: "Amiri", serif;
  border: 1px solid blue;
  border-radius: 50px;
  padding: 0.5em 1em;
`;

const Circle = styled.span`
  width: 5vw;
  height: 5vw;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  border: blue 1.5px solid;
  padding: 2px;
`;
const Avatar = styled.img`
  border-radius: 50px;
  width: 100%;
  object-fit: cover;
`;

const TimeCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Time = styled.span`
  color: grey;
  margin: 2em 5em 0 0;
  font-style: italic;
`;
const Aegis = styled.span`
  color: blue;
  margin: 2em 0 0 3px;
  font-style: normal;
  font-size: 1.2em;
  font-weight: 500;
`;

const Logo = styled.span`
  padding: 0.2em 0.1em;
  max-width: 1.5vw;
  max-height: 9vh;
  background-color: #0000ff;
  color: #0000ff;
`;
const LikeArticle = styled.div`
  font-size: 1.2em;
  color: blue;
`;
const PublishMessage = styled.div`
  font-size: 1.1em;
  position: absolute;
  top: -40px;
  color: gray;

  left: 22vw;
`;

const Infos = styled.div`
  margin-top: 6vh;
  padding: 5px;
  color: gray;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  background-color: silver;
  color: white;
  border-radius: 20px;
  padding-left: 25px;
`;

const Cell = styled.span`
  padding: 5px;
`;

const EtherScanLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`;
const SigLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`;

export default Article;
