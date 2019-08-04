import Styled from "styled-components";
import Link from "next/link";
import Icon from "components/Icon";

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

const StyledHeaderLinks = Styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    margin-left: 1rem;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in-out all;
    &:hover {
      border-bottom: 2px solid;
    }
  }
`;

const Header = () => (
  <StyledHeader className="site-header">
    <StyledNav>
      <HeaderLogo>
        <Link href="/">
          <a>⚡JED</a>
        </Link>
      </HeaderLogo>
      {/* <StyledHeaderLinks> */}
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="https://github.com/jacobedawson">
        <a className="hidden-mobile">
          <Icon type="Github" height="24" width="24"></Icon>
        </a>
      </Link>
      <Link href="https://twitter.com/jacobedawson">
        <a className="hidden-mobile">
          <Icon type="Twitter" height="24" width="24"></Icon>
        </a>
      </Link>
      {/* </StyledHeaderLinks> */}
    </StyledNav>
  </StyledHeader>
);

export default Header;
