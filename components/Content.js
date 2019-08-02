import Styled from "styled-components";

const StyledMain = Styled.main`
        max-width: 700px;
        margin: auto;
        padding: 0 1rem;
`;

const Content = ({ children }) => (
  <StyledMain className="content">{children}</StyledMain>
);

export default Content;
