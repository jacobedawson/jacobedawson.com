import Styled from "styled-components";

const StyledImage = Styled.div`
    margin: 2rem 0;
    img {
        width: 100%;
    }
    small {
        font-size: 1rem;
    }
`;

const Image = ({ src, alt, caption }) => (
  <StyledImage className="image-container">
    <img src={src} alt={alt} />
    {caption && <small className="image-container__caption">{caption}</small>}
  </StyledImage>
);

export default Image;
