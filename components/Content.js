import Styled from "styled-components";

const StyledMain = Styled.main`
        max-width: 700px;
        margin: 0 auto;
        padding: 4rem 1rem;
        flex: 1 1 auto;
`;

const Content = ({ children }) => (
  <StyledMain className="site-content">{children}</StyledMain>
);

export default Content;
