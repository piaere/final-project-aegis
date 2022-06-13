import styled from "styled-components";
import { Context } from "../Context";
import ColorButton from "./buttons/SmallButtonColor";
import Web3 from "web3";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import { FiExternalLink } from "react-icons/fi";

// import ImageTool from "@editorjs/image";
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
          config: {
            // endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
          },
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

  if (author) {
    avatar = author.ENSAvatar;
    authorName = author.ENSName;
    shortenKey = authorKey.slice(0, 5) + "..." + article.publicKey.slice(-4);
    shortenSig =
      article.signature.slice(0, 37) + "..." + article.signature.slice(-4);
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
        <Cell>{shortenSig}</Cell>
      </Infos>
    </Wrapper>
  );
};
const Wrapper = styled.div`
position: relative;
`

const Right = styled.div`
  margin-top: 55vh;
  margin-left: 63%;
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
const LikeArticle = styled.div`
  font-size: 1.2em;
  color: blue;
`;
const PublishMessage = styled.div`
  font-size: 1.1em;
  position: absolute;
  top: -40px;
  color: gray;
/* padding-bottom: 100px; */
  left: 22vw;
`;

const Infos = styled.table`
  margin-top: 5vh;
  padding: 5px;
  color: gray;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  /* border: 0.5px blue solid; */
  background-color: silver;
  color: white;
  border-radius: 20px;
  padding-left: 25px;
`;

const Cell = styled.td`
  padding: 5px;
`;

const EtherScanLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`;
export default Article;
