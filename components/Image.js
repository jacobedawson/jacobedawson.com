import Styled from "styled-components";

const StyledImage = Styled.img`
    width: 100%;
    margin: 2rem 0;
`;

const Image = ({ src, alt }) => <StyledImage src={src} alt={alt} />;

export default Image;
