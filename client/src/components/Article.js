import styled from "styled-components";

import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");


const Article = () => {
  const [article, setArticle] = useState(null);
  let { articleId } = useParams();

  useEffect(() => {
    fetch(`/api/get-article/${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("got it!");
        setArticle(data.data);
      })
      .catch((error) => console.log("Error: ", error));

    }, []);
    
    
    if (article) {
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
    readOnly: true,
    // data: {},
    onReady: () => {
      console.log("Editor.js is ready to work!");
      console.log(article)

      editor.render(article);
    },
  });
  
}

  return (
    <div>
      <EditorSection id="editor"></EditorSection>;
    </div>
  );
};
const EditorSection = styled.div``;

export default Article;
