import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

import Parser from "editorjs-viewer";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const Journal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { users, articles } = useContext(Context);

  const data = {
    time: 1605667704216,
    version: "2.19.0",
    blocks: [
      {
        data: { text: "header example", level: 2 },
        type: "header",
      },
    ],
  };

  useEffect(() => {
    users.length > 0 && articles.length > 0 && setIsMounted(true);
  }, [users, articles]);

  if (isMounted) {
    const previewArticlesBlocks = [];
    articles.forEach((article) => {
      previewArticlesBlocks.push(article.data.blocks.slice(0, 2));
      // previewArticles.data.blocks = previewArticlesBlocks;
    });
    console.log("previewArticlesBlocks", previewArticlesBlocks);

    const previewArticles = [...articles];
    previewArticles.forEach((article, index) => {
      article.data.blocks = previewArticlesBlocks[index];
    });

    console.log("previewArticles", previewArticles);

    return (
      <Wrapper>
        {previewArticles.map((article) => {
          const publicKey = article.publicKey;
          const id = article.id;
          let author;
          let avatar;
          users.forEach((user) => {
            if (user.publicKey === publicKey) {
              author = user.displayName;
              avatar = user.avatarSrc;
            }
          });
          // console.log(result)
          // const title = article.data.blocks[0].data.text;
          // const paragraph = article.data.blocks[1].data.text;

          const result = Parser(article.data.blocks);

          return (
            <ArticleLink to={`/aegis/article/${id}`}>
              <Preview key={id}>
                <Circle>
                  <Avatar src={avatar} alt="author's avatar" />
                  <Author>{author}</Author>
                </Circle>
                {/* <PublicKey>{publicKey}</PublicKey> */}
                <Div>{parse(result)}</Div>
                {/* <div>{title}</div> */}
                {/* <div>{paragraph}</div> */}
              </Preview>
            </ArticleLink>
          );
        })}
      </Wrapper>
    );
  } else return <div>loading</div>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  /* background-color: aliceblue; */
`;
const Preview = styled.div`
  padding: 2em;
  margin: 1.2em 0; 
  border: solid blue 0.5px;
  border-radius: 20px;
  background-color: #fef4fd;
  color: black;
`;

const Div = styled.div`
  text-decoration: none;
`;
const Circle = styled.span`
  width: 5vw;
  height: 5vw;
  border-radius: 50px;

  display: flex;
  flex-direction: row;
`;
const Avatar = styled.img`
  border-radius: 50px;
  width: 100%;
  object-fit: cover;
`;
const ArticleLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
const PublicKey = styled.span``;
const Author = styled.span``;

export default Journal;
