import Styled from "styled-components";

const StyledUL = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-items: center;
    li {
        margin-left: 1rem;
        display: inline;
        a {
            transition: 0.3s ease-in-out all;
            text-decoration: none;
            border-bottom: 3px solid transparent;
            &:hover {
                border-bottom: 3px solid;
            }
        }
    }
`;

const List = ({ children }) => <StyledUL>{children}</StyledUL>;

export default List;
