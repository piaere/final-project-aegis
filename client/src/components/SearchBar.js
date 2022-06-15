import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import { useHistory } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";

const SearchBar = () => {
  const { articles } = useContext(Context);
  let history = useHistory();
  const [articlesData, setArticlesData] = useState([]);
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  let resultArr = [];
  const handleSelect = (id) => {
    history(`aegis/article/${id}`);
    setText("");
  };

  console.log(articles);
  const handleClickAway = () => {
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
      //  console.log(blocks)
      filteredBlocks = blocks.filter((block) => block.type == "header");

      filteredBlocks.forEach((block) => {
        filteredData.push({ header: block.data.text, id: article.id });
      });
      setArticlesData([...filteredData]);
      console.log("filteredData", filteredData);
    });
  }, [articles]);

  console.log(articlesData);

  useEffect(() => {
    articlesData
      .filter((item) => item.header.toLowerCase().includes(text.toLowerCase()))
      .map((result) => {
        resultArr.push(result);
        setResults(resultArr);
      });
  }, [text]);
  return (
    <>
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
          <ClickAwayListener onClickAway={handleClickAway}>
            <>
              <div>
                <Ul>
                  {results.map((element) => {
                    return (
                      <Li
                        key={element._id}
                        onClick={() => handleSelect(element._id)}
                      >
                        <span>{element.name}</span>
                      </Li>
                    );
                  })}
                </Ul>
              </div>
            </>
          </ClickAwayListener>
        )}
      </Wrapper>
    </>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    margin-right: 0.5em;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  padding: 0.5em;
  width: 77%;
  background-color: white;
  max-height: 200px;
  box-sizing: border-box;
  overflow: visible;
  overflow-y: scroll;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 500;
`;
const Li = styled.li`
  width: 100%;
  padding: 0.25em;
  background-color: white;
  font-size: 0.85em;
  font-weight: 300;
  &:hover {
    background-color: rgba(120, 133, 204, 0.1);
  }
`;
const Input = styled.input`
  padding: 0.4em;
  width: 30vw;
  height: 1.5em;
  &:focus {
    border: 2px solid var(--color-light-blue);
  }
`;

export default SearchBar;
