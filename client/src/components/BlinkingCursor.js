import styled, { keyframes } from "styled-components";

const BlinkingCursor = () => (
  <Underscore>
    <Logo>_</Logo>
  </Underscore>
);

const blink = keyframes`
0%{opacity:1}
49%{opacity:1}
50%{opacity:0.75}
100%{opacity:0}
`;

const Underscore = styled.span`
  animation: ${blink} 1s infinite;
`;

const Logo = styled.span`
  padding: 0.3em 0.1em 0.2em;
  max-width: 1.3vw;
  max-height: 9vh;
  background-color: #0000ff;
  color: #0000ff;
`;

export default BlinkingCursor;
