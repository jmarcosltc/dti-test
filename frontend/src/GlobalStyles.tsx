import { Global, css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    display: flex;
    margin-top: 60px;
    background: rgb(43, 43, 43);
    background: linear-gradient(
      13deg,
      rgba(43, 43, 43, 1) 0%,
      rgba(45, 45, 45, 1) 56%,
      rgba(48, 57, 59, 1) 100%
    );
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
