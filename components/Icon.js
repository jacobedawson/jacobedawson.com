import Styled from "styled-components";

const StyledSVG = Styled.svg`
  width: 24px;
  height: 24px;
  display: block;
  path {
    fill: #5b5b5b;
  }
  &:hover {
    &.Github {
      path {
        fill: #333;
      }
    }
    &.Twitter {
      path {
          fill: #1da1f2;
        }
      }
    }
`;

const Icon = ({ children, title, width, height }) => (
    <StyledSVG
    className={title}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <title>{title}</title>
        { children }
    </StyledSVG>
)

export default Icon;