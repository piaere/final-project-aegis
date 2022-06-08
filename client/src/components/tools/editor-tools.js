import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
const LinkTool = require("@editorjs/link");
const SimpleImage = require("@editorjs/simple-image");

export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  embed: Embed,

  list: List,

  linkTool: LinkTool,
  image: Image,

  header: Header,
  simpleImage: SimpleImage,
};
