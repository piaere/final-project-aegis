import styled from "styled-components";
import { Context } from "../Context";
import ColorButton from "./buttons/SmallButtonColor";
import Web3 from "web3";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
// import ImageTool from "@editorjs/image";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

const Article = () => {
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [authorKey, setAuthorKey] = useState(null);
  const [currentEditor, setCurrentEditor] = useState(null);

  const { users, accounts, isLoggedIn } = useContext(Context);

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

  return (
    <>
      {author && (
        <AuthorHeader>
          {" "}
          <Circle>
            <Avatar src={author.avatarSrc} alt="author's avatar"></Avatar>
          </Circle>
          <AuthorName>{author.displayName}</AuthorName>
        </AuthorHeader>
      )}
      <Right>
        <LikeArticle>Like this article?</LikeArticle>
        <LikeArticle>Tip its author!</LikeArticle>
        <ColorButton handleFunction={tip} string={"Send 0.01 ETH"} />
      </Right>
      <EditorSection id="editor"></EditorSection>
    </>
  );
};
const Right = styled.div`
  margin-top: 55vh;
  margin-left: 63%;
  /* left: 7vh; */
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
`;
const Avatar = styled.img`
  border-radius: 50px;
  width: 100%;
  object-fit: cover;
`;
const LikeArticle = styled.div`
  font-size: 1.2em;
  color: blue;
  /* font-weight: 500; */
`;

export default Article;
