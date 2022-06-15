import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Context";
import Web3 from "web3";
import HollowButton from "./buttons/SmallButtonHollow";
import ColorButton from "./buttons/SmallButtonColor";
import EditorJS from "@editorjs/editorjs";
// import ImageTool from "@editorjs/image";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

var web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);

const Publish = () => {
  const [currentArticle, setCurrentArticle] = useState(null);
  const [currentEditor, setCurrentEditor] = useState(null);
  const [isDraftSaved, setIsDraftSaved] = useState(false);
  const { accounts, ENSName, ENSAvatar, shortenAddy, setNewArticlepublished } =
    useContext(Context);
  const history = useHistory();

  useEffect(() => {
    const storedDraft = window.localStorage.getItem("currentArticle");
    if (storedDraft && currentEditor) {
      currentEditor.render(JSON.parse(storedDraft));
      setCurrentArticle(JSON.parse(storedDraft));
    }
  }, [currentEditor]);

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
            endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
          },
        },
      },
      data: {},
      onReady: () => {
        console.log("Editor.js is ready to work!");
        setCurrentEditor(editor);
      },
      onChange: (api, event) => {
        editor
          .save()
          .then((outputData) => {
            setCurrentArticle(outputData);
          })
          .catch((error) => {
            console.log("Saving failed: ", error);
          });
      },
      placeholder: "What is going on?",
    });
  }, []);

  const saveDraft = () => {
    currentArticle &&
      window.localStorage.setItem(
        "currentArticle",
        JSON.stringify(currentArticle)
      );
    setIsDraftSaved(true);
  };

  const deleteDraft = () => {
    window.localStorage.clear();
    currentEditor.clear();
    setIsDraftSaved(false);
  };

  const publish = async () => {
    const data = currentArticle;

    const message = `Hi ${
      ENSName ? ENSName : shortenAddy
    }, to validate this publication, please sign to confirm you are the author of this article.`;
    const signature = await web3.eth.personal.sign(message, accounts[0]);

    await fetch("/api/publish-article", {
      method: "POST",
      body: JSON.stringify({ data, publicKey: accounts[0], signature }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const { status, message, data } = json;

        if (status === 200) {
          history.push(`/aegis/article/${data.id}`);
          window.localStorage.clear();

          //Display mess and + Refresh the Journal list (triggers the get-articles useEffect)
          setNewArticlepublished("Article published successfully! 🎉");
        } else {
          alert(message);
        }
      });
  };

  return (
    <Wrapper>
      {isDraftSaved && <SavedMessage>💾  Your draft has been saved!</SavedMessage>}

      <AuthorHeader>
        <Circle>
          {ENSAvatar ? (
            <Avatar src={ENSAvatar} alt="user ENS avatar"></Avatar>
          ) : (
            <Jazzicon diameter={69} seed={jsNumberForAddress(accounts[0])} />
          )}
        </Circle>

        <AuthorName>{ENSName ? ENSName : shortenAddy}</AuthorName>
      </AuthorHeader>

      <Right>
        <HollowButton handleFunction={saveDraft} string={"Save draft"} />
        <ColorButton handleFunction={deleteDraft} string={"Delete draft"} />
        <HollowButton handleFunction={publish} string={"Publish!"} />
      </Right>
      <EditorSection id="editor"></EditorSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const SavedMessage = styled.div`
  font-size: 1.1em;
  position: absolute;
  top: -40px;
  color: gray;
  /* padding-bottom: 100px; */
  left: 22.5vw;
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
  padding: 3px;
  border-radius: 50px;
  width: 100%;
  object-fit: cover;
`;

const EditorSection = styled.div`
  padding: 2em;
  border: solid blue 0.5px;
  border-radius: 20px;
`;

const Right = styled.div`
  margin-top: 46vh;
  margin-left: 65%;
  height: 25vh;
  border: solid blue 2px;
  border-radius: 20px;
  padding: 0 1em;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

export default Publish;
