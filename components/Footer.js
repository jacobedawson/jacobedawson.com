import Styled from "styled-components";
import Link from "next/link";
import List from "components/List";
import Icon from "components/Icon";

const StyledFooter = Styled.footer`
    display: flex;
    padding: 2rem 0;
`;

const Footer = () => (
  <StyledFooter className="site-footer">
    <nav>
      <Link href="/posts/how-i-made-this-blog">
        <a>How I Made This Blog</a>
      </Link>
      <List>
        <li>
          <Link href="https://github.com/jacobedawson">
            <a>
              <Icon type="Github" height="24" width="24"></Icon>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/jacobedawson">
            <a>
              <Icon type="Twitter" height="24" width="24"></Icon>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://linked.com/jacobedawson">
            <a>
              <Icon type="LinkedIn" height="24" width="24"></Icon>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://facebook.com/jacobedawson">
            <a>
              <Icon type="Facebook" height="24" width="24"></Icon>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://reddit.com/u/jacobedawson">
            <a>
              <Icon type="Reddit" height="24" width="24"></Icon>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://medium.com/jacobedawson">
            <a>
              <Icon type="Medium" height="24" width="24"></Icon>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://stackoverflow.com/jacobedawson">
            <a>
              <Icon type="StackOverflow" height="24" width="24"></Icon>
            </a>
          </Link>
        </li>
      </List>
    </nav>
  </StyledFooter>
);

export default Footer;
