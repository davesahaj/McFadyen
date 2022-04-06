import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 40%;
  flex-wrap: wrap;
`;

export const Image = styled.div`
  display: flex;
  max-width: 50%;
  max-height: 300px;
  justify-content: center;
  margin-top: 1rem;

  image {
    width: 100%;
    height: auto;
  }

  ${({ big }) =>
    big &&
    `
  max-width: 100%;
  max-height: 600px;`}
`;
