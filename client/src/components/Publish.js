import styled from "styled-components";
import { useState, useEffect } from "react";

import HollowButton from "./buttons/SmallButtonHollow";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
// import ImageTool from "@editorjs/image";
import ColorButton from "./buttons/SmallButtonColor";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

const Publish = () => {
  const [currentArticle, setCurrentArticle] = useState(null);
  const [currentEditor, setCurrentEditor] = useState(null);

  useEffect(() => {
    const storedDraft = window.localStorage.getItem("currentArticle");

    storedDraft &&
      currentEditor &&
      currentEditor.render(JSON.parse(storedDraft));
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
    fetch("/api/publish-article", {
      method: "POST",
      body: JSON.stringify(currentArticle),
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
          alert(message);
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
  margin: 3em 65%;
  position: fixed;
  display: flex;
  flex-direction: column;
`;

export default Publish;
