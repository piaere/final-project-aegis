import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

import { Link } from "react-router-dom";
import parse from "html-react-parser";

const Journal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { users, articles } = useContext(Context);

  useEffect(() => {
    users.length > 0 && articles.length > 0 && setIsMounted(true);
  }, [users, articles]);

  if (isMounted) {
    const newPreview = [];
    articles.forEach((article) => {
      const firstHeaderBlock = article.data.blocks.find(
        (block) => block.type === "header"
      );
      const firstParagraphBlock = article.data.blocks.find(
        (block) => block.type === "paragraph"
      );
      const firstImageBlock = article.data.blocks.find(
        (block) => block.type === "image"
      );
      const headerText = firstHeaderBlock.data.text;
      let paragraphText = parse(firstParagraphBlock.data.text);

      if (Array.isArray(paragraphText)) {
        let removedLinkArray = [];
        paragraphText.forEach((element) => {
          if (typeof element === "object") {
            removedLinkArray.push(element.props.children);
          } else {
            removedLinkArray.push(element);
          }
        });
        paragraphText = removedLinkArray.join("");
      }

      headerText &&
        paragraphText &&
        firstImageBlock &&
        newPreview.push({
          header: headerText,
          paragraph: paragraphText,
          imgSrc: firstImageBlock.data.url,
          id: article.id,
          publicKey: article.publicKey,
        });

      // console.log(newPreview);
    });

    return (
      <Wrapper>
        {newPreview.map((article) => {
          const header = article.header;
          const paragraph = article.paragraph;
          const imgSrc = article.imgSrc;
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

          return (
            <ArticleLink key={id} to={`/aegis/article/${id}`}>
              <Preview key={id}>
                <AuthorSection>
                  <Circle>
                    <Avatar src={avatar} alt="author's avatar" />
                  </Circle>
                  <Author>{author}</Author>
                </AuthorSection>
                {/* <PublicKey>{publicKey}</PublicKey> */}
                <ArticleSection>
                  <TextSection>
                    <Header>{header}</Header>
                    <Paragraph>{paragraph}</Paragraph>
                  </TextSection>
                  <ImgSection>
                    <Img src={imgSrc}></Img>
                  </ImgSection>
                </ArticleSection>
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
  border: solid blue 0.5px;
  padding: 0.5em 1.5em;
  border-radius: 20px;
`;
const Preview = styled.div`
  padding: 2em;
  margin: 1.2em 0;
  border: solid blue 0.5px;
  border-radius: 20px;
  background-color: #fef4fd;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const AuthorSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const ArticleSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
`;
const TextSection = styled.div`
  width: 80%;
  `;
const ImgSection = styled.div`
  width: 16%;
  text-align: center;
  /* background-color: white; */
  `;

const Img = styled.img`
  max-height: 33vh;
  `;

const Header = styled.h2``;
const Paragraph = styled.p`
color: #404040;

`;

const Circle = styled.span`
  width: 4vw;
  height: 4vw;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  border: blue 1.5px solid;
  padding: 2px;
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
// const PublicKey = styled.span``;
const Author = styled.span`
  margin-left: 1vw;
  font-size: 1.2em;
  font-weight: 500;
  color: #404040;
  font-family: "Amiri", serif;
`;

export default Journal;
