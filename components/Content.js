import Styled from "styled-components";
import { mediaQueries } from "style/mediaQueries";

const StyledMain = Styled.main`
        max-width: 700px;
        margin: 0 auto;
        padding: 4rem 1.5rem;
        flex: 1 1 auto;
        @media ${mediaQueries.mobile} {
          padding: 2rem 1.5rem;
        }
`;

const Content = ({ children }) => (
  <StyledMain className="site-content">{children}</StyledMain>
);

export default Content;
