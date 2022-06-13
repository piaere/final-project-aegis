import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const Journal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { users, articles } = useContext(Context);

  useEffect(() => {
    users.length > 0 && articles.length > 0 && setIsMounted(true);
  }, [users, articles]);

  if (isMounted) {
    // PREPARE THE PREVIEW ELEMENTS
    const preview = [];

    // Get the first header, paragraph and image to display
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

      //Fall case if any of them return null
      // For header
      let headerText;
      firstHeaderBlock
        ? (headerText = firstHeaderBlock.data.text)
        : (headerText = "");
      //For paragraph
      let paragraphText;
      firstParagraphBlock
        ? (paragraphText = parse(firstParagraphBlock.data.text))
        : (paragraphText = "");
      //For image
      let imgUrl;
      firstImageBlock ? (imgUrl = firstImageBlock.data.url) : (imgUrl = "");

      // Remove the links from the text
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

      // Create the preview object
      preview.push({
        header: headerText,
        paragraph: paragraphText,
        imgSrc: imgUrl,
        id: article.id,
        publicKey: article.publicKey,
      });
    });

    return (
      <Wrapper>
        {preview.map((article) => {
          const header = article.header;
          const paragraph = article.paragraph;
          const imgSrc = article.imgSrc;
          const publicKey = article.publicKey;
          const shortenKey =
            article.publicKey.slice(0, 5) + "..." + article.publicKey.slice(-4);

          const id = article.id;
          let author;
          let avatar;
          users.forEach((user) => {
            if (user.publicKey === publicKey) {
              author = user.ENSName;
              avatar = user.ENSAvatar;
            }
          });

          return (
            <Animated>
              <ArticleLink key={id} to={`/aegis/article/${id}`}>
                <Preview key={id}>
                  <AuthorSection>
                    <Circle>
                      {avatar ? (
                        <Avatar src={avatar} alt="author avatar"></Avatar>
                      ) : (
                        <Jazzicon
                          diameter={50}
                          seed={jsNumberForAddress(publicKey)}
                        />
                      )}
                    </Circle>
                    <Author>{author ? author : shortenKey}</Author>
                  </AuthorSection>
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
            </Animated>
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

const Animated = styled.div`
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.01);
  }
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
  letter-spacing: 0.03em;
`;
const ImgSection = styled.div`
  width: 16%;
  text-align: center;
`;

const Img = styled.img`
  max-height: 33vh;
  border-radius: 10px;
`;

const Header = styled.h2``;
const Paragraph = styled.p`
  color: #404040;
  line-height: 120%;
  font-family: "Amiri", serif;
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
  color: blue;
  font-family: "Amiri", serif;
`;

export default Journal;
