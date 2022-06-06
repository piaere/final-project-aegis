import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");



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
  onReady: () => {console.log('Editor.js is ready to work!')},
  onChange: (api, event) => {
    console.log('Now I know that Editor\'s content changed!', event)
  },
  placeholder: 'What is going on?',


});



const Publish = () => {
  return (
    <div>
      <div  id="editor"></div>
    </div>
  );
};

export default Publish;
