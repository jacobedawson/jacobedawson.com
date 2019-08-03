import Styled from "styled-components";
import Link from "next/link";
import Icon from "components/Icon";
import List from "components/List";

const StyledHeader = Styled.header`
    padding: 2rem 0;
    width: 100%;
`;

const HeaderLogo = Styled.div`
    display: inline-block;
    a {
        text-decoration: none;
        font-weight: 700;
        font-size: 1.6rem;    
    }
`;

const StyledNav = Styled.nav`
    max-width: 1170px;
    margin: auto;
    width: 90vw;
    display: flex;
    justify-content: space-between;
`;

const Header = () => (
  <StyledHeader className="site-header">
    <StyledNav>
      <HeaderLogo>
        <Link href="/">
          <a>⚡JED</a>
        </Link>
      </HeaderLogo>
      <List>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="hidden-mobile">
          <Link href="https://github.com/jacobedawson">
            <a>
              <Icon type="Github" height="24" width="24"></Icon>
            </a>
          </Link>
        </li>
        <li className="hidden-mobile">
          <Link href="https://twitter.com/jacobedawson">
            <a>
              <Icon type="Twitter" height="24" width="24"></Icon>
            </a>
          </Link>
        </li>
      </List>
    </StyledNav>
  </StyledHeader>
);

export default Header;
