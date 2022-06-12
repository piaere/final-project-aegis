import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import HollowButton from "./buttons/SmallButtonHollow";
import ColorButton from "./buttons/SmallButtonColor";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
// import ImageTool from "@editorjs/image";
import { Context } from "../Context";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

const Publish = () => {
  const [currentArticle, setCurrentArticle] = useState(null);
  const [currentEditor, setCurrentEditor] = useState(null);
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
    console.log(currentArticle);

    currentArticle &&
      window.localStorage.setItem(
        "currentArticle",
        JSON.stringify(currentArticle)
      );
  };

  const deleteDraft = () => {
    window.localStorage.clear();
    currentEditor.clear();
  };

  const publish = () => {
    const data = currentArticle;

    fetch("/api/publish-article", {
      method: "POST",
      body: JSON.stringify({ data, publicKey: accounts[0] }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const { status, message, data } = json;
        console.log(json);
        if (status === 200) {
          console.log(data);
          history.push(`/aegis/article/${data.id}`);
          window.localStorage.clear();
          //Refresh the Journal list (triggers the get-articles useEffect)
          setNewArticlepublished(true);
          setNewArticlepublished(false);
        } else {
          alert(message);
        }
      });
  };

  return (
    <div>
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
    </div>
  );
};

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
  margin-top: 50vh;
  margin-left: 65%;

  height: 25vh;
  border: solid blue 2px;
  border-radius: 20px;
  padding: 0 1em;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default Publish;
