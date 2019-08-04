import Styled from "styled-components";
import { mediaQueries } from "style/mediaQueries";

const StyledUL = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 260px;
    li {
        display: inline-block;
        a {
            transition: 0.3s ease-in-out all;
            text-decoration: none;
            border-bottom: 3px solid transparent;
            &:hover {
                border-bottom: 3px solid;
            }
        }
    }
    @media ${mediaQueries.mobile} {

    }
`;

const List = ({ children }) => <StyledUL>{children}</StyledUL>;

export default List;
