import styled from "styled-components";
import { Context } from "../Context";
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
  const [currentEditor, setCurrentEditor] = useState(null);

  const { users, setUsers } = useContext(Context);

  let articleId = useParams().id;

  useEffect(() => {
    fetch(`/api/get-article/${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.data);
        currentEditor && currentEditor.render(article.data);
      })
      .catch((error) => console.log("Error: ", error));
  }, [ articleId, currentEditor]);

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

  return (
    <div>
      <EditorSection id="editor"></EditorSection>
    </div>
  );
};
const EditorSection = styled.div``;

export default Article;
