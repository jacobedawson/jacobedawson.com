import Styled from "styled-components";
import ReactSVG from "react-svg";

const StyledSVG = Styled(ReactSVG)`
  svg {
    width: 24px;
    height: 24px;
    display: block; 
  }
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

const Icon = ({ type }) => (
  <StyledSVG
    className={type}
    src={`static/icons/${type.toLowerCase()}.svg`}
  ></StyledSVG>
);

export default Icon;
