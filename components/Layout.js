import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0 auto;
    line-height: 1.65;
    font-weight: 400;
    font-size: 10px;
  }
  h1,h2,h3,h4,h5,h6 {
    padding: 0;
    margin: 0;
  }
  h1 {
    font-size: calc(1em + 3.4vw);
  }
  h2 {
    font-size: calc(1em + 3vw);
  }
  h3 {
    font-size: calc(1em + 2.6vw);
  }
  h4 {
    font-size: calc(1em + 2.2vw);
  }
  h5 {
    font-size: calc(1em + 1.8vw);
  }
  h6 {
    font-size: calc(1em + 1.4vw);
  }
  p, a {
    font-size: calc(1.6em + 0.3vw);
  }
`;

const Layout = props => (
  <div className="layout">
    <GlobalStyles />
    <Header />
    <Content>{props.children}</Content>
    <Footer />
  </div>
);

export default Layout;
