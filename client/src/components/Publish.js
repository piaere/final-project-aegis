import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import { useState, useEffect } from "react";
import ImageTool from "@editorjs/image";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

const Publish = () => {
  // const [currentArticle, setCurrentArticle] = useState(null);
  let currentArticle;
  const [savedArticle, setSavedArticle] = useState(null);

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
    data: { savedArticle },
    onReady: () => {
      console.log("Editor.js is ready to work!");
    },
    onChange: (api, event) => {
      console.log("Now I know that Editor's content changed!", event);
      editor
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
          // setCurrentArticle(outputData);
          currentArticle = outputData;
          // console.log(currentArticle);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    },
    placeholder: "What is going on?",
  });

  console.log(currentArticle);

  const SaveDraft = () => {
    fetch("/save-draft", {
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
      <div id="editor"></div>
      <button onClick={() => SaveDraft()}>save draft</button>
    </div>
  );
};

export default Publish;
