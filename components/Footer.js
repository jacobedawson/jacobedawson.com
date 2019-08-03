import Styled from "styled-components";

const StyledFooter = Styled.footer`
    padding: 2rem 0;
`;

const Footer = () => (
  <StyledFooter className="site-footer">
    <nav>
      <ul>
        <li>Github</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Facebook</li>
        <li>Reddit</li>
        <li>Medium</li>
        <li>Stack Overflow</li>
      </ul>
    </nav>
  </StyledFooter>
);

export default Footer;
