import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const { articles, isLoggedIn } = useContext(Context);
  const history = useHistory();
  const [articlesData, setArticlesData] = useState([]);
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const handleSelect = (id) => {
    history.push(`/aegis/article/${id}`);
    setText("");
  };

  useEffect(() => {
    let filteredData = [];

    let articleBlocks = [];
    articles.forEach((article) => {
      articleBlocks.push({ id: article.id, blocks: article.data.blocks });
    });

    let filteredBlocks;
    articleBlocks.forEach((article) => {
      const blocks = article.blocks;

      filteredBlocks = blocks.filter((block) => block.type === "header");

      filteredBlocks.forEach((block) => {
        filteredData.push({ header: block.data.text, id: article.id });
      });
    });

    setArticlesData([...filteredData]);
  }, [articles]);

  useEffect(() => {
    let resultArr = [];
    if (articlesData.length > 0) {
      articlesData
        .filter((item) =>
          item.header.toLowerCase().includes(text.toLowerCase())
        )
        .forEach((result) => {
          resultArr.push(result);
          setResults(resultArr);
        });
    }
  }, [text]);

  return (
    <>
      {isLoggedIn && (
        <Wrapper>
          <InputWrapper>
            <Input
              type="text"
              value={text}
              placeholder="Search"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </InputWrapper>
          {text && (
            <>
              <Ul>
                {results.map((element) => {
                  return (
                    <Li
                      key={element.id}
                      onClick={() => handleSelect(element.id)}
                    >
                      <span>{element.header}</span>
                    </Li>
                  );
                })}
              </Ul>
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  background-color: #fff7ff;
`;

const InputWrapper = styled.div``;
const Ul = styled.ul`
  position: absolute;
  margin-top: 1px;
  padding: 0.5em;
  width: 31%;
  background-color: #fffaff;
  max-height: 200px;
  overflow-y: scroll;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
`;
const Li = styled.li`
  width: 100%;
  padding: 0.5em;
  cursor: pointer;
  font-size: 0.85em;
  font-weight: 300;
  &:hover {
    background-color: rgba(120, 133, 204, 0.1);
  }
`;
const Input = styled.input`
  z-index: 1;
  padding: 0.4em;
  width: 30vw;
  height: 1.5em;
  background-color: transparent;
  font-style: italic;
  font-weight: 100;
  border: solid 0.5px blue;
  border-radius: 5px;
  padding: 15px;
  &:focus {
    border: 2px solid var(--color-light-blue);
  }
`;

export default SearchBar;
