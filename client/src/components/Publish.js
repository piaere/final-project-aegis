import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import HollowButton from "./buttons/SmallButtonHollow";
import ColorButton from "./buttons/SmallButtonColor";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
// import ImageTool from "@editorjs/image";
import { Context } from "../Context";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

const Publish = () => {
  const [currentArticle, setCurrentArticle] = useState(null);
  const [currentEditor, setCurrentEditor] = useState(null);
  const { accounts } = useContext(Context);
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
        } else {
          alert(message);
        }
      });
  };

  return (
    <div>
      <Right>
        <HollowButton handleFunction={saveDraft} string={"Save draft"} />
        <ColorButton handleFunction={deleteDraft} string={"Delete draft"} />
        <HollowButton handleFunction={publish} string={"Publish!"} />
      </Right>
      <EditorSection id="editor"></EditorSection>
    </div>
  );
};

const EditorSection = styled.div``;

const Right = styled.div`
  margin-top: 62vh;
  margin-left: 65%;
  /* left: 7vh; */
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
