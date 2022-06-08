import styled from "styled-components";
import { useState, useEffect } from "react";

import HollowButton from "./buttons/SmallButtonHollow";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

const Publish = () => {
  const [savedArticle, setSavedArticle] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [currentEditor, setCurrentEditor] = useState(null);

  useEffect(() => {
    currentArticle && setIsMounted(true);
  }, [currentArticle]);

  // console.log(savedArticle)

  useEffect(() => {
    currentEditor && fetch("/api/get-article")
      .then((res) => res.json())
      .then((data) => {
        // console.log("got it!");
        setSavedArticle(data.data);
        currentEditor.render(data.data);
      })
      .catch((error) => console.log("Error: ", error));
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
// savedArticle && editor.render(savedArticle);
      },
      onChange: (api, event) => {

        
        // console.log("Now I know that Editor's content changed!", event);
        editor
          .save()
          .then((outputData) => {
            // console.log("Article data: ", outputData);

            setCurrentArticle(outputData);
          })
          .catch((error) => {
            console.log("Saving failed: ", error);
          });
      },
      placeholder: "What is going on?",
    });
  }, []);

  // console.log(currentArticle);

  savedArticle && console.log(savedArticle);

  const SaveDraft = () => {
    fetch("/api/save-draft", {
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
          setSavedArticle(data);
        } else {
          alert(message);
        }
      });
  };

  return (
    <div>
      <Right>
        <HollowButton SaveDraft={SaveDraft} string={"Save draft"} />
      </Right>
      <EditorSection id="editor"></EditorSection>
    </div>
  );
};

const EditorSection = styled.div``;

const Right = styled.div`
  width: 100%;
  margin: 3em 60%;
  position: fixed;
`;

export default Publish;
