import Styled from "styled-components";
import { mediaQueries } from "style/mediaQueries";
import Link from "next/link";
import InlineList from "components/InlineList";
import Icon from "components/Icon";

const StyledFooter = Styled.footer`
    display: flex;
    padding: 2rem 0;
`;

const StyledFooterNav = Styled.nav`
  width: 90%;
  max-width: 1170px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  .made-with-love {
    text-decoration: none;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid;
    }
  }
  @media ${mediaQueries.mobile} {
    flex-direction: column;
    text-align: center;
    .made-with-love {
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => (
  <StyledFooter className="site-footer">
    <StyledFooterNav>
      <Link href="/posts/how-i-made-this-blog">
        <a className="made-with-love">Made w/ Next.js, MDX & 😅</a>
      </Link>
      <InlineList>
        <li>
          <a href="https://github.com/jacobedawson">
            <Icon type="Github" height="24" width="24"></Icon>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jacobedawson">
            <Icon type="Twitter" height="24" width="24"></Icon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jacobdawson">
            <Icon type="LinkedIn" height="24" width="24"></Icon>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/jacobedawson">
            <Icon type="Facebook" height="24" width="24"></Icon>
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/user/jacobedawson">
            <Icon type="Reddit" height="24" width="24"></Icon>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@jacobedawson">
            <Icon type="Medium" height="24" width="24"></Icon>
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/1405255/jacobedawson">
            <Icon type="StackOverflow" height="24" width="24"></Icon>
          </a>
        </li>
      </InlineList>
    </StyledFooterNav>
  </StyledFooter>
);

export default Footer;
