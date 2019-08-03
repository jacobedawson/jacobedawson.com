import Styled from "styled-components";
import Link from "next/link";

const StyledLink = Styled.a`
        text-decoration: none;
        border-bottom: 3px solid transparent;
        transition: 0.3s ease-in-out all;
        cursor:pointer;
        &:hover {
            border-bottom: 3px solid;
        }
`;

const ContentLink = ({ url, text }) => (
  <div>
    <Link href={url}>
      <StyledLink>{text}</StyledLink>
    </Link>
  </div>
);

export default ContentLink;
