import { useEffect, useState } from "react";
import styled from "styled-components";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

const Journal = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetch("/api/get-articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
        console.log(articles);
      })
      .catch((error) => console.log("Error: ", error));

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
      readOnly: true,
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },

      placeholder: "What is going on?",
    });
  }, []);

  

  return (
    <Wrapper>
      <div>journal</div>
      <EditorSection id="editor"></EditorSection>
    </Wrapper>
  );
};

const EditorSection = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

export default Journal;
