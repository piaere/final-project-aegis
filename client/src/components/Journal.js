import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import moment from "moment";

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

      const time = article.data.time;

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
        time: time,
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
          // Format Time
          const time = moment(article.time).format("LL");
          const header = article.header;
          let paragraph = article.paragraph;

          // Truncate long paragraph
          if (paragraph.length > 400) {
            paragraph = article.paragraph.slice(0, 400) + "...";
          }
          const imgSrc = article.imgSrc;

          const publicKey = article.publicKey;

          // Truncate PublicKey length
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
            <ArticleLink key={id} to={`/aegis/article/${id}`}>
              <Preview key={id}>
                <Top>
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
                  <Time>{time}</Time>
                </Top>
                <ArticleSection>
                  <TextSection>
                    <Header>{header}</Header>
                    <Paragraph>{paragraph}</Paragraph>
                  </TextSection>
                  {/* {imgSrc ? ( */}
                  <ImgSection imgSrcBool={imgSrc}>
                    <Img src={imgSrc}></Img>
                  </ImgSection>
                  {/* ) : (
                    null
                  )} */}
                </ArticleSection>
              </Preview>
            </ArticleLink>
          );
        })}
      </Wrapper>
    );
  } else
    return (
      <Center>
        <Logo>_</Logo>
        <Loading>Loading ...</Loading>
      </Center>
    );
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
  transition: all 200ms ease;
  transition-property: box-shadow, transform;

  &:hover {
    transform: scale(1.01);
    -webkit-box-shadow: 0px 5px 10px -1px rgba(0, 0, 0, 0.46);
    box-shadow: 0px 5px 10px -1px rgba(0, 0, 0, 0.46);
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;
const Time = styled.span`
  margin-top: 0.5em;
  color: white;
  background-color: gainsboro;
  padding: 3px 15px;
  border-radius: 50px;
  font-weight: 500;
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
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
`;
const TextSection = styled.div`
  width: 75%;
`;
const ImgSection = styled.div`
  width: 22%;
  /* min-width: 20%; */
  /* text-align: center; */
  display: flex;
  justify-content: flex-end;
`;

const Img = styled.img`
  margin-top: 2.5em;
  max-height: 10em;
  border-radius: 10px;
`;

const Header = styled.h2`
  text-align: justify;
  text-justify: inter-word;
`;
const Paragraph = styled.p`
  color: #404040;
  line-height: 120%;
  font-family: "Amiri", serif;
  font-size: 1.2em;
  text-align: justify;
  text-justify: inter-word;
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
  border: 1px solid blue;
  border-radius: 50px;
  padding: 0.5em 1em;
`;
const Center = styled.div`
  margin-top: 30vh;
  text-align: center;
`;
const Loading = styled.span`
  font-size: 1.5em;
  font-weight: 500;
  color: blue;
  font-family: "Amiri", serif;

  padding: 0.5em;

`;

const Logo = styled.span`
  padding: 0.2em 0.1em;
  max-width: 1.3vw;
  max-height: 8vh;
  background-color: #0000ff;
  color: #0000ff;

`;

export default Journal;
