import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

const Journal = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { users, articles } = useContext(Context);

  useEffect(() => {
    users.length > 0 && articles.length > 0 && setIsMounted(true);
  }, [users, articles]);

  if (isMounted) {
    return (
      <Wrapper>
        {articles.map((article) => {
          const publicKey = article.publicKey;
          const title = article.data.blocks[0].data.text;
          const paragraph = article.data.blocks[1].data.text;
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
            <Preview key={id}>
              <img src={avatar} alt="author's avatar" />
              <div>{publicKey}</div>
              <div>{author}</div>
              <div>{title}</div>
              <div>{paragraph}</div>
            </Preview>
          );
        })}
      </Wrapper>
    );
  } else return <div>loading</div>;
};

const Preview = styled.div`
  padding: 2em;
  /* border: solid seashell 0.5px; */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: aliceblue; */
`;

export default Journal;
