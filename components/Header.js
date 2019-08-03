import Styled from "styled-components";
import Link from "next/link";

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

const StyledUL = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-block;
    display: flex;
    align-items: center;
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

const Header = () => (
  <StyledHeader className="site-header">
    <StyledNav>
      <HeaderLogo>
        <Link href="/">
          <a>Infinite Jed</a>
        </Link>
      </HeaderLogo>
      <StyledUL>
        <li>
          <Link href="">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>About</a>
          </Link>
        </li>
      </StyledUL>
    </StyledNav>
  </StyledHeader>
);

export default Header;
